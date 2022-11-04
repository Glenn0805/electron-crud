const initailState = {
    test: 'HEYYte'
}

const reducer = {
    SET_TIME_TRACKER_STATE: (state, action) => ({ ...state, ...action.payload })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initailState, action) => {
    if (!(action.type in reducer)) {
        return state
    }

    const newState = reducer[action.type](state, action)
    return newState
}