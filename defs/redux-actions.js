// @flow

declare module 'redux-actions' {
  declare function createAction<Type: string, Payload>(
    type: Type
  ): (payload: Payload) => {type: Type, payload: Payload}

  declare function handleActions(
    reducerMap: {[key: string]: (state: any, action: {type: string, payload: mixed}) => mixed},
    defaultState?: mixed
  ): Function

  declare module.exports: {
    createAction: typeof createAction,
    handleActions: typeof handleActions
  }
}
