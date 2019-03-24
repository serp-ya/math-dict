import * as React from 'react';
import { Header } from 'semantic-ui-react';
import { IThemeModel } from '@/store';
import { TestFormulaList } from './modules';

type TestsPagePropsType = {
  themeData: IThemeModel,
}

export class TestsPage extends React.PureComponent<any> {
  render () {
    return (
      <div style={{paddingTop: '30px'}}>
        <Header as="h3">{this.props.themeData.title}</Header>
        <TestFormulaList formulas={this.props.themeData.formulas} />
      </div>
    );
  }
}