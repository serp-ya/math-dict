import { createSelector } from 'reselect';
import { map } from 'lodash';
import { getTasksThemes, IThemeModel } from '@/store';

export const getThemesList = createSelector(
  getTasksThemes,
  (themesList: IThemeModel[]) => map(themesList, (theme: IThemeModel) => ({
    name: theme.name,
    linkTitle: theme.linkTitle,
  }))
);