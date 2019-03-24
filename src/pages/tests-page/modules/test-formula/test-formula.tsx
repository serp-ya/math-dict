import * as React from 'react';
import { List } from 'semantic-ui-react';
import equalSignsDelimeter from './assets/equal.png';
import equalQuestionSignsDelimeter from './assets/equal-question.png';

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
          <img src={showAnswer ? equalSignsDelimeter : equalQuestionSignsDelimeter} />
          {showAnswer ? <img src={this.props.rigthPart} /> : null}
        </List.Item>
      </div>
    );
  }
}