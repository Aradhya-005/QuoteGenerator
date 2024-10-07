import React, { useEffect, useState } from 'react';
import QuoteCard from './QuoteCard';
import '../styles/QuoteList.css';

const QuoteList = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Function to fetch a new quote
  const fetchQuote = () => {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then(data => setQuote(data[0]))
      .catch(error => console.error('Error fetching quote:', error));
  };

  // Fetch the initial quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  // Function to handle saving quotes
  const handleSave = (quote) => {
    setSavedQuotes(prevQuotes => [...prevQuotes, quote]);
    alert(`Saved: "${quote}"`);
  };

  return (
    <div className="quote-list-container"> {/* Use flexbox container for layout */}
      <div className="left-section">
        {/* Render the current quote and buttons */}
        {quote && (
          <QuoteCard
            quote={quote}
            onSave={() => handleSave(quote)}
            onNext={fetchQuote} // Pass the fetchQuote function as onNext
          />
        )}
      </div>
      
      <div className="right-section">
        <h2 className="saved-quotes-title">Saved Quotes</h2>
        {/* Conditional rendering: Display message if no saved quotes */}
        {savedQuotes.length === 0 ? (
          <p className="no-quotes-message">No saved quotes yet.</p>
        ) : (
          <ul className="saved-quotes-list">
            {savedQuotes.map((savedQuote, index) => (
              <li key={index} className="saved-quote">{savedQuote}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QuoteList;
