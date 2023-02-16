import React from "react";
import styled from "styled-components";
import poland from "../assets/poland.webp";
export default function CountryGet() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className="country">Country</th>
            <th>Flag</th>
            <th>delete</th>
            <th className="flag">update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Poland</td>
            <td>
              <img src={poland} alt="" />
            </td>
            <td>delete</td>
            <td>update</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

const Container = styled.div`
  width: 50vw;
  align-self: flex-end;
  table {
    border-collapse: collapse;
    width: 200px;
    font-family: sans-serif;
  }
  thead {
    height: 50px;
    background-color: #0000005d;
    color: #fff;
  }
  th {
    min-width: 200px;
  }
  .flag {
    border-top-right-radius: 10px;
  }
  .country {
    border-top-left-radius: 10px;
  }
  td {
    height: 50px;
    background-color: #00000025;
    text-align: center;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
    object-fit: cover;
  }
`;
