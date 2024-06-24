import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from '../subComponents/PowerButton';
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
  @media (max-width: 1300px){
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
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media (max-width: 30em)> :nth-child(5) {
    margin-bottom: 4rem;
  }
  @media (max-width: 50em)> :nth-child(5) {
    margin-bottom: 5rem;
  }
  @media (max-width: 60rem){
    width: 50vw;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 4rem;
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
  @media (max-width: 1300px){
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem 
    margin:0;
  }
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
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Contact
        target="_blank"
        href="https://www.linkedin.com/in/kunal-shaw-/"
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
        <Main>

          <Title>
            <Design width={40} height={40} /> Android and Web Developer
          </Title>

          <Description>
            I love to create Mobile Application and Web Application which gives functionaity, Keep it clean, minimal and simple.
          </Description>

          <Description>
            <strong>
              Skills
            </strong>

            <p>
              C++, HTML, Javascript, Kotlin, CSS, Firebase, Nodejs, MongoDB, Git.
            </p>

            <strong>
              Tools
            </strong>

            <p>
              VsCode, Github, Andriod Studio etc.
            </p>
          </Description>


        </Main>

        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Data Analyst
          </Title>

          <Description>
            I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>

          <Description>
            <strong>
              Skills
            </strong>

            <p>
              SQL, Python, Pandas, Matplotlib, Numpy, Data visualization
            </p>

            <strong>
              Tools
            </strong>

            <p>
              PowerBi, Excel, Google Colab, Jupyter, Mysql
            </p>


          </Description>
        </Main>
        <BigTitle text="SKILLS" top="5%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
