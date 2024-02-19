import styled from 'styled-components';
import _default from '../../themes/default';


export const Container = styled.div`
    background: FloralWhite;
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;
    z-index: 1;
    // align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
padding: 0 30px;
  font-size: 80px;
  display: flex;
  justify-content: start; /* Removed align-items */
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



export const CardContainer = styled.div`
    padding: 0 30px;
    display: flex;
    justify-content: start;
    gap: 28px;
    display: grid;
`;
