import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';
import { get } from 'lodash';
import { MENU_THEMES_HEADER } from './themes-menu-constants';

type IThemesMenuPropsType = {
  themesList: {
    name: string,
    title: string,
  },
}

export class ThemesMenu extends React.PureComponent {
  render() {
    return (
      <Menu vertical fluid>
        <Menu.Item header>
          {MENU_THEMES_HEADER}
        </Menu.Item>
        {get(this.props, 'themesList', []).map((theme: { name: string, linkTitle: string }) => (
          <Menu.Item key={theme.name}>
            <Link to={`/theme/${theme.name}`}>
              {theme.linkTitle}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
