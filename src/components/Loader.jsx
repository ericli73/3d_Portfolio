import { useProgress } from '@react-three/drei'
import { useState, useEffect } from 'react'

export default function Loader() {
  const { progress, active } = useProgress()
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (!active && progress === 100) {
      const waitForScene = setTimeout(() => {
        setFadeOut(true)

        const fadeDuration = setTimeout(() => setVisible(false), 600)
        return () => clearTimeout(fadeDuration)
      }, 1000)

      return () => clearTimeout(waitForScene)
    }
  }, [active, progress])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-500 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="spinner" />

      <p className="mt-6 text-xl font-semibold text-white">
        {progress.toFixed(0)}%
      </p>
    </div>
  )
}
