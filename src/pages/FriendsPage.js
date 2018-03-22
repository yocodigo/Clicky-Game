import React, { Component } from "react";
import Hero from "../components/Hero";
import FriendCard from "../components/FriendCard";
import friends from "../friends.json";

class FriendsPage extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  onPictureClick = character =>{
    console.log("This is the character array unshuffled: ");
    console.log(character);
    character.sort();
    console.log("This is character shuffled: ");
    console.log(character);
    // this.setState({ friends });
  }

    render() {
      return (
        <div>
          <Hero backgroundImage="https://hdwallpaperim.com/wp-content/uploads/2017/08/31/163682-Johnny_Bravo-red_background-minimalism-748x468.jpg">
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          </Hero>
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image} 
              handleBtnClick={this.onPictureClick}             
              friends={this.state.friends}
            />
          ))}
        </div>
      );
    }
  }
export default FriendsPage;
