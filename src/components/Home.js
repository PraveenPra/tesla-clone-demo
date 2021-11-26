import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing inventory"
        bgImg="model-x.jpg"
      />

      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing inventory"
        bgImg="model-y.jpg"
      />

      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing inventory"
        bgImg="model-3.jpg"
      />

      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing inventory"
        bgImg="model-x.jpg"
      />

      <Section
        title="Solar Panel"
        desc="lowest Cost Solar Panels in India"
        leftButton="order now"
        rightButton="learn more"
        bgImg="solar-panel.jpg"
      />

      <Section
        title="Solar Roof"
        desc="Produce Clean Energy From Your Roof"
        leftButton="custom order"
        rightButton="existing inventory"
        bgImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        desc=""
        leftButton="shop now"
        bgImg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
