import React from "react";
import MusicElemDel from "./MusicElemDel";


function Favorite(props) {

  if (props.fav.length !== 0) {

  return (
    <>
    <h1>Favorites Music</h1>
    <div className="wrapper__music">
       {props.fav.map(el => <MusicElemDel setArt = {props.setArt} art = {props.art} key = {el.id} setFav = {props.setFav} fav = {props.fav} func = {props.foo} song = {el.song} artist = {el.artist} id = {el.id} src = {el.src} img={el.img}/>)}
    </div>                            
    </>
  );


  }


  else {
    return (
    <>
      <h1>Favorites Music</h1>
      <h2>Sorry, you didn't add music</h2>
    </>
    )
  }
}

export default Favorite;