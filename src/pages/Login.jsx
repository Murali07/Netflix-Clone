import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUSer) => {
    if (currentUSer) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
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

              <button onClick={handleLogIn}>Log In</button>
              <span>
                New to Netflix?
                <Link to="/signup" className="signUpLink">
                  Sign up now
                </Link>
                .
              </span>
              <small>
                This page is protected by Google reCAPTCHA to enusre you're not
                a bot. <b>Learn more</b>.
              </small>
            </div>
          </div>
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
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        .title {
          font-size: 32px;
        }
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          width: 18rem;
          input {
            padding: 0.5rem 1rem;
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
          span {
            color: #737373;
            font-weight: 400;
            .signUpLink {
              margin-left: 0.25rem;
              color: #fff;
              text-decoration: none;
              &:hover {
                text-decoration-line: underline;
              }
            }
          }
          small {
            color: #737373;
            font-weight: 400;
          }
        }
      }
    }
  }

  @media (max-width: 760px) {
    .content {
      .form-container {
        .form {
          .title {
            font-size: 28px;
          }
          width: auto;
          .container {
            width: 15rem;
            gap: 1.5rem;
            input {
              padding: 0.5rem 1rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 761px) and (max-width: 950px) {
    .content {
      .form-container {
        .form {
          width: 50%;
          .container {
            width: 20rem;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 951px) and (max-width: 1300px) {
    .content {
      .form-container {
        .form {
          width: auto;
          .container {
            width: 20rem;
          }
        }
      }
    }
  }
`;
