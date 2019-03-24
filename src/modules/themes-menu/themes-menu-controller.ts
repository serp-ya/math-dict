import { connect } from 'react-redux';
import { IStoreModel } from '@/store';
import { ThemesMenu } from './themes-menu';
import { getThemesList } from './themes-menu-selectors';

const mapStateToProps = (state: IStoreModel) => ({
  themesList: getThemesList(state),
})
export const ThemesMenuController = connect(mapStateToProps)(ThemesMenu);