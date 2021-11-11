import React, { useState, useEffect } from "react";
import MusicBlock from './comp/MusicBlock';
import { store } from "./store";
import Player from "./comp/Player";
import Header from "./comp/Header";
import { BrowserRouter,Route } from "react-router-dom";
import Search from "./comp/Search";
import Favorite from "./comp/Favorite";
import Artist from "./comp/Artist";

function App() {

  // useEffect(() => {
  //   localStorage.getItem('favor', JSON.stringify());
  //   console.log('use eff 1');
  // })

  let [src, setSrc] = useState('');

  function changeMusic (id) {
    console.log(src)

        store.music.forEach(el => el.id === id
            
        ?
            
        setSrc(src = el.src)
        
        : 
        
        console.log("skip")
        
    )
  }









let [srch, setSrch] = useState(store.srch);



let [fav, setFav] = useState(store.fav);






let [art, setArt] = useState(store.music);

console.log(art)

  return (
    <BrowserRouter>
    <div className="App">
      <Header srch = {srch} seter = {setSrch}/>
      <Route path = "/new" render = {() => <MusicBlock art = {art} setArt = {setArt} setFav = {setFav} foo = {changeMusic} fav = {fav}/>}/>
      <Player source = {src}/>
      <Route path = "/search" render = {() => <Search art = {art} setArt = {setArt} setFav = {setFav} foo = {changeMusic} srch = {srch}/>}/>
      <Route path = "/fav" render = {() => <Favorite art = {art} setArt = {setArt} foo = {changeMusic} fav = {fav}  setFav = {setFav}/>}/>
      <Route path = {`/artist/${art[0].artist}`} render = {() => <Artist art = {art} setArt = {setArt} setFav = {setFav} foo = {changeMusic} fav = {fav}/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
