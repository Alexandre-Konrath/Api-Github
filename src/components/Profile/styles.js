import styled from "styled-components";

export const Container = styled.div`
  width: 93%;
  height: 60%;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    height: auto;
  }
`;

export const Avatar = styled.img`
  width: 70%;

  align-self: center;

  border-radius: 50%;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;

    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: 1.4rem;
  margin: -0.33rem 0;
`;

export const Name = styled.h2`
  font-weight: normal;

  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Inner = styled.div`

  color: ${(props) => props.theme.colors.text};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.text};
  }

  svg {
    margin-right: 10px;
  }
`;
