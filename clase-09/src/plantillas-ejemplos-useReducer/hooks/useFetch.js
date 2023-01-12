import { useState, useEffect } from "react";

//URL = https://62633b22c430dc560d2cf4d6.mockapi.io/productos

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(url);

        if (!res.ok) {
          const err = new Error("Error en la petición del Fetch");
          err.status = res.status;
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }

        const json = await res.json();
        setData(json);
        setError(null);
      } catch (error) {
        setData(null);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
};
