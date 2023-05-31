// import React from 'react'

const SongDetails = ({selectedSong}) => {
  return (

        <div className="details">
            {selectedSong && 
                <div>
                    <h1>Songs Details</h1>
                    <h3>Song: {selectedSong.name}</h3>
                    <img src={selectedSong.imgUrl} alt="songImg" />
                    <p>Singer: {selectedSong.lyrics}</p>
                    <p>Album: {selectedSong.album}</p>
                    <p>Duration: {selectedSong.duration}</p>
                </div>
            }
        </div>
  )
}

export default SongDetails