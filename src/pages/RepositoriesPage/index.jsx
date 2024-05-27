import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Profile from '../../components/Profile';
import Filter from '../../components/Filter';
import Repositories from '../../components/Repositories';

import { getUser, getRepos } from '../../services/api'
import { getLangsFrom } from '../../functions/getLangs';

import { Loading, Container, Sidebar, Main } from './styles';

function RepositoriesPage() {
  //* recupera o nome do usuario que foi digitado
  const { login } = useParams()
  //* recupera os dados de usuario
  const [ user, setUser ] = useState()
  //* recupera os dados de repositórios
  const [ repositories, setRepositories ] = useState()
  //* recupera os dados de linguagens
  const [ languages, setLanguages ] = useState()


  const [ currentLanguage, setCurrentLanguage ] = useState()

  //* faz a tela de carregamento
  const [ loading, setLoading ] = useState(true)

  // fazer o carregamento das informações
  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login)
      ]);
      setUser(userResponse.data)
      setRepositories(repositoriesResponse.data)

      setLanguages((getLangsFrom(repositoriesResponse.data)))

      // quando eu terminar de setar meu usuario, eu dou como falso para ele parar de rendelizar o loading
      setLoading(false)
    };

    loadData();
  }, [])

  // faz um filtro e recebe o language e seta ele
  const onFilterClick = (language) => {
    setCurrentLanguage(language)
  }

  // se esta sendo carregado, eu exibo o carregando...
  if (loading) {
    return <Loading><h1>Carregando...</h1></Loading>
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
