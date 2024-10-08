import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const BiographySection = styled.section`
  padding: 32px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  p {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin-bottom: 1rem;
    }
  }

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

const AnimatedParagraph = styled(motion.p)`
  margin-bottom: 16px;
  text-align: left;
`;

const Biography = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const biographySection = document.getElementById("biografia");

      if (biographySection && scrollPosition > biographySection.offsetTop) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <BiographySection id="biografia">
      <Title>Biografia</Title>
      <AnimatedParagraph
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Syn Heliodora, w&nbsp;wieku siedmiu lat przeniósł się do Kijowa. Tam
        ukończył szkołę realną, a&nbsp;następnie rozpoczął studia
        architektoniczne w&nbsp;Szkole Sztuk Pięknych. Po roku zmienił kierunek
        na malarstwo, ucząc się pod okiem takich mistrzów jak Iwan Fedorowicz
        Selezniow, Grigorij Kononowicz Diadczenko, Muraszko i&nbsp;Menek.
        W&nbsp;1912 roku ukończył studia, zdobywając uprawnienia do nauczania
        rysunku i&nbsp;grafiki w&nbsp;szkołach średnich. Jesienią tego samego
        roku kontynuował naukę na Akademii Sztuk Pięknych w&nbsp;Petersburgu,
        gdzie studiował u&nbsp;znakomitych profesorów: Konstantina Makowskiego,
        Jana Ciąglińskiego, Iwana Iwanowicza Tworożnkowa, Biełajewa, Dymitra
        Nikołajewicza Kardowskiego i&nbsp;Wasilija Sawińskiego.
      </AnimatedParagraph>
      <AnimatedParagraph
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Od 1920 roku jego prace można było podziwiać na wystawach w&nbsp;Kijowie
        i&nbsp;Leningradzie. W&nbsp;1922 roku przeniósł się do Moskwy, gdzie
        przez dwa lata pracował jako plastyk. Po powrocie do Kijowa w&nbsp;1924
        roku ukończył studia i&nbsp;zdobył dyplom artysty malarza. Został wtedy
        członkiem Związku Zawodowego Pracowników Sztuki i&nbsp;zaczął pracować
        jako ilustrator czasopism. W&nbsp;1927 roku wyruszył w&nbsp;podróż po
        Europie, spędzając kilka miesięcy we&nbsp;Włoszech, gdzie stworzył
        kolekcję około stu grafik. Rok później osiedlił się w&nbsp;Łodzi,
        współtworząc tam Szkołę Sztuk Pięknych, która w&nbsp;1937 roku została
        przemianowana na Szkołę Sztuk Pięknych i&nbsp;Przemysłu Artystycznego
        im. Cypriana Kamila Norwida. Wystawiał swoje prace w&nbsp;Łodzi,
        warszawskim Instytucie Propagandy Sztuki i&nbsp;Zachęcie. W&nbsp;1940
        roku został wysiedlony do Limanowej, skąd przeniósł się do Radomia,
        gdzie zarabiał na życie malowaniem portretów i&nbsp;udzielaniem
        prywatnych lekcji.
      </AnimatedParagraph>
      <AnimatedParagraph
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        W&nbsp;1945 założył szkołę plastyczną, która cztery lata później stała
        się Państwowym Ogniskiem Plastycznym. Również w&nbsp;1945 zainicjował
        powstanie radomskiego oddziału Towarzystwa Przyjaciół Sztuk Pięknych, za
        co został wynagrodzonym medalem. Był również pierwszym prezesem Związku
        Pracowników Sztuki w&nbsp;Radomiu oraz organizatorem Klubu
        Literacko-Artystycznego. Był wyjątkowo zasłużony dla rozwoju środowiska
        artystycznego w&nbsp;mieście, które wcześniej nie posiadało takich
        tradycji. Wielu uczniów Wacława Dobrowolskiego ukończyło Akademie Sztuk
        Pięknych i&nbsp;zostało zawodowymi malarzami, należeli do nich m.in.
        Alojzy Balcerzak, Władysław Kurpiel, Krystyna Krause. Lekcje rysunku
        pobierał również Andrzej Wajda i&nbsp;Adam Gierczak - autor strony.
      </AnimatedParagraph>
    </BiographySection>
  );
};

export default Biography;
