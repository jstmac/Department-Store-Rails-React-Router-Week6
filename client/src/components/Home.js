import React from "react";
import axios from "axios";
import HeaderText from "./HeaderText";
import styled from "styled-components";
import { Header, Segment, Image } from "semantic-ui-react";
import Pic from "./departmentstore.jpg";

const Home = () => (
  <>
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
    <Image src={Pic} alt='Department Store' centered />
  </>
);

const HomeContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, blue);
`;

const Transparent = styled.div`
  background: transparent !important;
`;

export default Home;
