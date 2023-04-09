import React from "react";

import "./SignatureItems.css";
import { images } from "../../constants";

const SignatureItems = () => (
  <div className="app__signatureitems">
    <div className="app__signatureitems-content">
      <div className="app__signatureitems-content-header">
        <h2>
          DON’T NEED A SILVER FORK <br /> TO EAT A GOOD BURGER
        </h2>
      </div>
      <div className="app__signatureitems-content-img">
        <img src={images.fishburger} alt="fish-burger" />
      </div>
      <div className="app__signatureitems-content-info">
        <h2>
          FISH <br /> BURGER
        </h2>
        <p>
          LIFE IS LIKE A BURGER THE MORE YOU ADD TO <br /> IT, THE BETTER IT
          BECOMES
        </p>
      </div>
    </div>
    <div className="app__signatureitems-content">
      <div className="app__signatureitems-content-header-burger">
        <h2 className="burger-header">OUR BURGERS</h2>
      </div>
      <div className="app__signatureitems-content-img">
        <img src={images.beefburger} alt="beef-burger" />
      </div>
      <div className="app__signatureitems-content-info">
        <h2>
          BEEF <br /> BURGER
        </h2>
        <p>
          BURGER FOR THE BODY IS NOT ENOUGH THERE <br /> MUST BE A BURGER FOR
          THE SOUL
        </p>
      </div>
    </div>
    <div className="app__signatureitems-content">
      <div className="app__signatureitems-content-header">
        <h2>
          BECAUSE WE NEVER PLAY <br /> WITH SOMEONE’S HEALTH
        </h2>
      </div>
      <div className="app__signatureitems-content-img">
        <img src={images.veggieburger} alt="veggie-burger" />
      </div>

      <div className="app__signatureitems-content-info">
        <h2>
          VEGGIE <br /> BURGER
        </h2>
        <p>
          ROSES ARE RED, VIOLETS ARE BLUE. THE <br /> BURGER COSTS LESS THAN
          DINNER FOR TWO
        </p>
      </div>
    </div>
  </div>
);

export default SignatureItems;
