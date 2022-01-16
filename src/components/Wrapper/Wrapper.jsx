import React from 'react';
import { WrapperCss, Title } from './Wrapper.styled';

const Wrapper = ({ title, children }) => {
  return (
    <WrapperCss>
      {title && <Title>{title}</Title>}
      {children}
    </WrapperCss>
  );
};

export default Wrapper;
