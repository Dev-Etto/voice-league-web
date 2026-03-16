import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10%;
  
  @media (max-width: 768px) {
    padding: 0 5%;
  }
`;

export const Section = styled.section`
  padding: 100px 0;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${props => props.theme.colors.accentBlue};
    border-radius: 2px;
  }
`;

export const Button = styled.a<{ primary?: boolean }>`
  background: ${props => props.primary ? props.theme.colors.gragasOrange : props.theme.colors.glassBg};
  color: white;
  padding: ${props => props.primary ? '1rem 2.5rem' : '0.8rem 1.8rem'};
  border: ${props => props.primary ? 'none' : `1px solid ${props.theme.colors.glassBorder}`};
  border-radius: ${props => props.primary ? '50px' : '12px'};
  text-decoration: none;
  font-weight: 700;
  text-transform: ${props => props.primary ? 'uppercase' : 'none'};
  letter-spacing: ${props => props.primary ? '1px' : '0'};
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: ${props => props.primary ? `0 10px 40px ${props.theme.colors.gragasGlow}` : 'none'};
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: translateY(-5px);
    background: ${props => props.primary ? props.theme.colors.gragasOrange : 'rgba(255, 255, 255, 0.1)'};
    border-color: ${props => props.primary ? 'transparent' : '#fff'};
    box-shadow: ${props => props.primary ? `0 20px 60px ${props.theme.colors.gragasGlow}` : 'none'};
  }
`;
