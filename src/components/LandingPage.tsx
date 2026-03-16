import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Container, Section, Title, Button } from './BaseComponents';

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

  @media (max-width: 768px) {
    padding: 1rem 5%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -1px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.accentBlue};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }

  a {
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
  background-image: linear-gradient(to bottom, rgba(10, 20, 40, 0.2), ${props => props.theme.colors.primaryBg}), url('/assets/banner.png');
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
    background: linear-gradient(to right, #fff, ${props => props.theme.colors.accentBlue});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 20px ${props => props.theme.colors.accentGlow});
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

    a {
      color: ${props => props.theme.colors.textDim};
      text-decoration: none;
      transition: 0.3s;
      &:hover { color: #fff; }
    }
  }

  .copyright {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textDim};
  }
`;

export default function LandingPage() {
  return (
    <AppContainer>
      <Nav>
        <Logo>
          <img src="/assets/logo.png" alt="VoiceLeague Logo" />
          <span>VoiceLeague</span>
        </Logo>
        <NavLinks>
          <a href="#features">Funcionalidades</a>
          <a href="#how">Como Usar</a>
          <a href="#support">Apoiar</a>
          <a href="https://github.com/Dev-Etto/VoiceLeague" target="_blank">GitHub</a>
        </NavLinks>
      </Nav>

      <HeroSection>
        <HeroContent>
          <h1>Sua Call de SoloQ <br />Automática</h1>
          <p>O VoiceLeague detecta suas partidas de League of Legends e cria canais de voz temporários instantaneamente para seu time.</p>
          <Button primary href="https://discord.com" target="_blank">Convidar para o Servidor</Button>
        </HeroContent>
      </HeroSection>

      <Container>
        <Section id="features">
          <Title>Pelo que o Barril Passa?</Title>
          <FeaturesGrid>
            <FeatureCard>
              <span>🛡️</span>
              <h3>Monitoramento Ativo</h3>
              <p>Usa a API da Riot Games para detectar em tempo real quando você entra no Rift.</p>
            </FeatureCard>
            <FeatureCard>
              <span>🔊</span>
              <h3>Canais Dinâmicos</h3>
              <p>Criação automática de salas de voz exclusivas que se auto-destroem após a partida.</p>
            </FeatureCard>
            <FeatureCard>
              <span>⚡</span>
              <h3>Auto-Join</h3>
              <p>Move você e seu duo/time automaticamente para o canal certo, sem cliques extras.</p>
            </FeatureCard>
          </FeaturesGrid>
        </Section>
      </Container>

      <HowItWorks id="how">
        <Container>
          <Title>Como Começar a Farra</Title>
          <StepsContainer>
            <StepItem>
              <StepNumber>1</StepNumber>
              <div>
                <h3>Vincule sua conta</h3>
                <p>Use o comando <code>/register</code> com seu Riot ID (Ex: Faker#KR1).</p>
              </div>
            </StepItem>
            <StepItem>
              <StepNumber>2</StepNumber>
              <div>
                <h3>Ative o Monitoramento</h3>
                <p>Habilite o <code>/autojoin</code> para que o bot cuide de tudo por você.</p>
              </div>
            </StepItem>
            <StepItem>
              <StepNumber>3</StepNumber>
              <div>
                <h3>Entre na Partida</h3>
                <p>Assim que o jogo carregar, seu canal estará pronto te esperando.</p>
              </div>
            </StepItem>
          </StepsContainer>
        </Container>
      </HowItWorks>

      <Section id="support">
        <Container>
          <DonationBox>
            <Title>Pague uma Rodada pro Gragas</Title>
            <p style={{ color: theme.colors.textDim, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              O VoiceLeague é um projeto open source. Suas doações mantêm os servidores ligados e a API da Riot rodando em alto nível.
            </p>
            <DonationGrid>
              <Button href="#" target="_blank">☕ Buy Me a Coffee</Button>
              <Button href="#" target="_blank">🛡️ GitHub Sponsors</Button>
              <Button href="https://github.com/Dev-Etto/VoiceLeague" target="_blank">💻 Contribuir no Código</Button>
            </DonationGrid>
            <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: theme.colors.textDim }}>
              Todo valor arrecadado é reinvestido integralmente em infraestrutura.
            </p>
          </DonationBox>
        </Container>
      </Section>

      <Footer>
        <div className="links">
          <a href="https://github.com/Dev-Etto/VoiceLeague">GitHub</a>
          <a href="#">Suporte</a>
          <a href="#">Privacidade</a>
        </div>
        <div className="copyright">
          &copy; 2024 VoiceLeague por Dev-Etto. Inspirado em League of Legends. <br />
          Não afiliado com a Riot Games.
        </div>
      </Footer>
    </AppContainer>
  );
}
