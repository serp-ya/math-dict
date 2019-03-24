import { createSelector } from 'reselect';
import { find } from 'lodash';
import { getTasksThemes, IThemeModel } from '@/store';

export const getThemeDataByName = (themeName: string) => createSelector(
  getTasksThemes,
  (themes: IThemeModel[]) => find(themes, { name: themeName })
);