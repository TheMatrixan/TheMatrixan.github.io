export type Action<T = object> = {
  type: string;
  payload: T;
  error?: boolean;
  meta?: object;
};
