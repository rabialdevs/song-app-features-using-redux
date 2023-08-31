import { SELECTED_SONGS } from "./actionTypes";


export const songsAction = (songs) => {
  
  return {
    type: SELECTED_SONGS,
    payload:songs
  }
}