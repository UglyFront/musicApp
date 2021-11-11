import React, { createRef } from "react";
import { Link } from "react-router-dom";
import { store } from "../store";


function Header(props) {



  let inpV = createRef();

  let getInp = () => {
    let inpGet = inpV.current.value.toLowerCase();

    store.music.forEach(el => {
      if(el.song.toLowerCase() === inpGet || el.artist.toLowerCase() === inpGet) {
        store.srch.push(el);
      }
    });

   props.seter(store.srch)

   store.srch = []
  }



  return (

    <header>
        <ul>
            <Link to = "/fav"><li>Favorite</li></Link>
            <Link to = "/new"><li>New Music</li></Link>
            <div id="wrap__input">
                <input ref={inpV} type="text" placeholder="Search" />
                <Link to = "/search"><div id = "btn" onClick={getInp}>Go</div></Link>
            </div>
          
        </ul>
    </header>
  );
}

export default Header;