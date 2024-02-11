import { useEffect } from "react";
import Sildes from "./Slides";

const Imagesilde = () => {

  useEffect(()=>{
    for(let i=0;i<4;i++){
      getPrev()
    }
  },[])

  //image silder starts
  const getNext = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slides").appendChild(lists[0]);
  };

  const getPrev = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slides").prepend(lists[lists.length - 1]);
  };
  //image silder ends

  const sildes = {
    sildes1: {
      urlink: "./sliderpics/1.png",
      heading: "Introduction",
      caption:
        "Welcome to CollabEd, where innovation meets collaboration, and words come to life in real-time.",
    },
    sildes2: {
      urlink: "./sliderpics/2.png",
      heading: "Vision",
      caption:
        "Our vision is to redefine the way people create and collaborate on written content. We believe in empowering every writer, editor, and creator with seamless real-time collaboration.",
    },
    sildes3: {
      urlink: "./sliderpics/3.png",
      heading: "Mission",
      caption:
        "At CollabEd, we are on a mission to break down the barriers of traditional text editing. We aim to provide a platform where creativity flows effortlessly, and collaboration happens in the blink of an eye.",
    },
    sildes4: {
      urlink: "./sliderpics/4.png",
      heading: "Real-Time Magic",
      caption:
        "Experience the magic of real-time collaboration like never before. Our app transforms the solitary act of writing into a dynamic, shared experience where ideas synchronize and creativity knows no bounds.",
    },
    sildes5: {
      urlink: "./sliderpics/5.png",
      heading: "Passion for Words",
      caption:
        "Words are our passion, and we've built this app for those who share the love for the art of expression. Whether you're a solo wordsmith or part of a dynamic team, our app is designed to elevate your writing experience.",
    },
    sildes6: {
      urlink: "./sliderpics/6.png",
      heading: "Welcome",
      caption:
        "Thank you for being part of the CollabEd community. Together, let's create, collaborate, and transform the way the world experiences the power of words.",
    },
  };

  return (
    <div>
      <div className="container">
        <div id="slides">
          <Sildes slides={sildes.sildes1} />
          <Sildes slides={sildes.sildes2} />
          <Sildes slides={sildes.sildes3} />
          <Sildes slides={sildes.sildes4} />
          <Sildes slides={sildes.sildes5} />
          <Sildes slides={sildes.sildes6} />
        </div>
        <div className="buttons">
          <button id="prev" onClick={getPrev}>
            <i className="fa-solid fa-angle-left" />
          </button>
          <button id="next" onClick={getNext}>
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Imagesilde;
