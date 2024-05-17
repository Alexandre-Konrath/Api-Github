import React, { useState } from 'react';
import { MdOutlineSearch } from "react-icons/md";
// import { MdYoutubeSearchedFor } from "react-icons/md";

import { Container, Logo, Title, Form, Input, Button } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

function MainPage() {
  //* armazenar a informação que a pessoa digitou
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          // momento que alterar alguma coisa
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdOutlineSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;
