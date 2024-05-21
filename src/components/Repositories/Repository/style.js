import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;
  border-left: 3px solid ${(props) => props.color || props.theme.colors.champagneDark};

  color: ${(props) => props.theme.colors.text};
  background: rgba(0, 0, 0, 0.25);
`;

export const Name = styled.h3`
  font-weight: normal;

  font-size: ${(props) => props.theme.fontSize.large};
`;

export const Description = styled.p`
  line-height: 1.25;
  margin: 1rem 0;

  font-size: ${(props) => props.theme.fontSize.small};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.color || props.theme.colors.yellow};
  // ou ele assume a cor que ja esta selecionada oui a indigo
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const Lang = styled.span`
  color: inherit; // cor herdada do footer
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`
