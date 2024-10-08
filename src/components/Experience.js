import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from '../subComponents/PowerButton';
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 8rem 0px;
    height: auto;
  }
`;

const Box1 = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 8rem 0px;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media (max-width: 30em) > :nth-child(5) {
    margin-bottom: 4rem;
  }
  @media (max-width: 50em) > :nth-child(5) {
    margin-bottom: 5rem;
  }
  @media (max-width: 60rem) {
    width: 50vw;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
`;
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
@media (max-width:50em){
    grid-template-columns:100%;
}
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 1300px) {
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem;
  }
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(4rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
  li {
    ::marker {
      unicode-bidi: isolate;
      font-variant-numeric: tabular-nums;
      text-transform: none;
      text-indent: 0px !important;
      text-align: start !important;
      text-align-last: start !important;
    }
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Contact
        target="_blank"
        href="https://www.linkedin.com/in/ankit-kumar-986348224/"
      >
        <motion.h2
          initial={{
            y: -150,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedinIn />
        </motion.h2>
      </Contact>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        {/* <PowerButton /> */}
        <ParticleComponent theme="light" />
        <Grid>
          <Main>
            {/* <Title>Company BlokMiner</Title> */}
            <Title>Blokminer (Graphic Designer) Oct 2022 - Jan 2023</Title>
            <Description>
              • Served as an Graphic Designer where I made Different types of poster and banners to enhance the company profile
              resulting in a 20 percent boost in brand recognition and a 15 percent rise in user interaction.
              <br />• Collaborated with fellow Team members to improve various posters and banners design.
            </Description>
          </Main>
        </Grid>
        <BigTitle text="Experience" top="4%" right="-1%" />
      </Box>

      <Box1>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        {/* <PowerButton /> */}
        <ParticleComponent theme="light" />
        <Grid>
          <Main>
            {/* <Title>Company BlokMiner</Title> */}
            <Title>Data Associate July 2024 - Present</Title>
            <Description>
              • Implemented advanced data validation techniques in Excel and SQL,maintaining data integrity and consistency, resulting
              in a 30 % reduction in reporting errors and saving 15 hours weekly.
              <br />• Compiling data and generating reports as needed.
            </Description>
          </Main>
        </Grid>
        <BigTitle text="Experience" top="4%" right="-1%" />
      </Box1>


    </ThemeProvider>
  );
};

export default MySkillsPage;
