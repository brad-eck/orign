from pydantic import BaseModel

class DetectionResult(BaseModel):
    ai_probability: float  # 0.0 – 1.0
    label: str              # "Likely AI" / "Likely Human" / "Uncertain"
    explanation: str
    model_used: str