import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;

  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.div`
  width: 100%;
  max-width: 583px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 64px;

  border: none;

  line-height: 64px;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  border-radius: 4px;

  background: rgba(0, 0, 0, 0.8);
  color: ${(props) => props.theme.colors.text};

  &::placehoder {
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  width: 80px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  transition: background 0.3s;
  border-radius: 4px;

  border: 3px solid ${(props) => props.theme.colors.text};

  color: ${(props) => props.theme.colors.text};

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
`;
