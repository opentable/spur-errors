export type SpurErrorCode = 400 | 401 | 403 | 404 | 405 | 408 | 409 | 500 | 502 | 503 | 504;

export interface BaseError<TErrorCode extends SpurErrorCode | undefined = undefined> {
  create(message: string, internalError?: Error): this;
  extend(statusCode: number, defaultMessage: string, errorCode: string): this;
  set internalError(internalError: Error);
  setErrorCode(errorCode: string): this;
  setMessage(message: string): this;
  setStatusCode(statusCode: number): this;
  setData(data: unknown): this;

  errorCode: TErrorCode;
}

interface SpurErrors {
  BaseError: BaseError;

  ValidationError: BaseError<400>;
  UnauthorizedError: BaseError<401>;
  ForbiddenError: BaseError<403>;
  NotFoundError: BaseError<404>;
  MethodNotAllowedError: BaseError<405>;
  RequestTimeoutError: BaseError<408>;
  AlreadyExistsError: BaseError<409>;
  InternalServerError: BaseError<500>;
  BadGatewayError: BaseError<502>;
  ServiceUnavailableError: BaseError<503>;
  GatewayTimeoutError: BaseError<504>;

  errorByStatusCode: <TErrorCode extends SpurErrorCode>(statusCode: TErrorCode) => CodedError<TErrorCode>;
}

type CodedErrors = {
  [P in keyof SpurErrors as SpurErrors[P] extends BaseError<infer TErrorCode> ? `${TErrorCode}` : never]: SpurErrors[P];
};

type CodedError<TErrorCode extends SpurErrorCode> = CodedErrors[`${TErrorCode}`];

declare const SpurErrors: SpurErrors;

export default SpurErrors;
