

const Single_card = (cards:any) => {
  return (
    <div>
      <div className="cardcontainer">
        <div className="card">
          <div className="front">
            <img src={cards.cards.urlink} alt="" />
            <h1>Click on me!</h1>
          </div>
          <div className="back">
            <h1>{cards.cards.heading}</h1>
            <p>{cards.cards.caption}</p>
            {/* <a href="Learn-more">Learn more</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_card;


