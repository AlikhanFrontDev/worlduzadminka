import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/img.jpg";
import axios from "axios";
export default function CountriesPost() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // const token = JSON.parse(localStorage.getItem("userRole"));
    const postData = {
      name,
      lastname,
    };
    axios
      .post(Endpoint + "auth/register/admin", postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container>
        <form>
          <input type="text" placeholder="davlat nomi" />
          <div class="image-upload">
            <label for="file-input">
              <img className="icon" src={img} />
              <p>davlat bayrog'i</p>
            </label>
            <input id="file-input" className="file" type="file" />
          </div>
          <button>Yuklash</button>
        </form>
      </Container>
    </div>
  );
}

const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 220px;
    border-radius: 10px;
    background-color: #fff;
    margin: 50px;
    padding: 10px;
    margin-left: 20px;
  }
  .file {
    display: none;
  }
  .icon {
    margin-left: 40px;
    width: 70px;
    height: 70px;
  }
  input {
    width: 200px;
    margin: 10px auto;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background-color: #0000001b;
  }
  label {
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 15px;
  }
  button {
    width: 200px;
    margin: 10px auto;
    background-color: #0000001b;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    height: 40px;
  }
  button:hover {
    background-color: #00000062;
  }
`;
