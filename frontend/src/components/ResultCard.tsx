export default function ResultCard({ result, onReset }: any) {
  const pct = Math.round(result.ai_probability * 100)
  const isAI = pct > 60
  const isHuman = pct < 40

  return (
    <div className="container">
      <div className="header">
        <h1>Origin</h1>
      </div>
      <div className="card result">
        <h2 className={isAI ? 'ai' : isHuman ? 'human' : 'uncertain'}>
          {pct}% {isAI ? 'AI' : 'Human'}
        </h2>
        <p>{result.label}</p>
        <p style={{fontSize:'1.2rem', opacity:0.8}}>{result.explanation}</p>
        <p style={{fontSize:'0.9rem', opacity:0.6, marginTop:'2rem'}}>Model: {result.model_used}</p>
        <button onClick={onReset}>Check another file</button>
      </div>
    </div>
  )
}
