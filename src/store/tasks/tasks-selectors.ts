import { createSelector } from 'reselect';
import { get } from 'lodash';
import { IStoreModel } from '../store-models';
import { TASKS_STORE_KEY } from './tasks-constants';
import { ITasksModel, IThemeModel } from './tasks-models';

export const getTasksStoreState = (state: IStoreModel) => state[TASKS_STORE_KEY];

export const getTasksThemes = createSelector(
  getTasksStoreState,
  (taskState: ITasksModel):IThemeModel[] => get(taskState, 'themes')
);