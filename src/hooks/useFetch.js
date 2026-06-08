import { useState, useEffect } from 'react'

function useFetch(fetchFn, dependencies = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [prevDeps, setPrevDeps] = useState(dependencies)

  const depsChanged = dependencies.some((dep, idx) => dep !== prevDeps[idx])
  if (depsChanged) {
    setPrevDeps(dependencies)
    setLoading(true)
    setError(null)
    setData(null)
  }

  useEffect(() => {
    let isMounted = true

    fetchFn()
      .then((result) => {
        if (isMounted) {
          setData(result)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return { data, loading, error }
}

export default useFetch
