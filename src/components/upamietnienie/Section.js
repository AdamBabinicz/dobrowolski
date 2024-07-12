import React, { useState } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import { MdInfoOutline } from "react-icons/md";

const SectionContainer = styled.div`
  background: ${(props) => props.theme.sectionBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    object-fit: cover;
    height: 400px;
    width: 100%;
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

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <SectionContainer>
      <SectionImage src={image} alt={alt} />
      <SectionTitle>{title}</SectionTitle>
      <SectionText>{text}</SectionText>
      <TooltipContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MdInfoOutline size={20} />
        {showTooltip && tooltipContent && <Tooltip content={tooltipContent} />}
      </TooltipContainer>
    </SectionContainer>
  );
};

export default Section;
