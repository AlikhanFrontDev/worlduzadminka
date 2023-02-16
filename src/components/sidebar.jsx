import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <Container>
      <nav>
        <NavLink className={"link"} to={"/"}>
          Davlatlar
        </NavLink>
        <NavLink className={"link"} to={"/universities"}>
          Universitetlar
        </NavLink>
        <NavLink className={"link"} to={"/fields"}>
          Yo'nalishlar
        </NavLink>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  /* border-right: 1px solid red; */
  position: fixed;
  top: 120px;
  nav {
    height: 85vh;
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 60px;
  }
  .link {
    text-decoration: none;
    margin: 20px;
    color: #000;
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
    background-color: #00000023;
    border-radius: 10px;
    padding: 20px;
    color: #fff;
    font-family: sans-serif;
    font-size: 16px;
  }
  .active {
    color: blue;
    /* border-bottom: 1px solid red; */
    padding-bottom: 10px;
    background-color: #0000006c;
    border-radius: 10p x;
    padding: 20px;
    color: #fff;
  }
`;
