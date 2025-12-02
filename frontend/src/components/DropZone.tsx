import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

export default function DropZone({ onResult, loading, setLoading }: any) {
  const onDrop = useCallback(async (files: File[]) => {
    const file = files[0]
    if (!file) return
    setLoading(true)
    const form = new FormData()
    form.append('file', file)
    const res = await axios.post('http://localhost:8000/detect', form)
    onResult(res.data)
    setLoading(false)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="container">
      <div className="header">
        <h1>Origin</h1>
        <p>Drop anything. Know if it was made by AI.</p>
      </div>
      <div {...getRootProps()} className={`card dropzone ${isDragActive ? 'drag-active' : ''}`}>
        <input {...getInputProps()} />
        {loading ? (
          <p className="text-3xl font-bold">Analyzing…</p>
        ) : (
          <>
            <p>Drop anything</p>
            <small>Images • Text • Audio • Video • Code</small>
          </>
        )}
      </div>
    </div>
  )
}
