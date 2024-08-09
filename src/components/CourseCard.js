import React from 'react';
import styled from 'styled-components';
import TrialClassButton from './TrialClassButton';

const Card = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 300px; // Set a fixed height
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden; // Ensure content doesn't overflow
  position: relative; // For absolute positioning of content
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); // Dark overlay for better text visibility
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 1rem;
`;

const Fee = styled.p`
  font-size: 1.25rem;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #0056b3;
  }
`;


const CourseCard = ({ title, description, fee, backgroundImage }) => {
  return (
    <Card backgroundImage={backgroundImage}>
      <ContentOverlay>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Fee>Fee: ${fee}</Fee>
        <Button>Book a Free Trial Class</Button>
      </ContentOverlay>
    </Card>
  );
};
export default CourseCard;