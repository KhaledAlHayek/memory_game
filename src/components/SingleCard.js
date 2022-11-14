import React from "react";

// styles
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

  const handleclick = () => {
    if(!disabled){
      handleChoice(card);
    }
    
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped-card" : ""}>
        <img src={card.src} className="front" alt="image front" />
        <img 
          src="/img/cover.png" 
          className="back"
          onClick={handleclick} 
          alt="image back"
        />
      </div>
    </div>
  )
}

export default SingleCard;