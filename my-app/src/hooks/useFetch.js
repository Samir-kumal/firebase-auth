import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log("from customHook", response.data);
      })
      .catch((err) => {
        setError(err);
        console.log("from hook error", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}
