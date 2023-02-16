import React from "react";
import styled from "styled-components";
import CountriesPost from "../components/CountriesPost";
import CountryGet from "../components/CountryGet";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Countries() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Container>
        <CountriesPost />
        <CountryGet />
      </Container>
    </div>
  );
}

const Container = styled.div`
  background-color: #0000001b;
  margin-top: 140px;
  margin-left: 400px;
  padding-top: 50px;
  padding-left: 20px;
  min-height: 100vh;
  /* display: flex; */
`;
