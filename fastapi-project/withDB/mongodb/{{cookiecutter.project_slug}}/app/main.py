import uvicorn
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from slowapi import _rate_limit_exceeded_handler
from slowapi.middleware import SlowAPIMiddleware
from slowapi.errors import RateLimitExceeded

from app.config import settings
from app.utilities.ratelimiter import add_ratelimiter
from app.utilities.logger import process_time_log_middleware


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
app.add_middleware(process_time_log_middleware)
app.add_middleware(SlowAPIMiddleware)


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