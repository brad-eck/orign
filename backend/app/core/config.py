from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    environment: str = "development"
    openai_api_key: str | None = None
    hive_api_key: str | None = None

settings = Settings()