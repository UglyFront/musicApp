import React from "react";
import MusicElem from "./MusicElem";

function Artist(props) {

    let bg = {}

    if (props.art[0].img === '') {
        bg = {
            background: `url(https://www.tellerreport.com/images/no-image.png) no-repeat center`,
            backgroundSize: 'cover',
        }
    }
    else {
        bg = {
            background: `url(${props.art[0].img}) no-repeat center`,
            backgroundSize: 'cover',
        }
    }



  return (
    <div className ="artist__wrapper">
        {/* <p></p> */}
        <div className="logo" style={bg}></div>
        <h2>Артист {props.art[0].artist}</h2>
        <h3 className="muz">Музыка исполнителя</h3>
        <div className="wrapper__music"> 
        {props.art.map(el => <MusicElem setArt = {props.setArt} art = {props.art} key = {el.id} fav = {props.fav} setFav = {props.setFav} func = {props.foo} song = {el.song} artist = {el.artist} id = {el.id} src = {el.src} img={el.img}/>)}
        </div>
    </div>
  );
}

export default Artist;