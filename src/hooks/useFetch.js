import {useState, useEffect} from 'react'
import axios from 'axios'


export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false)

  const reload = () => setTrigger(prv=>!prv)

  useEffect( ()=>{
    const run = async () => {
      try {
        setLoading(true)
      const res = await axios.get(url)
      setData(res.data)
    } catch (err) {
      setError(err)
  } finally {
      setLoading(false)
  }
}
run()
}, [url, trigger])




  return [data, loading, error, reload]
}