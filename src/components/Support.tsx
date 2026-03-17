import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section, Title, Button } from './BaseComponents';
import { EXTERNAL_LINKS } from '../constants/links';
import { theme } from '../styles/theme';

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

export default function Support() {
  const { t } = useTranslation();

  return (
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
  );
}
