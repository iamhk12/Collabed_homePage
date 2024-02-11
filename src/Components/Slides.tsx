import React from 'react';

interface SlideProps {
  urlink: string;
  heading: string;
  caption: string;
}

const Slides: React.FC<{ slides: SlideProps }> = ({ slides }) => {
  console.log(slides.urlink);
  return (
    <div>
      <div
        className="item"
        style={{ backgroundImage: `url(${slides.urlink})` }}
      >
        <div className="content">
          <div className="name">{slides.heading}</div>
          <div className="des">{slides.caption}</div>
          {/* <button>See more</button> */}
        </div>
      </div>
    </div>
  );
};

export default Slides;


