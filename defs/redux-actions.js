// @flow

declare module 'redux-actions' {
  declare function createAction<Type: string, Payload>(
    type: Type
  ): (payload: Payload) => {type: Type, payload: Payload}

  declare function handleActions<State>(
    reducerMap: {[key: string]: (state: State, action: any) => State},
    defaultState: State
  ): (state: State, action: any) => State

  declare module.exports: {
    createAction: typeof createAction,
    handleActions: typeof handleActions
  }
}
