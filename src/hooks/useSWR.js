import { useEffect, useState } from "react";

function useSWR({ url = "" }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = (URL) => {
    setLoading(true);
    fetch(URL, {
      method: "GET",
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Error fetch");
        }
        return res.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        return err;
      });
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useSWR;
