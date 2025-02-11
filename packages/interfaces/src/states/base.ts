interface IBaseState<T> {
  data: T;
  list: T[];
  loading: boolean;
  error?: string;
}

export default IBaseState;
