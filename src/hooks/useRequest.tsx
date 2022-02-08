import axios from 'axios';
import { useEffect, useState } from 'react';

interface RequestProps {
  endpoint: string;
}

/**
 * Utility hook to make requests to an `endpoint` and keep track of loading state and updating request url.
 *
 * @param {string} endpoint Url to be requested
 */
const useRequest = <T,>({
  endpoint,
}: RequestProps): [
  T | null | undefined,
  boolean,
  (endpoint: string) => void
] => {
  const [url, setUrl] = useState(endpoint);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null | undefined>();

  useEffect(() => {
    setLoading(true);

    axios
      .get<T>(url)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, loading, setUrl];
};

export default useRequest;
