import styled from 'styled-components';

export const Loading = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  min-height: 100vh;

  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  width: 30rem;
  height: 100vh;

  background: ${(props) => props.theme.colors.background};
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Main = styled.section`
  width: 100%;
  height: 91.6vh;

  flex: 1;
  padding: 40px;

  overflow-y: hidden;
  background: ${(props) => props.theme.colors.container};

  // tablet
  @media screen and (max-width: 768px) {
    height: 100%;
  }

  // celular
  @media screen and (max-width: 575px) {
    width: 92.7%;
    padding: 40px 20px;
  }
`;
