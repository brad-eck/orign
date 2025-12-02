import { useState } from 'react'
import DropZone from './components/DropZone'
import ResultCard from './components/ResultCard'

function App() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  return (
    <>
      {!result && <DropZone onResult={setResult} loading={loading} setLoading={setLoading} />}
      {result && <ResultCard result={result} onReset={() => setResult(null)} />}
    </>
  )
}

export default App
