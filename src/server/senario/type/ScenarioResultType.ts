export type ScenarioResultType<T> = SuccessResult<T> | ErrorResult;
export type ScenarioResultWithCodeType<T, K> = SuccessResult<T> | ErrorResultWithCode<K>;

interface SuccessResult<T> {
  readonly success: true;
  readonly data: T;
}

interface ErrorResultWithCode<K> {
  readonly success: false;
  readonly error: string;
  readonly errorCode?: K;
}

interface ErrorResult<> {
  readonly success: false;
  readonly error: string;
}
