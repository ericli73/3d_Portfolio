import { useProgress } from '@react-three/drei'
import { useState, useEffect } from 'react'

export default function Loader() {
  const { progress, active } = useProgress()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!active) {
      const timeout = setTimeout(() => setVisible(false), 600)
      return () => clearTimeout(timeout)
    }
  }, [active])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Spinner */}
      <div className="spinner" />

      {/* Percentage */}
      <p className="mt-6 text-xl font-semibold text-white">
        {progress.toFixed(0)}%
      </p>
    </div>
  )
}
