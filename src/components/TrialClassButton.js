import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const TrialClassButton = () => {
  const handleClick = () => {
    alert('Thank you for booking a free trial class! We will contact you shortly.');
  };

  return <Button onClick={handleClick}>Book a Free Trial Class</Button>;
};

export default TrialClassButton;