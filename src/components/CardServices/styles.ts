import styled from "styled-components";
import { borders, colors } from "../../theme";

export const Main = styled.div`
  color: ${colors.dark_50};
  width: 311px;
  height: 140px;
  background-color: ${colors.dark_20};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: ${borders.green};
  gap: 10px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
    scale: calc(1.02);
    transition: all ease-in-out 0.5s;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: ${colors.dark_40};
  }
`;
