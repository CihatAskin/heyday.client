export enum ActionTypes {
  thisWeek,
  nextWeek,
  startWeek,
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

export interface ScheduleCreateModel {
  title: string;
  description: string;
  period: string;
  startDate: Date;
  managerId: string;
  userIds: string[];
  hourKeys: number[];
}

export interface ScheduleForm {
  title: string;
  description: string;
  hours: number;
  minutes: number;
}

export interface ITableContext {
  pushHoursKey(hourKey: number): void;
  popHoursKey (hourKey: number): void;
}

export interface ScheduleListData {
  id: string;
  title: string;
  status: string;
}
