import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './home-page-styles.css';

export class HomePage extends React.PureComponent {
  render() {
    return (
      <Container className="main content">
        <Header>Математические тесты</Header>
        <p>
          Приложение показывает в разном порядке популярные тождества. Отображается лишь одна часть а вторую приложение предлагает написать Вам.
          <br />
          Я уверен, это должно помочь в изучении и выявлении формул в живых примерах.
        </p>
      </Container>
    );
  }
}
