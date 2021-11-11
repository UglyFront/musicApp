import React, { useState } from "react";
import MusicElem from "./MusicElem";
import { store } from "../store";

function Search(props) {
  if (props.srch.length === 0) { 
    return (
    <>
        <h1>Not found</h1>
    </>
  );
}

  else { 
    return (
    <>
        <h1>Search result</h1>
        <div className="wrapper__music">
            {props.srch.map(el => <MusicElem setArt = {props.setArt} art = {props.art} key = {el.id} fav = {props.fav} setFav = {props.setFav} func = {props.foo} song = {el.song} artist = {el.artist} id = {el.id} src = {el.src} img={el.img}/>)}
        </div>
    </>
  );
  }
}

export default Search;