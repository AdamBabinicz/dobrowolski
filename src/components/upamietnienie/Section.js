import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import { MdInfoOutline } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";

const SectionContainer = styled(motion.div)`
  background: ${(props) => props.theme.sectionBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: 768px) {
    height: 650px;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    object-fit: cover;
    height: 400px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: ${(props) => props.theme.sectionTitleColor};

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SectionText = styled.p`
  margin-bottom: 16px;
`;

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Section = ({ title, text, image, alt, tooltipContent }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const exhibitionsSection = document.getElementById("wystawy");

      if (exhibitionsSection && scrollPosition > exhibitionsSection.offsetTop) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleTouchStart = () => {
    setShowTooltip((prev) => !prev);
  };

  return (
    <SectionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      whileHover={{ scale: 1.05 }}
    >
      <SectionImage src={image} alt={alt} />
      <SectionTitle>{title}</SectionTitle>
      <SectionText>{text}</SectionText>
      <TooltipContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
      >
        <MdInfoOutline size={30} />
        {showTooltip && tooltipContent && <Tooltip content={tooltipContent} />}
      </TooltipContainer>
    </SectionContainer>
  );
};

export default Section;
