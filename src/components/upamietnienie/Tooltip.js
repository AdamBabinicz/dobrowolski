import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const TooltipContainer = styled(animated.div)`
  position: absolute;
  background: ${(props) => props.theme.tooltipBackground};
  color: ${(props) => props.theme.tooltipText};
  padding: 12px 16px; /* większy padding */
  border-radius: 8px; /* zaokrąglone rogi */
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "0 2px 8px rgba(255, 255, 255, 0.6)" // Cień dla motywu dark
      : "0 2px 8px rgba(0, 0, 0, 0.2)"}; // Cień dla motywu light
  z-index: 9999;
  width: 250px; /* Szerokość tooltipa */

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const Tooltip = ({ content }) => {
  const tooltipAnimation = useSpring({
    opacity: 1,
    transform: "translateY(-10px)",
    config: { tension: 300, friction: 20 },
  });

  if (!content) return null;

  return (
    <TooltipContainer style={tooltipAnimation}>{content}</TooltipContainer>
  );
};

export default Tooltip;
