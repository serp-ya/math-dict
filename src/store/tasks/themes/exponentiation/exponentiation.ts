import { EXPONENTIATION_ROUTE_NAME } from './exponentiation-constants';
import { IThemeModel } from '../../tasks-models';

export const exponentiationTheme: IThemeModel = {
  name: EXPONENTIATION_ROUTE_NAME,
  title: 'Формулы для работы с различными степенями',
  linkTitle: 'Степени',
  description: '',
  formulas: [
    {
      baseForm: require('./assets/(a+b)^2/(a+b)^2.png'),
      baseAnswer: require('./assets/(a+b)^2/12.png'),
      resultForms: [
        {
          difficulty: 0,
          form: require('./assets/(a+b)^2/11.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a+b)^2/12.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a+b)^2/21.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a+b)^2/22.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a+b)^2/31.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a+b)^2/32.png'),
        },
      ]
    },
    {
      baseForm: require('./assets/(a-b)^2/(a-b)^2.png'),
      baseAnswer: require('./assets/(a-b)^2/12.png'),
      resultForms: [
        {
          difficulty: 0,
          form: require('./assets/(a-b)^2/11.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a-b)^2/12.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a-b)^2/21.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a-b)^2/22.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a-b)^2/31.png'),
        },
        {
          difficulty: 0,
          form: require('./assets/(a-b)^2/32.png'),
        },
      ]
    }
  ],
};