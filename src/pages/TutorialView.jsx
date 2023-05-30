import axios from "axios";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const StyledHeader = styled.h1`
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  text-align: center;
`;

const StyledP = styled.p`
  font-size: 16px;
  color: #9E9E9E;
  align-items: center;
  text-align: center;
`;

const TutorialView = () => {
  const TutorialViewData = useLoaderData();
  return (
    <>
      <StyledHeader>My Pets</StyledHeader>
      <StyledP>
        Taking care of a pet is my favorite, it helps me to gaimr stress and
        fatigue.
      </StyledP>
      <Button title="Skip" />
    </>
  );
};

export default TutorialView;
