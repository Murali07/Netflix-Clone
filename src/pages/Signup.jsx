import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { VscError } from "react-icons/vsc";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
      if (formValues.password === "") {
        setMessage("Password is required.");
      } else if (formValues.password.length < 6) {
        setMessage("Your password should be at least 6 characters.");
      } else {
        setMessage("");
      }
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
            {message ? (
              <p>
                <VscError />
                {message}
              </p>
            ) : (
              ""
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1.25rem;
        text-align: center;
        font-size: 2rem;
        h4 {
          font-size: 1.5rem;
          font-weight: 500;
        }
        h6 {
          font-size: 1.25rem;
          font-weight: 500;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.5rem;
        }
        P {
          color: red;
          margin-top: 0.25rem;
          svg {
            margin-right: 0.25rem;
            position: relative;
            top: 0.1875rem;
          }
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }

  @media (max-width: 760px) {
    .content {
      .body {
        .text {
          text-align: center;
          font-size: 1.05rem;
          padding: 0 1.25rem 0 0;
          h1 {
            margin: 0;
          }
          h4 {
            font-size: 1.125rem;
            font-weight: 500;
          }
          h6 {
            padding: 0 3.5rem;
            margin: 0.5rem 0 0;
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.6875rem;
          }
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 80%;

          input {
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            padding: 1rem;
            border: 1px solid grey;
            border-radius: 2px;
            z-index: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1rem;
            color: white;
            line-height: 1.5rem;
            left: 1rem;
            right: 1rem;
            top: 0.75rem;
          }
          button {
            width: 55%;
            align-items: center;
            justify-content: center;
            margin: auto;
            font-size: 1.25rem;
            min-height: 3.5rem;
          }
        }
      }
    }
  }
`;
