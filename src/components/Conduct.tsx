import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section, Title } from './BaseComponents';

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

export default function Conduct() {
  const { t } = useTranslation();

  return (
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
  );
}
