from abc import ABC, abstractmethod
from app.models.schemas import DetectionResult

class BaseDetector(ABC):
    @abstractmethod
    async def detect(self, file_content: bytes, filename: str) -> DetectionResult:
        pass