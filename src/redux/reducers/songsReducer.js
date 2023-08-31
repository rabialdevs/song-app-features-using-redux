import { SELECTED_SONGS } from "../actions/actionTypes"

const initialState = {
  
}



export const songsReducer = (state=initialState,action) => {
  switch (action.type) { 

    case SELECTED_SONGS: return action.payload
    default:
      return state

  }
}

export default songsReducer