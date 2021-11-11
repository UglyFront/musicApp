import React from "react";
import { store } from "../store";
import { Link } from "react-router-dom";


function MusicElemDel(props) {


  let bg = {}


  if (props.img !== ``) {
    bg = { background: 'url(' + props.img + ') no-repeat center',
            backgroundSize: 'cover'
            }
  } 
 
  else {
     bg = { background: 'url( https://www.tellerreport.com/images/no-image.png) no-repeat center',
            backgroundSize: 'cover'
    };
  }


  let delFav = () => {
     let id = props.id;
    //  alert(id);

     let delArray = store.fav.filter(el => el.id !== id);

     props.setFav(store.fav = delArray);

     console.log(props.fav)

    //  localStorage.clear();

    //  localStorage.setItem("favor",  JSON.stringify(store.fav))

    //  JSON.parse(localStorage.setItem("favor",  JSON.stringify(store.fav)));
  }


  function toArtist(artist) {
    store.music.forEach(el => {
      if (el.artist === artist) {
        store.art.push(el)
      }
    })

    props.setArt(store.art)
  }


  return (
    <div className="music" onClick={() => props.func(props.id)} style = {bg} >
      <div className="info">
        <p className = "song">{props.song}</p>
        <Link to = {'/artist/' + props.artist}><p className = "artist" onClick = {() => toArtist(props.artist)}>    {props.artist}     </p></Link>
        <div className="favorite" id = "del" onClick={() => {delFav()}}>Delete</div>
      </div>
    </div>
  );
}

export default MusicElemDel;