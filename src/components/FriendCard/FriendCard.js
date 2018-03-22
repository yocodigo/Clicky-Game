import React, { Component } from "react";
import API from "../../utils/API";
import "./FriendCard.css";
import friends from "../../friends.json";

const FriendCard =(props)=>{
  
   // When the component mounts, load the next dog to be displayed
  //  componentDidMount() {
  //   this.loadNextDog();
  // }
  const friends = props.friends;

    return (  
      <div className="card">
        <div className="img-container">
          <img src={props.image} onClick={props.handleBtnClick} />
        </div>
      </div>
    );
}
export default FriendCard;
