import React from "react";

function Player(props) {
  return (
    <div>
      
        <audio src={props.source} controls>123</audio>
    </div>
  );
}

export default Player;