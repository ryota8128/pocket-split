export type  ScenarioResultType<T> = SuccessResult<T> | ErrorResult;

interface SuccessResult<T> {
  readonly success: true;
  readonly data: T;
}

interface ErrorResult {
  readonly success: false;
  readonly error: string;
}
