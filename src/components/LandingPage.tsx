import styled from 'styled-components';

import { useTranslation, Trans } from 'react-i18next';
import { theme } from '../styles/theme';

import { Container, Section, Title, Button } from './BaseComponents';
import { ASSETS } from '../constants/assets';
import { EXTERNAL_LINKS } from '../constants/links';
import LanguageSwitcher from './LanguageSwitcher';


const AppContainer = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10%;
  background: rgba(10, 20, 40, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};

  @media (max-width: 1024px) {
    padding: 1.5rem 5%;
  }


  @media (max-width: 768px) {
    padding: 1rem 5%;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -1px;
  user-select: none;
  -webkit-user-drag: none;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.accentBlue};
    object-fit: cover;
    pointer-events: none;
    -webkit-user-drag: none;
  }
`;



const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }

  li a {
    text-decoration: none;
    color: ${props => props.theme.colors.textDim};
    transition: 0.3s;
    font-size: 0.95rem;

    &:hover {
      color: ${props => props.theme.colors.accentBlue};
    }
  }
`;


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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.glassBg};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  padding: 3.5rem 2rem;
  border-radius: 24px;
  transition: 0.4s;
  text-align: center;

  &:hover {
    border-color: ${props => props.theme.colors.accentBlue};
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  span {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: block;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: ${props => props.theme.colors.textDim};
  }
`;

const HowItWorks = styled(Section)`
  background: ${props => props.theme.colors.secondaryBg};
`;

const ConductContainer = styled.div`
  background: ${props => props.theme.colors.glassBg};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  padding: 3rem;
  border-radius: 32px;
  max-width: 800px;
  margin: 4rem auto 0;
  text-align: left;

  ul {
    list-style: none;
    margin-top: 1.5rem;
    display: grid;
    gap: 1rem;
  }

  li {
    display: flex;
    gap: 12px;
    color: ${props => props.theme.colors.textDim};
    font-size: 1.1rem;

    &::before {
      content: '✔';
      color: ${props => props.theme.colors.accentBlue};
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;


const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  max-width: 850px;
  margin: 0 auto;
`;

const StepItem = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.white};
    
    /* Highlight command titles */
    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background: ${props => props.theme.colors.accentBlue};
      margin-top: 0.5rem;
      border-radius: 2px;
    }
  }

  p {
    line-height: 1.6;
  }

  strong {
    color: ${props => props.theme.colors.accentBlue};
    font-weight: 700;
  }

  code {
    background: rgba(52, 152, 219, 0.2);
    color: ${props => props.theme.colors.accentBlue};
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    border: 1px solid rgba(52, 152, 219, 0.3);
  }
`;



const StepNumber = styled.div`
  min-width: 70px;
  height: 70px;
  background: ${props => props.theme.colors.accentBlue};
  color: ${props => props.theme.colors.primaryBg};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 900;
  font-size: 1.8rem;
  box-shadow: 0 0 30px ${props => props.theme.colors.accentGlow};
`;

const AntiGhostingNotice = styled.div`
  background: rgba(46, 204, 113, 0.05);
  border: 1px solid rgba(46, 204, 113, 0.3);
  color: ${props => props.theme.colors.textDim};
  padding: 1.2rem 2rem;
  border-radius: 16px;
  max-width: 850px;
  margin: 0 auto 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: left;

  strong {
    color: #2ecc71;
  }
`;

const SetupInfoBox = styled(AntiGhostingNotice)`
  background: linear-gradient(90deg, rgba(52, 152, 219, 0.1), rgba(52, 152, 219, 0.02));
  border-left: 4px solid ${props => props.theme.colors.accentBlue};
  border-right: 1px solid rgba(52, 152, 219, 0.2);
  border-top: 1px solid rgba(52, 152, 219, 0.2);
  border-bottom: 1px solid rgba(52, 152, 219, 0.2);
  margin-bottom: 2rem;

  strong {
    color: ${props => props.theme.colors.white};
  }
`;




const DonationBox = styled.div`
  background: linear-gradient(135deg, rgba(217, 119, 6, 0.1) 0%, rgba(10, 20, 40, 1) 100%);
  border: 1px solid ${props => props.theme.colors.gragasOrange};
  padding: 5rem 10%;
  border-radius: 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const DonationGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 3.5rem;
`;

const Footer = styled.footer`
  padding: 80px 10% 40px;
  border-top: 1px solid ${props => props.theme.colors.glassBorder};
  text-align: center;

  .links {
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    list-style: none;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 1.5rem;
    }

    li a {
      color: ${props => props.theme.colors.textDim};
      text-decoration: none;
      transition: 0.3s;
      &:hover { color: ${props => props.theme.colors.white}; }
    }
  }


  .copyright {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textDim};

    a {
      color: ${props => props.theme.colors.accentBlue};
      text-decoration: none;
      font-weight: 600;
      transition: 0.3s;

      &:hover {
        color: ${props => props.theme.colors.white};
      }
    }
  }

`;

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <AppContainer>
      <Nav>
        <Logo href="#hero">
          <img src={ASSETS.LOGO} alt="Voice League Logo" draggable="false" />
          <span>Voice League</span>
        </Logo>

        <NavActions>
          <NavLinks>
            <li><a href="#features">{t('nav.features')}</a></li>
            <li><a href="#how">{t('nav.how')}</a></li>
            <li><a href="#conduct">{t('nav.conduct')}</a></li>
            <li><a href="#support">{t('nav.support')}</a></li>
            <li>
              <a 
                href={EXTERNAL_LINKS.GITHUB_REPO} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('nav.github')}
              </a>
            </li>
          </NavLinks>


          <LanguageSwitcher />
        </NavActions>
      </Nav>

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


      <Container>
        <Section id="features">
          <Title>{t('features.title')}</Title>
          <FeaturesGrid>
            <FeatureCard>
              <span role="img" aria-hidden="true">🛡️</span>
              <h3>{t('features.items.monitoring.title')}</h3>
              <p>{t('features.items.monitoring.description')}</p>
            </FeatureCard>
            <FeatureCard>
              <span role="img" aria-hidden="true">🔊</span>
              <h3>{t('features.items.dynamic.title')}</h3>
              <p>{t('features.items.dynamic.description')}</p>
            </FeatureCard>
            <FeatureCard>
              <span role="img" aria-hidden="true">⚡</span>
              <h3>{t('features.items.autojoin.title')}</h3>
              <p>{t('features.items.autojoin.description')}</p>
            </FeatureCard>
          </FeaturesGrid>
        </Section>
      </Container>

      <HowItWorks id="how">
        <Container>
          <Title>{t('howItWorks.title')}</Title>
          
          <SetupInfoBox>
            <Trans i18nKey="howItWorks.setupOnce" />
            <br />
            <Trans i18nKey="howItWorks.discordNote" />
          </SetupInfoBox>

          <AntiGhostingNotice>
            <Trans i18nKey="howItWorks.antiGhosting" />
          </AntiGhostingNotice>

          <StepsContainer>
            <StepItem>
              <StepNumber aria-hidden="true">1</StepNumber>
              <div>
                <h3><code>{t('howItWorks.steps.step1.title')}</code></h3>
                <p>
                  <Trans 
                    i18nKey="howItWorks.steps.step1.description"
                    components={{ cmd: <strong /> }}
                  />
                </p>
              </div>
            </StepItem>
            <StepItem>
              <StepNumber aria-hidden="true">2</StepNumber>
              <div>
                <h3><code>{t('howItWorks.steps.step2.title')}</code></h3>
                <p>
                  <Trans 
                    i18nKey="howItWorks.steps.step2.description"
                    components={{ cmd: <strong /> }}
                  />
                </p>
              </div>
            </StepItem>

            <StepItem>
              <StepNumber aria-hidden="true">3</StepNumber>
              <div>
                <h3><code>{t('howItWorks.steps.step3.title')}</code></h3>
                <p>
                  <Trans 
                    i18nKey="howItWorks.steps.step3.description"
                    components={{ cmd: <strong /> }}
                  />
                </p>
              </div>
            </StepItem>

          </StepsContainer>
        </Container>
      </HowItWorks>



      <Section id="conduct">
        <Container>
          <Title>{t('conduct.title')}</Title>
          <ConductContainer>
            <ul>
              {(t('conduct.rules', { returnObjects: true }) as string[]).map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </ConductContainer>
        </Container>
      </Section>

      <Section id="support">

        <Container>
          <DonationBox>
            <Title>{t('support.title')}</Title>
            <p style={{ color: theme.colors.textDim, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              {t('support.description')}
            </p>
            <DonationGrid>
              <Button href={EXTERNAL_LINKS.BUY_ME_A_COFFEE} target="_blank" rel="noopener noreferrer">
                {t('support.buttons.coffee')}
              </Button>
              <Button href={EXTERNAL_LINKS.GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                {t('support.buttons.contribute')}
              </Button>
            </DonationGrid>

            <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: theme.colors.textDim }}>
              {t('support.footerNote')}
            </p>
          </DonationBox>
        </Container>
      </Section>

      <Footer>
        <ul className="links">
          <li>
            <a href={EXTERNAL_LINKS.GITHUB_REPO} target="_blank" rel="noopener noreferrer">
              {t('footer.links.github')}
            </a>
          </li>
          <li><a href="#conduct">{t('footer.links.support')}</a></li>
          <li><a href="#">{t('footer.links.privacy')}</a></li>
        </ul>
        <div className="copyright">
          <Trans 
            i18nKey="footer.copyright"
            components={{
              linkAutor: (
                <a 
                  href={EXTERNAL_LINKS.GITHUB_OWNER} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                />
              )
            }}
          />
          <br />
          {t('footer.subCopyright')}
        </div>

      </Footer>


    </AppContainer>
  );
}
