import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button } from './BaseComponents';
import { ASSETS } from '../constants/assets';
import { EXTERNAL_LINKS } from '../constants/links';

const HeroSection = styled.header`
  position: relative;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to bottom, rgba(20, 20, 40, 0.2), ${props => props.theme.colors.primaryBg}), url(${ASSETS.HERO_BANNER});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent 20%, ${props => props.theme.colors.primaryBg} 95%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 10%;

  h1 {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 900;
    margin-bottom: 1rem;
    line-height: 1.1;
    background: linear-gradient(to right, ${props => props.theme.colors.white}, ${props => props.theme.colors.accentBlue});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 20px ${props => props.theme.colors.accentGlow});
    white-space: pre-line;
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textDim};
    max-width: 650px;
    margin: 0 auto 3rem;
  }
`;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <HeroSection id="hero">
      <HeroContent>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
        <Button 
          primary 
          href={EXTERNAL_LINKS.BOT_INVITE} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t('hero.cta')}
        </Button>
      </HeroContent>
    </HeroSection>
  );
}
