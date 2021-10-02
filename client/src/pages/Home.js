import React, { Component } from "react";
import API from "../utils/API";
import HeroSelect from "../components/HeroSelect";


const Home = () => {

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          < HeroSelect/>
          {/* {cards.map((card) => 
            <h3>{card.name}</h3>)} */}
        </div>
    
        {/* <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CardDetail
              cards={cards}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div> */}
      </div>
    </main>
  );
};
export default Home