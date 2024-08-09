import React, { useState, useEffect } from 'react';
import FeedbackCard from '../components/FeedbackCard';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const TopRightContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

const RegRightContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 100px;
  z-index: 10;
`;

const CourseRightContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 200px;
  z-index: 10;
`;

const HomeButton = styled(Link)`
  padding: 10px 20px;
  background-color: #019bgf;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: bold;
  transition: background-color 0.5s;

  &:hover {
    background-color: #00689b;
  }
`;

const RegisterButton = styled(Link)`
  padding: 10px 20px;
  background-color: #019bgf;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: bold;
  transition: background-color 0.5s;

  &:hover {
    background-color: #00689b;
  }
`;

const CourseButton = styled(Link)`
  padding: 10px 20px;
  background-color: #019bgf;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: bold;
  transition: background-color 0.5s;

  &:hover {
    background-color: #00689b;
  }
`;

const slideBackground = keyframes`
  0%, 33%, 100% {
    background-position: 0% 50%, 100% 50%, 200% 50%;
  }
  33.3%, 66% {
    background-position: -100% 50%, 0% 50%, 100% 50%;
  }
  66.3%, 99% {
    background-position: -200% 50%, -100% 50%, 0% 50%;
  }
`;

const Hero = styled.div`
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-image 0.2s ease-in-out;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white; // Ensure text is visible on the background
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); // Optional: adds a semi-transparent overlay
  border-radius: 10px;
`;


const Hero1 = styled.div`
  background-image: url('/assets/images/bg2.jpg'), url('/assets/images/bg2.jpg'), url('/assets/images/bg4.jpg');
  background-size: 100% 100%, 100% 100%, 100% 100%;
  background-position: 0% 50%, 100% 50%, 200% 50%;
  background-repeat: no-repeat, no-repeat, no-repeat;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideBackground} 30s linear infinite;
  overflow: hidden;
`;

const HeroContent1 = styled.div`
  text-align: center;
  color: white; // Ensure text is visible on the background
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); // Optional: adds a semi-transparent overlay
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  max-width: 3000px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const HomePage = () => {
  const backgrounds = [
    '/assets/images/bg4.jpg',
    '/assets/images/bg2.jpg',
    '/assets/images/bg3.jpg'
  ];
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => 
        (prevIndex + 1) % backgrounds.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Hero backgroundImage={backgrounds[currentBackgroundIndex]}>
        <HeroContent>
          <Title>Learn Carnatic Music Online</Title>
          <Subtitle>Discover the beauty of South Indian classical music from expert instructors</Subtitle>
          {/* TODO: Implement TrialClassButton component */}
          {/* <TrialClassButton /> */}
        </HeroContent>
      </Hero>
      <Section>
        <Hero1>
          <HeroContent1>
        <SectionTitle>About Our Classes</SectionTitle>
        <p>
          Our online Carnatic music classes offer a comprehensive learning experience for students of all levels. 
          From basic concepts to advanced techniques, our expert instructors will guide you through the intricacies 
          of this ancient art form.
        </p>
        </HeroContent1>
        </Hero1>
      </Section>
      <Section>
        <SectionTitle>Student Feedback</SectionTitle>
        <FeedbackCard 
          quote="The online classes have been a game-changer for me. I can now learn Carnatic music from the comfort of my home!"
          author="Priya S."
        />
        <FeedbackCard 
          quote="The instructors are highly skilled and patient. I've seen significant improvement in my singing."
          author="Rahul M."
        />
      </Section>
    </>
  );
};

export default HomePage;