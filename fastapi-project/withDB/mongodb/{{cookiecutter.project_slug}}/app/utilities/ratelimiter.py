from slowapi.util import get_remote_address
from slowapi import Limiter
from app.config import settings


def create_limiter(number:int = settings.rate_limit_number, unity:str = settings.rate_limit_unity):
  return Limiter(key_func=get_remote_address, default_limits=[f"{number}/{unity}"])

limiter = create_limiter()

def add_ratelimiter(
  option: bool = True, 
  my_limiter: Limiter = limiter,
  number:int = settings.rate_limit_number, 
  unity:str = settings.rate_limit_unity
  ) -> Limiter:
    if option is False:
        if my_limiter:
            my_limiter.enabled = False
        else:
            my_limiter = create_limiter(number, unity)
            my_limiter.enabled = False
    return my_limiter
