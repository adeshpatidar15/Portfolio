import { CloseRounded, } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: bottom;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
 `;

const Wrapper = styled.div`
// max-width: 800px;
width: 80%;
border-radius: 16px;
border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
margin: 50px 12px;
height: min-content;
background-color:  ${({ theme }) => theme.white};
color:  ${({ theme }) => theme.white};
padding: 20px;
display: flex;
flex-direction: column;
position absolute
`;

const Title = styled.div`
font-family: "Neuton", serif;
  font-size: 35px;
  font-weight: 800;
  color: ${({ theme }) => theme.black};
  margin: 30px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
font-family: "Neuton", serif;
    font-size: 25px;
    margin: 2px 6px;
    font-weight: 500;
    color: ${({ theme }) => theme.black+ 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Image = styled.img`
    width: 80%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.3);
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

// const Label = styled.div`
// font-family: "Neuton", serif;
//     font-size: 30px;
//     font-weight: 800;
//     color: ${({ theme }) => theme.black};
//     margin: 8px 6px;
//     @media only screen and (max-width: 600px) {
//         font-size: 16px;
//         margin: 8px 6px;
//     }
// `;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
font-family: "Neuton", serif;
    font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center; /* Center items vertically */
    // text-align: center;
    // margin-rightS: auto;
    margin: 30px 6px 0px 6px;
    gap: 12px;
`;

const Desc = styled.div`
font-family: "Neuton", serif;
font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.black + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    // -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`
const Li = styled.li`
text-align: justify;
text-justify: distribute;
text-align-last: left;
hyphens: auto;
-webkit-hyphens: auto;
word-spacing: -0.05em;


overflow: hidden;
display: -webkit-box;
// -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    
    text-align: left
`



const Button = styled.a`
width: fit-content;
display: flex;
text-align: center;
justify-content: left;
padding: 10px 20px; /* Adjust padding as needed */
font-size: 16px; /* Adjust font size as needed */
font-weight: bold;
box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.4);
text-decoration: none;
color: black;
background-color: FloralWhite;
// border: none;
border:3px solid black;
  // border-radius: 10px 40px 40px 10px;
border-radius: 20px;
cursor: pointer;
transition: all 0.5s ease-in-out;
}

&:hover {

transform: translateY(-1px);
      box-shadow: 0 0 2px 3px rgba(0,0,0,0.4);
      // filter: brightness(1.1);
}
`;
const ProjectHeader = styled.div`
    display: flex;
    // justify-content: space-between;
    align-items: center;
`;

const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            color: "black",
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.image} />
                    <ProjectHeader>
                    <Title>{project?.title}</Title>
                    <ButtonGroup>
                        <Button dull href={project?.github} target='new'>View Code</Button>
                        <Button href={project?.webapp} target='new'>View Live</Button>
                    </ButtonGroup>
                    </ProjectHeader>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{Array.isArray(project.description) && project.description.map((item, index) => (
             <Li key={index}><li>{item}</li></Li>
              ))}</Desc>
                   
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index