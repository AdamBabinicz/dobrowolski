import React from "react";
import styled from "styled-components";
import img from "../assets/1.webp";
import img1 from "../assets/images/1.jfif";
import { motion } from "framer-motion";
import Button from "./Button";
import Modal from "./hooks/Modal";
import useModal from "./hooks/useModal";

const HomeContainer = styled.section`
  text-align: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 64px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    :last-child {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.3rem;
  text-align: center;
  text-wrap: balance;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 16px;
  }
`;

const Description = styled(motion.p)`
  margin-bottom: 16px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

const Image = styled(motion.img)`
  object-fit: cover;
  width: 100%;
  max-width: 300px;
  margin-top: 16px;

  @media (min-width: 768px) {
    max-width: 400px;
    margin-left: 40px;
    margin-top: 0;
  }
`;

const IconContainer = styled.div`
  display: none;

  @media (max-width: 376px) {
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`;

const Home = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <HomeContainer id="start">
      <ContentContainer>
        <div>
          <Title
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            „Jego talent był tęgi, rzetelny, świadomy swoich dróg i&nbsp;celów.”
          </Title>
          <Description
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Pochodzący z&nbsp;Kresów artysta, znany głównie z&nbsp;rysunków
            i&nbsp;malarstwa, był wrogim krytykiem
            <b> Władysława Strzemińskiego</b> (1893-1952) oraz zdecydowanym
            przeciwnikiem przyznania twórcy unizmu Nagrody Artystycznej Miasta
            Łodzi w&nbsp;1932 roku.
          </Description>
          <Description
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Tymczasem był to barwny i&nbsp;wszechstronny twórca zasłużony dla
            rozwoju kulturalnego Łodzi w&nbsp;okresie międzywojennym, wręcz
            nadający ton ówczesnemu życiu artystycznemu.
            <br />
            Jednak my skupiamy się teraz na okresie, kiedy artysta przebywał
            w&nbsp;Radomiu.
          </Description>
          <Button label="Zobacz więcej" onClick={openModal} />
        </div>
        <Image
          src={img}
          alt="Artwork"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
      </ContentContainer>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        header="Mistrz z Kresów"
        content="Artysta regularnie wystawiał swoje prace, w tym olejne, akwarele, pastele i rysunki węglem, w okresie międzywojennym w Łodzi. Brał udział w wystawach swojej szkoły, działającej do 1939 roku, oraz w ekspozycjach Grupy Artystów Plastyków „Ryngraf”, którą założył w 1932 roku. Był znaną i cenioną postacią w lokalnym środowisku artystycznym, wystawiając także w Warszawie, Poznaniu i Krakowie."
        imgSrc={img1}
      />
    </HomeContainer>
  );
};

export default Home;
