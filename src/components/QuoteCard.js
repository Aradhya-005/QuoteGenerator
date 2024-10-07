import React from 'react';
import '../styles/QuoteCard.css'
const QuoteCard = ({ quote, onSave, onNext }) => {
  return (
    <>
     <section className='whole-section'>
     <div className="card"> 
      <p className="quote-text">“ {quote} ”</p> 
      </div>
      <div className="button-section"> 
        <button onClick={onNext} className="button">Next Quote</button> 
        <button onClick={onSave} className="button">Save to List</button> 
      </div>
     </section>
    </>
  );
};

export default QuoteCard;
