import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { useTheme } from "../ThemeContext";

const HeaderContainer = styled.header`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(animated.div)`
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
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.color};
  text-decoration: none;
  font-size: 20px;
  margin: 16px 0;

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

  // Definiujemy animację przy pomocy react-spring
  const menuAnimation = useSpring({
    transform: isOpen ? `translateX(0%)` : `translateX(-100%)`, // Przesuń menu w prawo, jeśli isOpen jest true
    opacity: isOpen ? 1 : 0, // Ustaw opację na 1, jeśli isOpen jest true
    config: { duration: 500 }, // Ustaw czas trwania animacji na 300ms
  });

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <HeaderContainer id="start">
      <h1>Wacław Dobrowolski</h1>
      <MenuIcon onClick={handleMenuToggle}>
        {isOpen ? (
          <FaTimes size={24} onClick={handleMenuToggle} />
        ) : (
          <FaBars size={24} onClick={handleMenuToggle} />
        )}
      </MenuIcon>
      <Nav>
        <NavLink href="#start" onClick={(e) => handleSmoothScroll(e, "start")}>
          Start
        </NavLink>
        <NavLink
          href="#biografia"
          onClick={(e) => handleSmoothScroll(e, "biografia")}
        >
          Biografia
        </NavLink>
        <NavLink
          href="#gallery-obrazy"
          onClick={(e) => handleSmoothScroll(e, "gallery-obrazy")}
        >
          Obrazy
        </NavLink>
        <NavLink
          href="#wystawy"
          onClick={(e) => handleSmoothScroll(e, "wystawy")}
        >
          Wystawy
        </NavLink>
        <NavLink
          href="#upamietnienie"
          onClick={(e) => handleSmoothScroll(e, "upamietnienie")}
        >
          Upamiętnienie
        </NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
        </ThemeToggle>
      </Nav>
      <MobileMenu style={menuAnimation}>
        <NavLink href="#start" onClick={(e) => handleSmoothScroll(e, "start")}>
          Start
        </NavLink>
        <NavLink
          href="#biografia"
          onClick={(e) => handleSmoothScroll(e, "biografia")}
        >
          Biografia
        </NavLink>
        <NavLink
          href="#gallery-obrazy"
          onClick={(e) => handleSmoothScroll(e, "gallery-obrazy")}
        >
          Obrazy
        </NavLink>
        <NavLink
          href="#wystawy"
          onClick={(e) => handleSmoothScroll(e, "wystawy")}
        >
          Wystawy
        </NavLink>
        <NavLink
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
