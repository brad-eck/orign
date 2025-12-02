from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.models.schemas import DetectionResult

app = FastAPI(title="Origin API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Origin detector backend alive"}

@app.post("/detect", response_model=DetectionResult)
async def detect(file: UploadFile = File(...)):
    contents = await file.read()
    
    # MVP placeholder – replace with real detector chain
    import random
    prob = random.uniform(0.05, 0.95)
    label = "Likely AI" if prob > 0.6 else "Likely Human" if prob < 0.4 else "Uncertain"
    
    return DetectionResult(
        ai_probability=round(prob, 3),
        label=label,
        explanation="MVP random detector – real models coming in next commit!",
        model_used="random_baseline_v0"
    )