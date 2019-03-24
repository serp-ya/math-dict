import { ITasksModel } from './tasks-models';
import { tasks } from './themes';

const initialTasksState: ITasksModel = tasks;

export const tasksReducer = (state: ITasksModel = initialTasksState) => {
  return state;
}
