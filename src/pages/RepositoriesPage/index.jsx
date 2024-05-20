import React from 'react';

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
    name: 'Repo 1',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'JavaScript'
  },
  {
    name: 'Repo 2',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'HTML'
  },
  {
    name: 'Repo 3',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'CSS'
  },
  {
    name: 'Repo 4',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'TypeScript'
  },
  {
    name: 'Repo 5',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: null
  },
  {
    name: 'Repo 6',
    description: 'Descrição',
    html_url: 'https://youtube.com',
    language: 'Ruby'
  }
]

const languages = getLangsFrom(repositories)

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages}/>
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  )
}
// https://api.github.com/users/Alexandre-Konrath

export default RepositoriesPage;
