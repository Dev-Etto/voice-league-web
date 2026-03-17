import styled from 'styled-components';
import { useTranslation, Trans } from 'react-i18next';
import { Container, Section, Title } from './BaseComponents';

const HowItWorksSection = styled(Section)`
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

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.white};
    
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

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <HowItWorksSection id="how">
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
    </HowItWorksSection>
  );
}
