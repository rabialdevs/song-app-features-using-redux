import React from 'react'
import { useSelector } from 'react-redux';


const SongInfo = () => {
  const selectedSong = useSelector((state) => state.selectedSong )
  console.log(selectedSong);

  return (
    <div>
      <h1>Song Info</h1>
      <p>Title:-  {selectedSong.name}</p>
      <p>Album:-  {selectedSong.album}</p>
      <p>Artist:-{selectedSong.artist}</p>
    </div>
  );
}

export default SongInfo