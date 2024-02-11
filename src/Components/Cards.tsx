import React from "react";

import Single_card from "./Single_card";
const Cards = () => {
  const cards ={
    cards1: {
      urlink:"./Projectpics/1.png",
      heading: "Team Behind the App",
      caption: "Meet the passionate minds behind CollabEd. Our diverse team of developers, designers, and writers came together with a shared goal, to revolutionize text editing and make it an extraordinary experience for you."
    },
    cards2: {
      urlink: "./Projectpics/2.png",
      heading: "Innovation in Writing",
      caption: "Innovation is at the core of CollabEd. We're not just a text editor; we're a hub for groundbreaking features that make writing, editing, and collaborating a joyous adventure."
    },
    cards3: {
      urlink: "./Projectpics/3.png",
      heading: "User-Centric Design",
      caption: "Built with you in mind, our app combines a sleek user interface with powerful functionality. Every feature is crafted to enhance your productivity and bring joy to the creative process."
    },
    cards4: {
      urlink: "./Projectpics/4.png",
      heading: "Join the Revolution",
      caption: "Join us on this exciting journey as we redefine the way people interact with words. Your stories, documents, and ideas deserve to be brought to life in real-time, and we're here to make that happen."
    }
  };
  return (
    React.createElement("div", null, 
      React.createElement("div", {className: "card-wrapper"}, 
        React.createElement(Single_card, {cards: cards.cards1}), 
        React.createElement(Single_card, {cards: cards.cards2}), 
        React.createElement(Single_card, {cards: cards.cards3}), 
        React.createElement(Single_card, {cards: cards.cards4})
      )
    )
  );
};
export default Cards;


