import React, { useState } from "react";
import { store } from "../store";
import { Link } from "react-router-dom";

function MusicElem(props) {



  let bg = {}


  if (props.img !== ``) {
    bg = { background: 'url(' + props.img + ') no-repeat center',
            backgroundSize: 'cover'
            }
  } 
 
  else {
     bg = { background: 'url(https://www.tellerreport.com/images/no-image.png) no-repeat center',
            backgroundSize: 'cover'
    };
  }

  let addFav = ()  => {
    let id = props.id;


    let uniq = 0;

    store.fav.forEach(el => {
      if (el.id === id) {
        uniq = 1;
      }
    })


    if (uniq === 0) {
      store.music.forEach(el => {
        if (el.id === id) {
          store.fav.push(el);
        }
      })
    }
    else {
      alert("include")
    }

    props.setFav(store.fav);

    localStorage.setItem('favor', JSON.stringify(store.fav));

  
  }

  
  function toArtist(artist) {
    store.music.forEach(el => {
      if (el.artist === artist) {
        store.art.push(el)
      }
    })

    props.setArt(store.art)


    store.art = [];
  }






  return (
    <div className="music" onClick={() => props.func(props.id)} style = {bg} >
      <div className="info">
        <p className = "song">{props.song}</p>
        <Link to = {'/artist/' + props.artist}><p className = "artist" onClick = {() => toArtist(props.artist)}>    {props.artist}     </p></Link>
        <div className="favorite" onClick={() => {addFav()}}>My favorite</div>
      </div>
    </div>
  );
}

export default MusicElem;
