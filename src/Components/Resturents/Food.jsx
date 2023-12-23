import React from "react";
import photo1 from "../../assets/images/imageA.jpeg";
import photo2 from "../../assets/images/imageB.jpeg";
import photo3 from "../../assets/images/imageC.jpeg";
import photo4 from "../../assets/images/imageD.jpeg";
const Food = () => {
  return (
    <div id="food">
      <div class="foodInfo">
        <img src={photo1} alt="pic1" />
        <h4>SRI VELAN SOUTH INDIAN FOOD</h4>
        <p>South Indian</p>
        <div class="rate">
          <div>
            <i class="fa-solid fa-star"></i>3.4
          </div>
          <ul>
            <li>33 mins</li>
            <li>250 for two</li>
          </ul>
        </div>
      </div>
      <div class="foodInfo">
        <img src={photo2} alt="pic2" />
        <h4>Dominoss Pizza</h4>
        <p>Pizzas, Beverages</p>
        <div class="rate">
          <div>
            <i class="fa-solid fa-star"></i>
            4.2
          </div>
          <ul>
            <li>38 mins</li>
            <li>200 for two</li>
          </ul>
        </div>
      </div>
      <div class="foodInfo">
        <img src={photo3} alt="pic3" />
        <h4>Bangaliana</h4>
        <p>North Indian, Chinese</p>
        <div class="rate">
          <div>
            <i class="fa-solid fa-star"></i>
            4.7
          </div>
          <ul>
            <li>45 mins</li>
            <li>350 for three</li>
          </ul>
        </div>
      </div>
      <div class="foodInfo">
        <img src={photo4} alt="pic4" />
        <h4>Dada Boudi Biriyani</h4>
        <p>Biryani</p>
        <div class="rate">
          <div>
            <i class="fa-solid fa-star"></i>
            4.9
          </div>
          <ul>
            <li>52mins</li>
            <li>600for two</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Food;
