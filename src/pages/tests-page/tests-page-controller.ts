import { connect } from 'react-redux';
import { match } from 'react-router-dom';
import { get } from 'lodash';
import { IStoreModel } from '@/store';
import { TestsPage } from './tests-page';
import { getThemeDataByName } from './tests-page-selectors';

const mapStateToProps = (state: IStoreModel, ownProps: match) => {
  const themeName = get(ownProps, ['match', 'params', 'themeName'], '');
  return {
    themeData: getThemeDataByName(themeName)(state),
  };
};

export const TestsPageController = connect(mapStateToProps)(TestsPage);