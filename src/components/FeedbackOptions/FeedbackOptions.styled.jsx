import styled from 'styled-components';

export const FeedbackOptionsBtns = styled.button`
  padding: 10px;

  border: none;
  border-radius: 5px;
  color: #e9e3e3;
  cursor: pointer;

  transition: transform 200ms ease-out;

  :not(:last-child) {
    margin-right: 20px;
  }
  :nth-of-type(1) {
    background-color: #2c6b22;
  }
  :nth-of-type(2) {
    background-color: #048085;
  }
  :nth-of-type(3) {
    background-color: #db6c68;
  }
`;
