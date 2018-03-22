import React from "react";
// import API from "../../utils/API";
import "./FriendCard.css";
// import friends from "../../friends.json";

const FriendCard =(props)=>{
  
  const friends = props.friends;

    return (  
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} onClick={props.handleBtnClick(friends)} />
        </div>
      </div>
    );
}
export default FriendCard;
