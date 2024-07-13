import React, { useEffect } from "react";
import styled from "styled-components";
import Section from "./Section";
import Button from "../Button";
import image1 from "../../assets/images/13.jpg";
import image2 from "../../assets/images/5.webp";
import image3 from "../../assets/images/14.jpg";
import image4 from "../../assets/images/6.webp";
import Modal from "../hooks/Modal";
import useModal from "../hooks/useModal";
import img from "../../assets/images/2.png";
import { motion, useAnimation } from "framer-motion";

const UpamietnieniePageContainer = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 20px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
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

const SectionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const UpamietnieniePage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const upamietnienieSection = document.getElementById("upamietnienie");

      if (
        upamietnienieSection &&
        scrollPosition > upamietnienieSection.offsetTop
      ) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <UpamietnieniePageContainer id="upamietnienie">
      <Title>Upamiętnienie</Title>
      <SectionsContainer>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Section
            title="Ulica Wacława Dobrowolskiego"
            text="Ulica Wacława Dobrowolskiego prowadzi od ul. T. Grodzińskiej do ul. Rodziny Graboszów. Krzyżuje się z ul. J. Prackiego. (Rajec Szlachecki)"
            image={image1}
            alt="Rajec Szlachecki"
            tooltipContent="Nazwa ulicy została nadana uchwałą Rady Miejskiej z 24 listopada 2008 r."
            iconPosition="left"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Section
            title="Wacław Dobrowolski w latach 30-tych założył w Łodzi Grupę Artystyczną Ryngraf"
            text="Uroczystość odbyła się przy ul. Wólczańskiej 35. Adres wybrano nieprzypadkowo - w tym właśnie miejscu w latach dwudziestych XX wieku malarz i rysownik zasłużony dla rozwoju kulturalnego Łodzi, założył szkołę dla przyszłych artystów."
            image={image2}
            alt="Tablice"
            tooltipContent="Uroczystości odsłonięcia tablicy pamiątkowej Wacława Dobrowolskiego (1890–1969) w Łodzi przy ul. Wólczańskiej 35. W tym miejscu, w 1929 r. Dobrowolski założył Szkołę Rysunku, Malarstwa, Rzeźby i Przemysłu Artystycznego im. Cypriana Kamila Norwida, która działała do 1938 roku, a następnie przy ul. Piotrkowskiej 84 (aż do wybuchu II wojny światowej)."
            iconPosition="left"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Section
            title="1 września 2015r., w 125-tą rocznicę urodzin i 45-tą rocznicę śmierci Wacława Dobrowolskiego, założyciela szkoły"
            text="Na uroczystość przybyli wyjątkowi goście, min.: syn i wnuk Wacława Dobrowolskiego oraz polski grafik, malarz, artysta plastyk, popularyzator sztuki i wykładowca Alojzy Balcerzak, którzy odsłonili pamiątkową tablicę zaprojektowaną przez artystę i pedagoga radomskiego 'Plastyka' - Włodzimierza Orła. "
            image={image3}
            alt="Tablice"
            tooltipContent="Tablica upamiętniająca profesora Wacława Dobrowolskiego znajduje się na budynku Zespołu Szkół Plastycznych im. Józefa Brandta w Radomiu."
            iconPosition="left"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Section
            title="Pomniki"
            text="Profesor Dobrowolski jest pochowany w Bodzanowie koło Płocka."
            image={image4}
            alt="Pomniki"
            tooltipContent="Wiadomość niepotwierdzona."
            iconPosition="left"
          />
        </motion.div>
      </SectionsContainer>

      <Button label="Zobacz więcej" onClick={openModal} />
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        header="Portret z przeszłości"
        content="Zofia Kaczkowska-Waliszewska: 'To jedna z niewielu pamiątek, które przetrwały wojnę - ten portret, sukienka, w której pozowałam, fortepian i... żyrandol. Patrząc na obraz z mojego dzieciństwa sprzed 81 lat, przenoszę się do tamtych szczęśliwych, niewinnych czasów, zanim wybuchła wojna i wszystko się zmieniło.'"
        imgSrc={img}
      />
    </UpamietnieniePageContainer>
  );
};

export default UpamietnieniePage;
