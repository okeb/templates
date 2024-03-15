from ast import TypeVar
import time
from typing import Any, Callable
import uvicorn
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from slowapi import _rate_limit_exceeded_handler
from slowapi.middleware import SlowAPIMiddleware
from slowapi.errors import RateLimitExceeded

from app.config import settings
from app.utilities.ratelimiter import add_ratelimiter
from app.utilities.logger import logger


# TODO: FastAPI app creation and configuration
app = FastAPI(
    title="{{ cookiecutter.project_name }}",
    description="{{ cookiecutter.short_description }}",
    version="{{ cookiecutter.version }}",
    docs_url="/docs",
    root_path=settings.root_path,
)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_origins=[
        "http://localhost:3000",
    ],
)

app.state.limiter = add_ratelimiter()
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler) # type: ignore
app.add_middleware(SlowAPIMiddleware)

F = TypeVar("F", bound=Callable[..., Any])

@app.middleware("http")
async def process_time_log_middleware(
    request: Request, 
    call_next: F # type: ignore
) -> Response:
    """
    Add API process time in response headers and log calls
    """
    start_time = time.time()

    response: Response = await call_next(request)
    process_time = str(round(time.time() - start_time, 3))
    response.headers["X-Process-Time"] = process_time

    logger.info(
        "Method=%s Path=%s StatusCode=%s ProcessTime=%s",
        request.method,
        request.url.path,
        response.status_code,
        process_time,
    )

    return response


# TODO: add routers section
# ? to add a rooter create a folder in the app/rooters folder with the roouter_name
# ? and use the snippet code below to add it to the app
# app.include_router(
#     [router_name].router,
#     prefix="/[router_name]",
#     tags=["router_name"],
# )


@app.get("/")
async def read_root() -> dict[str, str]:
    """
    Hello, world!
    """
    return {
        "message": "{{ cookiecutter.short_description }}",
        "project_name": "{{ cookiecutter.project_name }}",
        "project_description": "{{ cookiecutter.short_description }}"
    }

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        log_level="debug",
        reload=True,
    )