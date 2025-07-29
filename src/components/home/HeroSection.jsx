import Image from "next/image";
import React from "react";
import PolaroidCard from "../common/card/PolaroidCard/PolaroidCard";

const HeroSection = () => {
  return (
    <div id="home_hero">
      <Image
        width={1000}
        height={1000}
        src="/assets/images/home/home_banner.webp"
        alt="home_banner"
      />
      <div id="hero_container">
        <div className="title_text">
          <h2>Check our</h2>
          <h2>new collection</h2>
        </div>
        <div className="description_text">
          <div className="text_container">
            <p>Fashion that feels like you. Dopamine dressing for everday.</p>
            <h3>
              Dreamy prints, bold collabs each piece is a feeling, stitched into
              fabric.
            </h3>
          </div>
          <div className="polaroid_container">
            <PolaroidCard content={<p>From office to <span>OOO</span></p>}/>
            <PolaroidCard content={<p>Bold pieces you won’t find <span>twice.</span> Crafted for dreamers, worn by you.</p>}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
