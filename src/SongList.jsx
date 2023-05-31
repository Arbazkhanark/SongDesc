
const SongList = ({songs,addSong}) => {
    console.log(songs);
  return (
    <div className="songList">
        <h1>Songs List</h1>
            {songs.map((song)=>{
                return(
                    <>
                        <div className="songNames">
                            <p>{song.name}</p>
                            <button onClick={()=>addSong(song)}>Description</button>
                        </div>
                    </>
                )
            })}

            {/* {
                selectedSong!==undefined && 
                <div>
                     <h1>Songs Details</h1>
                     <h3>{selectedSong.name}</h3>
                     <p>{selectedSong.lyrics}</p>
                     <p>{selectedSong.album}</p>
                     <p>{selectedSong.duration}</p>
                 </div>
            } */}
    </div>
  )
}

export default SongList;
