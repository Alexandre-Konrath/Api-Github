import React, { useState } from 'react';

import Profile from '../../components/Profile';
import Filter from '../../components/Filter';
import Repositories from '../../components/Repositories/inde';

import { getLangsFrom } from '../../functions/getLangs';

import { Container, Sidebar, Main } from './styles';

const user = {

  login: "Alexandre-Konrath",
  name: "Alexandre de Lima Konrath",
  avatar_url: "https://avatars.githubusercontent.com/u/160286787?v=4",
  followers: 0,
  following: 0,
  company: null,
  blog: 'https://api.github.com/users/Alexandre-Konrath',
  location: 'Floriaópolis - SC'
}

const repositories = [
  {
    id: '1',
    name: 'Repo 1',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'JavaScript'
  },
  {
    id: '2',
    name: 'Repo 2',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'HTML'
  },
  {
    id: '3',
    name: 'Repo 3',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'CSS'
  },
  {
    id: '4',
    name: 'Repo 4',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'TypeScript'
  },
  {
    id: '5',
    name: 'Repo 5',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: null
  },
  {
    id: '6',
    name: 'Repo 6',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'Ruby'
  }
]

const languages = getLangsFrom(repositories)

function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState([])

  // faz um filtro e recebe o language e seta ele
  const onFilterClick = (language) => {
    setCurrentLanguage(language)
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick}/>
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} onClick={onFilterClick}/>
      </Main>
    </Container>
  )
}
// https://api.github.com/users/Alexandre-Konrath

export default RepositoriesPage;
