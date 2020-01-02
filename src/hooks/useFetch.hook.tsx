type fnVoid = () => void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (url: string, params: object): [Promise<any>, fnVoid] => {
  const controller = new AbortController();
  const { signal } = controller;

  const fetchParams = {
    ...params,
    signal,
  };

  const promise = fetch(url, fetchParams).then(data => data.json());

  return [promise, controller.abort.bind(controller)];
};
