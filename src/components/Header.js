import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion"; // Importujemy potrzebne elementy z framer-motion
import { useTheme } from "../ThemeContext";
import img from "../assets/images/4.webp";

const HeaderContainer = styled.header`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative; /* Dodajemy pozycję względną, aby móc użyć z-index */

  h1 {
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLink = styled(motion.a)`
  color: ${(props) => props.theme.color};
  text-decoration: none;
  font-size: 20px;
  margin: 16px 0;
  cursor: pointer; /* Dodajemy kursor dla elementów nawigacji */

  &:hover {
    text-decoration: underline;
  }
`;

const ThemeToggle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuControls = useAnimation(); // Używamy useAnimation z framer-motion

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    menuControls.start({ x: isOpen ? "-100%" : "0%", opacity: isOpen ? 0 : 1 }); // Animacja menu przy użyciu framer-motion
  };

  const closeMenu = () => {
    setIsOpen(false);
    menuControls.start({ x: "-100%", opacity: 0 }); // Animacja zamykania menu
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const headerSection = document.getElementById("start");

      if (headerSection && scrollPosition > headerSection.offsetTop) {
        menuControls.start({ opacity: 1, y: 0 });
      } else {
        menuControls.start({ opacity: 0, y: -50 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuControls]);

  return (
    <HeaderContainer id="start">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Wacław Dobrowolski
      </motion.h1>
      <MenuIcon onClick={handleMenuToggle}>
        {isOpen ? (
          <FaTimes size={24} onClick={handleMenuToggle} />
        ) : (
          <FaBars size={24} onClick={handleMenuToggle} />
        )}
      </MenuIcon>
      <Nav>
        <NavLink
          initial={{ opacity: 0, y: -50 }} // Początkowe ustawienia animacji
          animate={{ opacity: 1, y: 0 }} // Animacja po pojawieniu się
          transition={{ duration: 0.6, delay: 0.2 }} // Czas trwania animacji i opóźnienie
          href="#start"
          onClick={(e) => handleSmoothScroll(e, "start")}
        >
          Start
        </NavLink>
        <NavLink
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#biografia"
          onClick={(e) => handleSmoothScroll(e, "biografia")}
        >
          Biografia
        </NavLink>
        <NavLink
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#gallery-obrazy"
          onClick={(e) => handleSmoothScroll(e, "gallery-obrazy")}
        >
          Obrazy
        </NavLink>
        <NavLink
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          href="#wystawy"
          onClick={(e) => handleSmoothScroll(e, "wystawy")}
        >
          Wystawy
        </NavLink>
        <NavLink
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          href="#upamietnienie"
          onClick={(e) => handleSmoothScroll(e, "upamietnienie")}
        >
          Upamiętnienie
        </NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
        </ThemeToggle>
      </Nav>
      <MobileMenu
        initial={{ x: "-100%", opacity: 0 }} // Początkowe ustawienia animacji
        animate={menuControls} // Używamy kontrolera animacji
        transition={{ duration: 0.5 }} // Czas trwania animacji
      >
        <img src={img} alt="ryngraf" />
        <NavLink
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="#start"
          onClick={(e) => handleSmoothScroll(e, "start")}
        >
          Start
        </NavLink>
        <NavLink
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#biografia"
          onClick={(e) => handleSmoothScroll(e, "biografia")}
        >
          Biografia
        </NavLink>
        <NavLink
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#gallery-obrazy"
          onClick={(e) => handleSmoothScroll(e, "gallery-obrazy")}
        >
          Obrazy
        </NavLink>
        <NavLink
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          href="#wystawy"
          onClick={(e) => handleSmoothScroll(e, "wystawy")}
        >
          Wystawy
        </NavLink>
        <NavLink
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          href="#upamietnienie"
          onClick={(e) => handleSmoothScroll(e, "upamietnienie")}
        >
          Upamiętnienie
        </NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
        </ThemeToggle>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
