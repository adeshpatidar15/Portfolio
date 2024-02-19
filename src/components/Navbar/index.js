import React from 'react'
import { Nav, Button, Title, ResumeButton, GitHubButton, ButtonContainer,} from './NavbarStyledComponent'
import { Bio } from '../../data/constants';

const Navbar = () => {
  return (
    <Nav>
        <Title>Adesh Patidar</Title>
        
        <ButtonContainer>
          <ResumeButton href={Bio.resume} target="_blank">Resume</ResumeButton>
        </ButtonContainer>
        <Button>
          <GitHubButton href={Bio.github} target="_blank">Github</GitHubButton>
        </Button>
    </Nav>
  )
}

export default Navbar