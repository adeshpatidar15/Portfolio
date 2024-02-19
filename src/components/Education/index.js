
import React from 'react'
import styled from 'styled-components'
import TimelineContent from '@mui/lab/TimelineContent';
import { education,  } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
background: FloralWhite;
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;
    z-index: 1;
    // align-items: center;
    // clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: start;
flex-direction: column;
width: 100%;
max-width: 1350px;
// padding: 10px 0px 100px 0;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

const Title = styled.div`
padding: 0 30px;
font-size: 80px;
justify-content: start;
// text-align: center;
font-family: "Protest Guerrilla", sans-serif;
font-weight: 800;
text-decoration: underline;
margin-top: 20px;
  color: ${({ theme }) => theme.black};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;



const index = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>EDUCATION</Title>
                        {education.map((education,index) => (
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                        ))}
            </Wrapper>
        </Container>
    )
}

export default index