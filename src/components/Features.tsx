import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section, Title } from './BaseComponents';

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

export default function Features() {
  const { t } = useTranslation();

  return (
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
  );
}
