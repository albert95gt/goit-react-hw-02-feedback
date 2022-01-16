import styled from 'styled-components';

export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
`;

export const StatisticItems = styled.li`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  color: #fff;

  :not(:last-child) {
    margin-right: 10px;
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

export const Total = styled.p`
  margin-right: auto;
  margin-left: auto;
  font-size: 16px;
  width: 100px;
  background-color: #ffb03a;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
`;

export const PositivePercentage = styled.p`
  margin-right: auto;
  margin-left: auto;
  font-size: 16px;
  width: 130px;
  /* background-color: #0d8d09; */
  background-color: ${({ positivePercentage }) => {
    if (positivePercentage > 60) {
      return '#2c6b22';
    } else if (positivePercentage >= 50) {
      return '#048085';
    }
    return '#db6c68';
  }};
  color: #fff;

  border-radius: 5px;
  padding: 5px;
`;
