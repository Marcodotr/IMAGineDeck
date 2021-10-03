import React from "react";
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
        </div>
      </div>
    </main>
  );
};
export default Home