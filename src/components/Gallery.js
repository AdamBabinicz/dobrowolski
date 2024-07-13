import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/9.jpg";
import image8 from "../assets/images/10.jpg";
import image9 from "../assets/images/11.jpg";
import image10 from "../assets/images/12.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryContainer = styled.section`
  padding: 32px;
  background: ${(props) => props.theme.background};
  position: relative;
  z-index: 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: ${(props) => props.theme.color};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  gap: 2rem;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    object-fit: contain;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  /* bottom: 0; */
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    max-width: 100%;
  }
`;

const ImageWrapperHover = styled(ImageWrapper)`
  &:hover ${ImageOverlay} {
    opacity: 1;
    overflow: hidden;
  }
`;

const NavigationButton = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.hoverBackground};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) => props.$left && "left: 16px;"}
  ${(props) => props.$right && "right: 16px;"}

  @media (max-width: 768px) {
    ${(props) => props.$left && "left: 8px;"}
    ${(props) => props.$right && "right: 8px;"}
  }
`;

const CustomNextArrow = ({ onClick }) => (
  <NavigationButton $right onClick={onClick}>
    <FaArrowRight />
  </NavigationButton>
);

const CustomPrevArrow = ({ onClick }) => (
  <NavigationButton $left onClick={onClick}>
    <FaArrowLeft />
  </NavigationButton>
);

const Gallery = () => {
  const images = [
    { src: image1, title: "Snopki", year: "1958" },
    { src: image2, title: "Zamyślona", year: "1947" },
    { src: image3, title: "Portret chłopca", year: "1933" },
    { src: image4, title: "Marina na Capri", year: "1928" },
    { src: image5, title: "Pejzaż z rzeką", year: "?" },
    { src: image6, title: "Polna droga", year: "?" },
    { src: image7, title: "Portret pani", year: "1929" },
    { src: image8, title: "Portret mężczyzny w garniturze", year: "1937" },
    { src: image9, title: "Portret Bolesława Bończyka", year: "1937" },
    { src: image10, title: "Portret Czesławy Bończyk", year: "1937" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <GalleryContainer id="gallery-obrazy">
      <Title>Obrazy</Title>
      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageWrapperHover key={index}>
            <Image src={image.src} alt={`Artwork ${index + 1}`} />
            <ImageOverlay>
              {image.title} - {image.year}
            </ImageOverlay>
          </ImageWrapperHover>
        ))}
      </Slider>
    </GalleryContainer>
  );
};

export default Gallery;
