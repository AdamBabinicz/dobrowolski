import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/1.webp";
import img1 from "../assets/images/1.jfif";
import { FaBars } from "react-icons/fa";
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

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 16px;
    /* text-align: left; */
  }
`;

const Description = styled.p`
  margin-bottom: 16px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

const Image = styled.img`
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
  const [click, setClick] = useState(false);

  return (
    <HomeContainer>
      <ContentContainer>
        <div>
          <Title>
            „Jego talent był tęgi, rzetelny, świadomy swoich dróg i&nbsp;celów.”
          </Title>
          <Description>
            Pochodzący z&nbsp;Kresów artysta, znany głównie z&nbsp;rysunków
            i&nbsp;malarstwa, był wrogim krytykiem
            <b> Władysława Strzemińskiego</b> (1893-1952) oraz zdecydowanym
            przeciwnikiem przyznania twórcy unizmu Nagrody Artystycznej Miasta
            Łodzi w&nbsp;1932 roku.
          </Description>
          <Description>
            Tymczasem był to barwny i&nbsp;wszechstronny twórca zasłużony dla
            rozwoju kulturalnego Łodzi w&nbsp;okresie międzywojennym, wręcz
            nadający ton ówczesnemu życiu artystycznemu.
            <br />
            Jednak my skupiamy się teraz na okresie, kiedy artysta przebywał
            w&nbsp;Radomiu.
          </Description>
          <Button label="Zobacz więcej" onClick={openModal} />
        </div>
        <Image src={img} alt="Artwork" />
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
