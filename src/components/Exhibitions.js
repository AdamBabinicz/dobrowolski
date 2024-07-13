import React from "react";
import styled from "styled-components";

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExhibitionItem = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.background};
  padding: 16px;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ExhibitionImage = styled.img`
  /* flex: 1; */
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 16px;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

const ExhibitionContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const ExhibitionTitle = styled.h3`
  margin-bottom: 8px;
`;

const ExhibitionDate = styled.p`
  font-style: italic;
  margin-bottom: 16px;
`;

const ExhibitionDescription = styled.p`
  margin-bottom: 16px;
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

  return (
    <ExhibitionsSection id="wystawy">
      <Title>Wystawy</Title>
      <ExhibitionsGrid>
        {exhibitionsData.map((exhibition, index) => (
          <ExhibitionItem key={index}>
            <ExhibitionImage src={exhibition.image} alt={exhibition.title} />
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
