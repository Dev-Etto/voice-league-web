import styled from 'styled-components';
import { useTranslation, Trans } from 'react-i18next';
import { EXTERNAL_LINKS } from '../constants/links';

const StyledFooter = styled.footer`
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

export default function Footer() {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <ul className="links">
        <li>
          <a href={EXTERNAL_LINKS.GITHUB_REPO} target="_blank" rel="noopener noreferrer">
            {t('footer.links.github')}
          </a>
        </li>
        <li><a href="#support">{t('footer.links.support')}</a></li>
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
    </StyledFooter>
  );
}
