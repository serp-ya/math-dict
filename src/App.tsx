import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import { store } from './store';
import { HomePage, TestsPage } from './pages';
import { ThemesMenu } from './modules/themes-menu';

export class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <Container fluid>
            <Grid>
              <Grid.Row>
                <GridColumn width={3}>
                  <ThemesMenu />
                </GridColumn>
                <Grid.Column width={13}>
                  <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/theme/:themeName" component={TestsPage} />
                  </Switch>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Router>
      </Provider>
    );
  }
}