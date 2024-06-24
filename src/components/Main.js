import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
// import PowerButton from '../subComponents/PowerButton'
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import { FaLinkedinIn } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import "./app.scss";
import { motion, AnimatePresence } from "framer-motion";
import { lightTheme } from "../components/Themes"
import Intro from "./Intro";

const MainContainer = styled.div`

  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

`;

const Container = styled.div`
  padding: 2rem;
`;
const Navright = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 5;
  @media (min-width: 1300px) {
    display: none;
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
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  position: fixed;
  left: calc(1rem + 2vw);
  top: 50%;
  z-index: 1;
  transform:  translate(-50%, -50%) rotate(-90deg);
  z-index: 3;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const SKILLS = styled(NavLink)`
   color: ${(props) => props.theme.text};
  text-decoration: none;
  position: fixed;
  right: calc(1rem + 2vw);
  top: 50%;
  z-index: 1;
  transform:  rotate(90deg) translate(-50%, -50%);
  @media (max-width: 1300px) {
    display: none;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  flex-direction; row;
  display: flex;
  justify-content: space-evenly;
`;

const CODING = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const ACHIEVEMENT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const TopBar = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  width: 100%;
  flex-direction; row;
  display: flex;
  justify-content: space-evenly;
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const EXPERIENCE = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  @media (max-width: 1300px) {
    display: none;
  }
`;



const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 1300px) {
    top: ${(props) => (props.click ? "92.5%" : "50%")};
    left: ${(props) => (props.click ? "85%" : "50%")};
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "100%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  @media (max-width: 50em){
    height: 50%;
    right: 0px;
    width: 100%;
    width: ${(props) => (props.click ? "100%" : "0%")};
  height: ${(props) => (props.click ? "50%" : "0%")};
    transition: width 0.5s ease 0s, height 1s ease 0.5s;
  }
`;

const Main = () => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [currentTheme] = useState(lightTheme)

  return (
    <MainContainer theme={currentTheme}>
      <Navright onClick={isOpen}>
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
          {open && click && setClick(!click)}
          <TiThMenu />
        </motion.h2>
      </Navright>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <div className="btn_close" onClick={closeMenu}>
              <TiThMenu />
            </div>
            <motion.a
              href="/about"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              About.
            </motion.a>
            <motion.a
              href="/skills"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              Skills.
            </motion.a>
            <motion.a
              href="/work"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              Projects.
            </motion.a>
            <motion.a
              href="/coding_profile"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              Coding Profiles.
            </motion.a>
            <motion.a
              href="/achievement"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut"
                },
              }}
            >
              Achievement.
            </motion.a>
            <motion.a
              href="/experience"
              initial={{ y: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              Experience.
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      <DarkDiv click={click} />
      <Container theme={currentTheme}>
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

        <Center click={click}>
          {!open && (
            <YinYang
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            />
          )}
          {!open && <span>Show Portfolio</span>}
        </Center>

        <Contact
          target="_blank"
          href="https://www.linkedin.com/in/ankit-kumar-986348224/"
          theme={currentTheme}
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

        <TopBar>
          <EXPERIENCE to="/experience" click={+click} theme={currentTheme}>
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
              Experience.
            </motion.h2>
          </EXPERIENCE>

          <WORK to="/work" >
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
              Projects.
            </motion.h2>
          </WORK>
        </TopBar>


        <ABOUT to="/about" click={+click} theme={currentTheme}>
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
            About.
          </motion.h2>
        </ABOUT>

        <SKILLS to="/skills" click={+click}>
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
            Skills.
          </motion.h2>
        </SKILLS>

        <BottomBar>

          <CODING to="/coding_profile" click={+click} theme={currentTheme}>
            <motion.h2
              initial={{
                y: 150,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Coding Profiles.
            </motion.h2>
          </CODING>



          <ACHIEVEMENT to="/achievement" theme={currentTheme}>
            <motion.h2
              initial={{
                y: 150,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Achievement.
            </motion.h2>
          </ACHIEVEMENT>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
