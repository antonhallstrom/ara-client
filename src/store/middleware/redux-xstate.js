import * as R from 'ramda'
const UPDATE_STATE = 'grail/redux-xstate/UPDATE_STATE'

function getActions(states) {
  return Object.keys(states)
    .map(key => {
      const state = states[key]
      const actions = Object.keys(state.on || {})
      return state.states ? getActions(state.states).concat(actions) : actions
    })
    .reduce((acc, value) => acc.concat(value), [])
    .filter((key, idx, arr) => arr.indexOf(key) === idx)
}

// [{
//   reducerKey: 'traffic-light'
//   transitionType: 'grail/traffic-light/TRANSITION',
//   machine: {},
//   actions: {}
// }]

export function xstateMiddleware(machines) {
  return ({ getState, dispatch }) => next => action => {
    const state = getState()
    const target = R.find(x => R.contains(action.type, x.actions))(machines)
    const currentMachineState = state[target.reducerKey]
    const nextState = target.machine.transition(currentMachineState, action)

    dispatch({
      type: target.transitionType,
      payload: nextState,
    })

    nextState.actions
      .map(key => actionMap[key])
      .filter(Boolean)
      .forEach(action =>
        Array.isArray(action)
          ? action.filter(Boolean).map(dispatch)
          : next(action)
      )
  }
}

export function createMiddleware(machine, actionMap) {
  const validActions = getActions(machine.config.states)

  return ({ getState, dispatch }) => next => action => {
    if (validActions.includes(action.type)) {
      const state = getState()
      const reducer = state[machine.id]
      const nextState = machine.transition(reducer.value, action)

      dispatch({
        type: UPDATE_STATE,
        payload: {
          nextState,
          id: reducer.id,
        },
      })

      nextState.actions
        .map(key => actionMap[key])
        .filter(Boolean)
        .forEach(action =>
          Array.isArray(action)
            ? action.filter(Boolean).map(dispatch)
            : next(action)
        )
    }

    return next(action)
  }
}

export function createReducer(initialState) {
  return (state = initialState, { type, payload }) =>
    type === UPDATE_STATE && state.id === payload.id
      ? R.merge(state, payload.nextState)
      : state
}
