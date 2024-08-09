import React from 'react';
import styled from 'styled-components';
import CourseCard from '../components/CourseCard';
import bg6 from '../Images/bg6.jpg';
import bg7 from '../Images/bg7.jpg';
import bg8 from '../Images/bg8.jpg';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;


const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CoursesPage = () => {
  const courses = [
    {
      title: 'Basic Carnatic',
      description: 'Learn the fundamentals of Carnatic music, including swaras, ragas, and basic compositions.',
      fee: 199,
      backgroundImage: bg6,
    },
    {
      title: 'Intermediate Carnatic',
      description: 'Dive deeper into complex ragas, talas, and improvisation techniques.',
      fee: 299,
      backgroundImage: bg7,
    },
    {
      title: 'Advanced Carnatic',
      description: 'Master the art of manodharma sangeetham and explore rare ragas and compositions.',
      fee: 399,
      backgroundImage: bg8,
    },
  ];

  return (
    <PageWrapper>
      <Title>Our Courses</Title>
      <CoursesGrid>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            fee={course.fee}
            backgroundImage={course.backgroundImage}
          />
        ))}
      </CoursesGrid>
    </PageWrapper>
  );
};


export default CoursesPage;