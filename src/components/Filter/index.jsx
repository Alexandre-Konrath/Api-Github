import React from 'react'
import PropTypes from 'prop-types';

import { Container, Selector, Cleanner } from './style';

function Filter({ languages, currentLanguage, onClick }) {

  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
      >

      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ))

  return (
    <>
      <Container>
        {selectors}
      </Container>
      {/* função de limpeza, vai indefinir a propriedade current no filtro */}
      <Cleanner onClick={() => onClick && onClick(undefined)}>Limpar</Cleanner>
    </>
  );
};

Filter.defaultProps = { // ja que eles não estão .isRequired no primeiro escalao, tem q fazer isso
  currentLanguage: null,
  onClick: null,
}

Filter.propTypes = {
  languages: PropTypes.arrayOf( // array de objeto
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter
