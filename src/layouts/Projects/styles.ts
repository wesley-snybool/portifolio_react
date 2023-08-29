import styled from "styled-components";
import { colors, fonts } from "../../theme";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.dark_50};
  font-family: ${fonts.font_normal};
  margin-top: 56px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  gap: 25px;
`;