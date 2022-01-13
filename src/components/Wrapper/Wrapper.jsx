import React from 'react';

const Wrapper = ({ title, children }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

export default Wrapper;
