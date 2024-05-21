import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';
import Repository from './Repository/inde';

function Repositories({ repositories, currentLanguage }) {
  // para cada posição do repositório cria-se um novo elemento
  const repos = repositories
  // ou ele é undefined/botao de limpar ou ele é igual a meu currentLanguage atual
  .filter((repository) => currentLanguage === undefined || repository.language === currentLanguage)
  .map((repository) => (
    <Repository key={repository.id} repository={repository} />
  ))

  return (
    <Container>
      {repos}
    </Container>
  )
}

Repositories.defaultProps = {
  currentLanguage: undefined,
}

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
}

export default Repositories
