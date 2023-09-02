import React from 'react';
import songData from "../data/songData";
import { v4 as uuidv4 } from "uuid";
import { songsAction } from '../redux/actions/songsAction';
import { useDispatch, useSelector } from 'react-redux';


const DisplaySongs = () => {
  




  const dispatch = useDispatch()
  const songs = useSelector((state) => state.songs);


  return (
    <div>
      <h1>List Of Songs Are :-----</h1>
      {
        songData.map((song) =>
          
        (


          <div key={uuidv4()}>

            <h3 onClick={() => dispatch(songsAction(song))}>{song.name}</h3>
            
          </div>

        ))


      }
    </div>
  )
}

export default DisplaySongs;