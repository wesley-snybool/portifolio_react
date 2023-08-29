import * as Styled from "./styles";
import Header from "../../components/Header";
import NameSection from "../Name";
import { SectionButtons } from "../../styles";
import Button from "../../components/Button";
import About from "../About";
import Grid from "../../components/Grid";
import Icon from "../../components/Icon";
import Projects from "../Projects";
import SectionServices from "../Services";
import Skils from "../Skils";

const Main = (): JSX.Element => {
  return (
    <Styled.Main>
      <Header />
      <NameSection />
      <SectionButtons>
        <Button
          color="dark_10"
          border="none"
          backgroundColor="brand_color"
          title="Download CV"
        />
        <Button
          backgroundColor="dark_10"
          border="light"
          color="dark_50"
          title="Download CV"
        />
      </SectionButtons>
      <About />
      <Grid gap={40} col={2} row={2}>
        <Styled.MainIcon>
          <Icon size="xl" name="smile" />
          <h5>My name</h5>
          <span>Wesley Snybool</span>
        </Styled.MainIcon>
        <Styled.MainIcon>
          <Icon size="xl" name="mail" />
          <h5>E-mail</h5>
          <span>wesley.snybool.dev@gmail.com</span>
        </Styled.MainIcon>{" "}
        <Styled.MainIcon>
          <Icon size="xl" name="instagram" />
          <h5>Instagram</h5>
          <span>@wesley-paiva-dev</span>
        </Styled.MainIcon>{" "}
        <Styled.MainIcon>
          <Icon size="xl" name="phone" />
          <h5>My phone</h5>
          <span>11 996931399</span>
        </Styled.MainIcon>
      </Grid>
      <Projects />
      <SectionServices />
      <Skils />
    </Styled.Main>
  );
};

export default Main;