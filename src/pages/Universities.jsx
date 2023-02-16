import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Universities() {
  return (
    <div>
      <Navbar />
      <Container>
        <Sidebar />
        Universities
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
`;
