export type ITasksModel = {
  themes: IThemeModel[],
}

export type IThemeModel = {
  name: string,
  title: string,
  linkTitle: string,
  description: string,
  formulas: IFormulaModel[]
}

export type IFormulaModel = {
  baseForm: ImageData,
  baseAnswer: ImageData,
  resultForms: IFormulaForm[],
}

export type IFormulaForm = {
  difficulty: number,
  form: ImageData,
}