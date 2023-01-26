export enum EConfirmationStatus {
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  FAILED = 'FAILED',
}

export type TConfirmationMessage = Partial<Record<EConfirmationStatus, string>>;
