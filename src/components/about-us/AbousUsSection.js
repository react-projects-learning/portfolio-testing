import React from "react";
import {
  SectionContainer,
  Description,
  ImageContainer,
  Hide,
  Button,
} from "../../globalStyles";
import home from "../../img/home1.png";

const AbousUsSection = () => {
  return (
    <SectionContainer>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any particular photography or videography ideas that We
          have professionals with amazing skills to help you achieve it you
          have.
        </p>
        <Button>Contact Us</Button>
      </Description>
      <ImageContainer>
        <img src={home} alt="person with camera" />
      </ImageContainer>
    </SectionContainer>
  );
};

export default AbousUsSection;
