import * as React from 'react';
import { List } from 'semantic-ui-react';
import MathJax from 'react-mathjax2';
import equalSign from './assets/equal.png';
import questionSign from './assets/question.png';

const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`

export class TestFormula extends React.PureComponent<any> {
  state = { 
    answerHidden: true,
  }

  toggleAnswerHidden = () => this.setState({ answerHidden: !this.state.answerHidden })

  render() {
    const showAnswer = this.props.showAnswers || !this.state.answerHidden;
    return (
      <div style={{paddingTop: '20px'}}>
        <div style={{paddingBottom: '10px'}}>
          <label>
            Показать ответ
            <input
              type="checkbox"
              checked={showAnswer}
              onChange={this.toggleAnswerHidden}
            />
          </label>
        </div>
        <List.Item>
          <img src={this.props.leftPart} />
          <img src={equalSign} />
          <img src={showAnswer ? this.props.rigthPart : questionSign} />
        </List.Item>
        <MathJax.Context input='ascii'>
          <MathJax.Node inline>{`(a+b)^2=${showAnswer ? 'a^2 +2ab +b^2' : '?'}`}</MathJax.Node>
        </MathJax.Context>
      </div>
    );
  }
}
