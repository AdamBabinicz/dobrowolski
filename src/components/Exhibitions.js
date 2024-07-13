import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

// Importowanie lokalnych obrazów
import img1 from "../assets/images/23.jpg";
import img2 from "../assets/images/4.jfif";
import img3 from "../assets/images/3.jfif";
import img4 from "../assets/images/5.jfif";
import img5 from "../assets/images/22.jpg";
import img6 from "../assets/images/21.jpg";

const ExhibitionsSection = styled.section`
  padding: 32px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: ${(props) => props.theme.color};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ExhibitionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExhibitionItem = styled(motion.div)`
  display: flex;
  background-color: ${(props) => props.theme.background};
  padding: 16px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ExhibitionImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
    width: 100%;
    height: auto;
  }
`;

const ExhibitionContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ExhibitionTitle = styled.h3`
  margin-bottom: 8px;
`;

const ExhibitionDate = styled.p`
  font-style: italic;
  margin-bottom: 8px;
`;

const ExhibitionDescription = styled.p`
  margin-bottom: 8px;
`;

const Exhibitions = () => {
  const exhibitionsData = [
    {
      title: "Wystawa czasowa",
      date: "Radom - 1947",
      description:
        "Wystawa zbiorowa obrazów, szkiców i rysunków artysty malarza Wacława Dobrowolskiego, - zorganizowana przez Towarzystwo Przyjaciół Sztuk Pięknych w Radomiu.",
      image: img1,
    },
    {
      title: "Wystawa czasowa",
      date: "Radom - 1948",
      description:
        "Wystawa zbiorowa obrazów, szkiców i rysunków artysty malarza Wacława Dobrowolskiego - kontynuacja z 1947 r.",
      image: img2,
    },
    {
      title:
        "35 lat pracy artystycznej : Wystawa zbiorowa Wacława Dobrowolskiego",
      date: "1955",
      description:
        "Radom - wystawy - 1955 r.; Dobrowolski, Wacław (1890-1969) - katalogi wystaw; Malarstwo polskie - 20 w. - katalogi wystaw",
      image: img3,
    },
    {
      title: "Wystawa czasowa",
      date: "Radom - 1967",
      description:
        "Wacław Dobrowolski - malarstwo - zorganizowana przez Związek Polskich Artystów Plastyków w Radomiu.",
      image: img4,
    },
    {
      title: "Wystawa czasowa",
      date: "Radom - 1970",
      description:
        "Wacław Dobrowolski 1890-1969 - zorganizowana przez Towarzystwo Przyjaciół Sztuk Pięknych w Radomiu.",
      image: img5,
    },
    {
      title: "42 Salon Zimowy. Powrót",
      date: "Radom - 28 lutego – 13 kwietnia 2009 r.",
      description:
        "Wystawę rozpoczynają prace dwojga artystów środowiska radomskiego, Wacława Dobrowolskiego i Haliny Krysińskiej, którzy byli założycielami Towarzystwa w 1945 r., uczestniczyli w wielu wystawach.",
      image: img6,
    },
  ];

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

  return (
    <ExhibitionsSection id="wystawy">
      <Title>Wystawy</Title>
      <ExhibitionsGrid>
        {exhibitionsData.map((exhibition, index) => (
          <ExhibitionItem
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ExhibitionImage
              src={exhibition.image}
              alt={exhibition.title}
              whileHover={{ scale: 1.05 }}
            />
            <ExhibitionContent>
              <ExhibitionTitle>{exhibition.title}</ExhibitionTitle>
              <ExhibitionDate>{exhibition.date}</ExhibitionDate>
              <ExhibitionDescription>
                {exhibition.description}
              </ExhibitionDescription>
            </ExhibitionContent>
          </ExhibitionItem>
        ))}
      </ExhibitionsGrid>
    </ExhibitionsSection>
  );
};

export default Exhibitions;
