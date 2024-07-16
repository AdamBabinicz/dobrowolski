import React, { useState, useRef } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import { MdInfoOutline } from "react-icons/md";

const SectionContainer = styled.div`
  background: ${(props) => props.theme.sectionBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: 768px) {
    height: 630px;
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
`;

const SectionText = styled.p`
  margin-bottom: 16px;
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipIcon = styled(MdInfoOutline)`
  cursor: pointer;
`;

const Section = ({ title, text, image, alt, tooltipContent, iconPosition }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const iconRef = useRef(null);

  return (
    <SectionContainer>
      <SectionImage src={image} alt={alt} />
      <SectionTitle>{title}</SectionTitle>
      <SectionText>{text}</SectionText>
      <TooltipWrapper
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        ref={iconRef}
      >
        <TooltipIcon size={24} />
        {showTooltip && (
          <Tooltip
            content={tooltipContent}
            iconPosition={iconPosition}
            parentRef={iconRef}
          />
        )}
      </TooltipWrapper>
    </SectionContainer>
  );
};

export default Section;
