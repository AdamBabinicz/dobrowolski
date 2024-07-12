import React from "react";
import styled from "styled-components";

const BiographySection = styled.section`
  padding: 32px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  p {
    font-size: 1.1rem;

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
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: ${(props) => props.theme.color};
`;

const Biography = () => {
  return (
    <BiographySection id="biografia">
      <Title>Biografia</Title>
      <p>
        Syn Heliodora, w wieku siedmiu lat przeniósł się do Kijowa. Tam ukończył
        szkołę realną, a następnie rozpoczął studia architektoniczne w Szkole
        Sztuk Pięknych. Po roku zmienił kierunek na malarstwo, ucząc się pod
        okiem takich mistrzów jak Iwan Fedorowicz Selezniow, Grigorij Kononowicz
        Diadczenko, Muraszko i Menek. W 1912 roku ukończył studia, zdobywając
        uprawnienia do nauczania rysunku i grafiki w szkołach średnich. Jesienią
        tego samego roku kontynuował naukę na Akademii Sztuk Pięknych w
        Petersburgu, gdzie studiował u znakomitych profesorów: Konstantina
        Makowskiego, Jana Ciąglińskiego, Iwana Iwanowicza Tworożnkowa,
        Biełajewa, Dymitra Nikołajewicza Kardowskiego i Wasilija Sawińskiego.
      </p>
      <p>
        Od 1920 roku jego prace można było podziwiać na wystawach w Kijowie i
        Leningradzie. W 1922 roku przeniósł się do Moskwy, gdzie przez dwa lata
        pracował jako plastyk. Po powrocie do Kijowa w 1924 roku ukończył studia
        i zdobył dyplom artysty malarza. Został wtedy członkiem Związku
        Zawodowego Pracowników Sztuki i zaczął pracować jako ilustrator
        czasopism. W 1927 roku wyruszył w podróż po Europie, spędzając kilka
        miesięcy we Włoszech, gdzie stworzył kolekcję około stu grafik. Rok
        później osiedlił się w Łodzi, współtworząc tam Szkołę Sztuk Pięknych,
        która w 1937 roku została przemianowana na Szkołę Sztuk Pięknych i
        Przemysłu Artystycznego im. Cypriana Kamila Norwida. Wystawiał swoje
        prace w Łodzi, warszawskim Instytucie Propagandy Sztuki i Zachęcie. W
        1940 roku został wysiedlony do Limanowej, skąd przeniósł się do Radomia,
        gdzie zarabiał na życie malowaniem portretów i udzielaniem prywatnych
        lekcji.
      </p>
      <p>
        W 1945 założył szkołę plastyczną, która cztery lata później stała się
        Państwowym Ogniskiem Plastycznym. Również w 1945 zainicjował powstanie
        radomskiego oddziału Towarzystwa Przyjaciół Sztuk Pięknych, za co został
        wynagrodzonym medalem. Był również pierwszym prezesem Związku
        Pracowników Sztuki w Radomiu oraz organizatorem Klubu
        Literacko-Artystycznego. Był wyjątkowo zasłużony dla rozwoju środowiska
        artystycznego w mieście, które wcześniej nie posiadało takich tradycji.
        Wielu uczniów Wacława Dobrowolskiego ukończyło Akademie Sztuk Pięknych i
        zostało zawodowymi malarzami, należeli do nich m.in. Alojzy Balcerzak,
        Władysław Kurpiel, Krystyna Krause. Lekcje rysunku pobierał również
        Andrzej Wajda i Adam Gierczak - autor strony.
      </p>
    </BiographySection>
  );
};

export default Biography;
