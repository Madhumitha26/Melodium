import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Quote = styled.blockquote`
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const Author = styled.p`
  font-weight: bold;
  text-align: right;
`;

const FeedbackCard = ({ quote, author }) => {
  return (
    <Card>
      <Quote>"{quote}"</Quote>
      <Author>- {author}</Author>
    </Card>
  );
};

export default FeedbackCard;