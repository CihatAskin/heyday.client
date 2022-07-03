import React from 'react';
import { ITableContext } from '../actions/types';

export const TableContext = React.createContext<ITableContext>({
  pushHoursKey: (arr: number): void => {},
  popHoursKey : (arr: number): void => {},
});
