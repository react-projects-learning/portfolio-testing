import React from "react";
import clock from "../../img/clock.svg";
import diaphragm from "../../img/diaphragm.svg";
import money from "../../img/money.svg";
import teamwork from "../../img/teamwork.svg";
import home from "../../img/home2.png";
import {
  Description,
  ImageContainer,
  SectionContainer,
} from "../../globalStyles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <ServicesSectionContainer>
      <Styleddescription>
        <h2>
          High <span>Quality</span> Service
        </h2>

        {/* cards */}
        <Cards>
          <Card>
            <Icon>
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </Icon>
            <p>lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <Icon>
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </Icon>
            <p>lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <Icon>
              <img src={diaphragm} alt="icon" />
              <h3>Pro Grade Gear</h3>
            </Icon>
            <p>lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <Icon>
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </Icon>
            <p>lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Styleddescription>
      <ImageContainer>
        <img src={home} alt="camera" />
      </ImageContainer>
    </ServicesSectionContainer>
  );
};

const ServicesSectionContainer = styled(SectionContainer)`
  flex-direction: row-reverse;

  h2 {
    padding-bottom: 5rem;
  }
`;

const Styleddescription = styled(Description)`
  padding-right: 0;
  padding-left: 5rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    background: #fff;
    color: #000;
  }
`;

export default ServicesSection;
