import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_DECK } from '../utils/queries';

const SingleDeck = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { deckid } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_DECK, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { _id: deckid },
  });

  const deck = data?.getDeck || {};

  console.log(deck)

  const theseCards = deck.cards;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
        {theseCards.map((card) => (
            <img src={card.img}></img>
        ))}
    </div>
  );
};

export default SingleDeck;
