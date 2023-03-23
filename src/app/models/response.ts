export interface Response<T> {
  sucess: boolean;
  message: string;
  data?: T;
}
