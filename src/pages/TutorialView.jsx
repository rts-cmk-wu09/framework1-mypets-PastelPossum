import axios from "axios";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button `
background-color: #57419D;
border-radius: 32px;
border: none;
color: white;
width: 327px;
height: 44px;
font-size: 16px;
`;

const TutorialView = () => {
   const TutorialViewData = useLoaderData();
    return ( <>
    <StyledButton>skip</StyledButton>
    </> );
}
 
export default TutorialView;