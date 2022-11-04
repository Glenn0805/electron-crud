export const setModuleState = (payload) => async (dispatch) => {
    dispatch({
      type: 'SET_TIME_TRACKER_STATE',
      payload,
    })
  }