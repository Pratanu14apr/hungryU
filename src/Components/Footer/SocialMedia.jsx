import React from "react";

const SocialMedia = () => {
  return (
    <div id="socialDetails">
      <p class="para"> Use App In Mobile</p>
      <div className="playStore">
        <span>
          <i class="fa-brands fa-apple"></i>
        </span>
        <div class="note">
          <p>Download on the</p>
          <h1>App Store</h1>
        </div>
      </div>
      <div class="playStore">
        <span>
          <i class="fa-brands fa-google-play"></i>
        </span>
        <div class="note">
          <p>GET IT ON</p>
          <h1>Google Play</h1>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
