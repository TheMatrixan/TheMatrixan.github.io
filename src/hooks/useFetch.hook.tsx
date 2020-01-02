import { useState, useEffect } from 'react';

type fnVoid = () => void;
interface UseFetch {
  response: object;
  error: object;
  isLoading: boolean;
  abort: fnVoid;
}

export default (url: string, params: object): UseFetch => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const controller = new AbortController();
  const { signal } = controller;

  const fetchParams = {
    ...params,
    signal,
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, fetchParams);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error, isLoading, abort: controller.abort.bind(controller) };
};
