import * as React from 'react';
import { Header, List } from 'semantic-ui-react';
import { random } from 'lodash';
import { TestFormula } from '../test-formula';

export class TestFormulaList extends React.PureComponent<any, any, any> {
  state = {
    showAnswers: false,
    list: null,
    needToGenerateList: true,
  }

  componentDidMount() {
    this.generateList();
  }

  toggleAnswerHidden = () => this.setState({ showAnswers: !this.state.showAnswers })

  generateList = () => {
    if (!this.state.needToGenerateList) {
      return this.state.list;
    }
    const newList = this.props.formulas.map((formula: any, name: number) => {
      const countOfResultForms = formula.resultForms.length;
      const getBaseFirst = random(0, 1, true) > 0.9;
      const leftPart = getBaseFirst 
        ? formula.baseForm
        : formula.resultForms[random(0, countOfResultForms - 1)].form;
      const rigthPart = getBaseFirst
        ? formula.baseAnswer
        : formula.baseForm;

      return (
        <TestFormula
          key={name}
          formula={formula}
          leftPart={leftPart}
          rigthPart={rigthPart}
          showAnswers={this.state.showAnswers}
        />
      )
    });

    this.setState({ list: newList, needToGenerateList: false });
    return newList;
  }

  updateList = this.setState({ needToGenerateList: true }, this.generateList);

  render() {
    if (!this.props.formulas || this.props.formulas.length === 0) {
      return <Header>Простите, но формул здесь нет. Выберите другую тему</Header>
    }

    return (
      <div>
        <div style={{display: 'none', justifyContent: 'space-around', width: '300px'}}>
          <div>
            Обновить список
            <br />
            <button onClick={() => this.forceUpdate()}>Обновить</button>
          </div>
          <div>
            Показать ответы
            <br />
            <button onClick={this.toggleAnswerHidden}>Показать</button>
          </div>
        </div>
        <List>
          {this.state.list}
        </List>
      </div>
    );
  }
}