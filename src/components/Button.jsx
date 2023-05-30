import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #57419d;
  border-radius: 32px;
  border: none;
  color: white;
  width: 327px;
  height: 44px;
  font-size: 16px;
`;

const Button = (props) => {
  return <StyledButton>{props.title}</StyledButton>;
};

export default Button;
