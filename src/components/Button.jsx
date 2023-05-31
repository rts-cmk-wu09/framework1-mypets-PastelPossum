import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #57419d;
  border-radius: 32px;
  border: none;
  color: white;
  width: 327px;
  height: 44px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
  margin-top: 65%;
`;

const Button = (props) => {
  return <StyledButton className="box-shadow">{props.title}</StyledButton>;
};

export default Button;
