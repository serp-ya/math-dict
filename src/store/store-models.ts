import { TASKS_STORE_KEY, ITasksModel } from './tasks';

export type IStoreModel = {
  [TASKS_STORE_KEY]: ITasksModel;
};