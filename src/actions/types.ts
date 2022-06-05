export enum ActionTypes {
  thisWeek,
  nextWeek,
  startWeek
}

export interface MainType {
  id: string;
  name: string;
  order: number;
}

export interface Option {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}
