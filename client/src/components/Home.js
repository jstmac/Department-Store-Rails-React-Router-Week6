import React from "react";
import { Header, Button, Segment, Card, Icon } from "semantic-ui-react";
import styled from "styled-components";
import HeaderText from "./HeaderText";

const Home = () => (
  <HomeContainer>
    <HeaderText fSize='large'>Departments R Us!!</HeaderText>
    <Segment as={Transparent}>
      <Header as={HeaderText}>
        No Need to Look Elsewhere-It's All Here 4 U
      </Header>
    </Segment>
    <Segment as={Transparent}>
      <Header as={HeaderText}>Check us out!</Header>
    </Segment>
  </HomeContainer>
);

const HomeContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`;

const Transparent = styled.div`
  background: transparent !important;
`;

// const Home = () => <h1>Departments R Us!!</h1>;

export default Home;
