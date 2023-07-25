import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted></video>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 760px) {
    .player {
      .back {
        position: absolute;
        transform: rotate(90deg);
        right: 0;
        z-index: 5;
        svg {
          font-size: 2rem;
        }
      }

      video {
        position: absolute;
        transform: rotate(90deg);
        transform-origin: bottom left;
        width: 100vh;
        height: 100vw;
        margin-top: -100vw;
        object-fit: cover;
        z-index: 4;
        visibility: visible;
      }
    }
  }
`;
