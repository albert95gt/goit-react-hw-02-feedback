import React from 'react';
import PropTypes from 'prop-types';

import { SectionCss, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionCss>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionCss>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;
