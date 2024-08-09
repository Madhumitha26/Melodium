import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #333;
  text-decoration: none;
  margin-bottom: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #666;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/courses">Courses</FooterLink>
          <FooterLink to="/register">Register</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <p>Email: info@onlinemusicclasses.com</p>
          <p>Phone: (123) 456-7890</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <FooterLink as="a" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</FooterLink>
          <FooterLink as="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</FooterLink>
          <FooterLink as="a" href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</FooterLink>
        </FooterSection>
      </FooterContent>
      <Copyright>© {new Date().getFullYear()} Online Music Classes. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;