import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
width: 100%;
    height: 100%;
    background: FloralWhite;
display: flex;
flex-direction: column;
justify-content: start;
position: relative;
z-index: 1;
`

const Wrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
padding: 0 30px;
  font-size: 80px;
  display: flex;
  justify-items: start;
  font-family: "Protest Guerrilla", sans-serif;
  font-weight: 900;
  text-decoration: underline;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
padding: 0 30px;
width: 140%;
height: 100%;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  margin-bottom: 30px;
  gap: 30px;
  justify-content: start;
  @media (max-width: 1500px){
    width: 100%;
height: 100%;
}
@media (max-width: 768px){
    width: 100%;
height: 100%;
}
`

const Skill = styled.div`
  width: 100%;
height: 100%;
background-color: ${({ theme }) => theme.grey};
cursor: pointer;
border-radius: 10px;
 box-shadow: 0 0 0px 0px rgba(0,0,0,0.4);
overflow: visible; /* Ensure overflow content is visible */
padding: 26px 20px;
display: flex;
align-items: right;
flex-direction: column;
gap: 14px;
transition: all 0.5s ease-in-out;
&:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 1px 3px rgba(0,0,0,0.6);
    filter: brightness(1.1);
}

@media (max-width: 1500px){
    width: 100%;
height: 100%;
}
@media (max-width: 768px){
    width: 100%;
height: 100%;
}

`

const SkillTitle = styled.h2`
font-family: "Neuton", serif;
  font-size: 35px;
  font-weight: 800;
  color: ${({ theme }) => theme.black};
  margin-bottom: 20px;
  justify-content: start;
`

const SkillList = styled.div`
  display: flex;
  justify-content: start; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
font-family: "Neuton", serif;
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.black + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  justify-content: start;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 25px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title style={{ color: "black" }}>SKILLS</Title>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills