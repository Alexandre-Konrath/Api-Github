import styled from "styled-components";

export const Container = styled.div`
  width: 93%;
  max-height: 30%;
  display: flex;
  flex-direction: column;

  margin: auto;

  overflow-y: auto;

  gap: 0.2rem;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;

    gap: 0.8rem;
    padding: 0 1rem;
    margin-bottom: 20px;
  }
`;
// filtro de cores
export const Selector = styled.button`
  width: 100%;
  min-height: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0px 20px 20px 0px;
  padding: 0 1rem;

  transition: background 0.3s, transform 0.3s;

  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.color || props.theme.colors.text};// ou ele assume a cor que ja esta configurada ou a colors.text

  &:hover,
  &.selected {
    transform: translateX(5px) scale(1.02);
    font-weight: bold;
    background: ${(props) => props.color || props.theme.colors.light};
    color: ${(props) =>
      props.color ? props.theme.colors.white : props.theme.colors.black};

  }

  @media screen and (max-width: 768px) {
    border-radius: 20px;

    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Cleanner = styled.button`
  background: transparent;
  border: none;
  text-align: center;

  padding: 0 1rem;
  margin-bottom: 20px;

  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    padding: 1rem;

  }
`;
