import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.gray600};
    font-family: ${(props) => props.theme.fontFamily.sans};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    color: ${(props) => props.theme.colors.white};
  }

  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
      background: transparent; /* Cor de fundo da barra de rolagem */
  }

  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.carbon}; /* Cor do "thumb" (alça) da barra de rolagem */
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.carbon}; /* Cor do "thumb" (alça) da barra de rolagem ao passar o mouse */
  }

  /* Cor da barra de rolagem ao ser arrastada */
  ::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.colors.carbon};
  }
`;
