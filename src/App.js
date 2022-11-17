import { useState } from 'react';
import {data} from './data';
import './App.css';
import photo from './photo.jpeg';

function App() {

const [room,setRooms]=useState(0);
const{id,image}=data[room];
 
const previousRooms=()=>{
  setRooms((room =>{
    room--;
    if(room<0){
      return data.length-1;
    }
    return room;
  }))
}
const nextRooms =()=>{
  setRooms((room=>{
    room++;
    if(room>data.length-1){
      room=0;
    }
    return room;
  }))
}

  return (
    <div>
      <div className='heading'>
          <h1>Traum Villa in der Schweiz </h1>
          </div>

          <div className='heading'>
        <img src={photo}width="1000px"alt="foto" />
    </div> 

        <div className='heading'>
             <p>13,5 Zimmer/990 m2 Wohnfläche/2022 Baujahr/Preis:auf an Anfrage</p>
        </div>

        <div className='heading'>
            <h3>Die historische Villa und der Annex-Neubau sind je mit eigenen Wohn-Essbereichen , Küchen und Privaträumen mit Ankleiden und Bädern en suite konzipiert. Insgesamt werden etwa 13 Zimmer und ca. 990 m² Wohnfläche zu diesem exklusiven Domizil gehören. Die reichlichen Nebenräume bieten zudem Platz z.B. für eine Einliegerwohnung, ein Heimkino, Fitness- oder Partyraum.Grosse Terrassen beeindrucken mit sagenhafter Sicht über den See bis tief in die Schweizer Bergwelt – eine bezaubernde Panoramalage im steuergünstigen Kanton Schwyz, ruhig und doch in guter Reichweite der Städte Zug, Luzern und Zürich. Historischer Charme und modernster Luxus vereinigen sich hier zu einem einzigartigen Anwesen für Menschen mit höchsten Ansprüchen.</h3>
        </div>
    

  <div className='heading'>
       <h1>{id} </h1>
  </div>


  <div className='heading'>
  <button onClick={previousRooms}>
      <img src="https://img.icons8.com/pastel-glyph/512/back.png"width="60px"alt="icon"/>
  </button>

      <img src={image}width="800px" alt="haus"/>
    <button onClick = {nextRooms}>
        <img src="https://img.icons8.com/ios-filled/512/forward.png"width="40px" alt="icon"/>
    </button>
  </div>
    </div>
  );
}

export default App;
