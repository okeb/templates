from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    root_path: str = ""
    logging_level: str
    {% if cookiecutter.prod_mode %}
    redis_host: str
    redis_port: int
    {% endif %}
    testing: bool
    rate_limit_number: int
    rate_limit_unity: str
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")
    
settings = Settings()