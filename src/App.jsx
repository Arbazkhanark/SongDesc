import React, { useState } from 'react'
import SongList from './SongList'
import SongDetails from "./SongDetails"
import "./App.css"
const musics=[ 
  {
      id:1,
      name:"Maan Meri Jaan",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vz-39_r9SFubkr8IcPfhYIhQ4gYkRdtjDw&usqp=CAU",
      lyrics:"King",
      album:"Champagne Talk",
      duration:"03:14"
  },
  {
      id:2,
      name:"Apna Bana Le",
      imgUrl:"",
      lyrics:"Sachin-Jigar ,Arijit Singh",
      album:"Bhediya",
      duration:"04:21"
  },
  {
      id:3,
      name:"Kesariya",
      imgUrl:"",
      lyrics:"Pritam ,Arijit Singh",
      album:"Brahmastra",
      duration:"04:28"
  },
  {
      id:4,
      name:"Pasoori",
      lyrics:"Ali sethi",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8OJW_bw0CKHFoBBWX30-gacZjJeQBro4TA&usqp=CAU",
      album:"Pasoori",
      duration:"03:44"
  },
  {
      id:5,
      name:"Aankhon Se Batana",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyKREiJlHyfANo1CjDotH2ROm97QpUPFqzQC2VpmGqF3K0VILhwuBfdAiNsgSiwfSYeM&usqp=CAU",
      lyrics:"Dikshant",
      album:"Aakhon Se Batana",
      duration:"03:41"
  },
  {
      id:6,
      name:"Tu Aake Dekhle",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYlwvD3HHJmXXjRfeYqX186DBly0aUBhk1g&usqp=CAU",
      lyrics:"King",
      album:"The Carnival",
      duration:"04:30"
  },
  {
      id:7,
      name:"Tera Hua",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPmKGJToygkVYVF8-1Fyd_m27ckdvC4q_Ew&usqp=CAU",
      lyrics:"Arijit Singh",
      album:"Cash",
      duration:"04:13"
  },
  {
      id:8,
      name:"Kacchi Doriyaan",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vHoHrkbTTO5uXutmnpOxM3hPqOy8oNyNaQ&usqp=CAU",
      lyrics:"Arijit Singh",
      album:"Maja Ma",
      duration:"04:02"
  },
  {
      id:9,
      name:"Rasiya",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yUYdRlBR84XMvXCxb54v7XOvwNHJIzPGpg&usqp=CAU",
      lyrics:"Pritam, Sherya Ghoshal",
      album:"Brahmastra",
      duration:"04:27"
  },
  {
      id:10,
      name:"Let's Talk(Do Gallan)",
      lyrics:"Garry Sandhu",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Tv0z5mN8BCW0kfZDev_cyreVTaHcMmEWEouv_CE_XsSIVlfJuCjNNFYyXLQdHxUT66c&usqp=CAUs",
      album:"Do Gallan",
      duration:"04:10"
  }
];


const App = () => {
  const [selectedSong,setSelectedSong]=useState();
  return (
    <div>
      <SongList songs={musics} addSong={setSelectedSong} />
      <SongDetails selectedSong={selectedSong} />

    </div>
  )
}

export default App