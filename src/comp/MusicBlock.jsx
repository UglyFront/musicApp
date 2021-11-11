import React from "react";
import MusicElem from "./MusicElem";
import { store } from "../store";

function MusicBlock(props) {
  return (
    <>
    <h1>New Music</h1>
    <div className="wrapper__music"> 
       {store.music.map(el => <MusicElem setArt = {props.setArt} art = {props.art} key = {el.id} fav = {props.fav} setFav = {props.setFav} func = {props.foo} song = {el.song} artist = {el.artist} id = {el.id} src = {el.src} img={el.img}/>)}
    </div>
    </>
  );
}

export default MusicBlock;
