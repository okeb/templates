import logging
import sys
from app.config import settings

logging.basicConfig(
    stream=sys.stdout,
    level=settings.logging_level,
    format="[%(asctime)s] %(levelname)s [%(name)s.%(funcName)s:%(lineno)d] %(message)s",  # noqa: E501
    datefmt="%d/%b/%Y %H:%M:%S",
)
logger = logging.getLogger("TODO")

# F = TypeVar("F", bound=Callable[..., Any])

# async def process_time_log_middleware(
#     request: Request, 
#     call_next: F # type: ignore
# ) -> Response:
#     """
#     Add API process time in response headers and log calls
#     """
#     start_time = time.time()

#     response: Response = await call_next(request)
#     process_time = str(round(time.time() - start_time, 3))
#     response.headers["X-Process-Time"] = process_time

#     logger.info(
#         "Method=%s Path=%s StatusCode=%s ProcessTime=%s",
#         request.method,
#         request.url.path,
#         response.status_code,
#         process_time,
#     )

#     return response