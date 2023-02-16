import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Fields() {
  return (
    <div>
      <Navbar />
      <Container>
        <Sidebar />
        <form>
          <input type="text" placeholder="univer-ismi" />
          <input type="text" placeholder="universitet" />
          <input type="text" placeholder="turi" />
          <input type="text" placeholder="minimum kontrakt" />
          <input type="text" placeholder="davomiyligi" />
          <input type="text" placeholder="qisqa malumot" />
          <button>yuklash</button>
        </form>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
`;
