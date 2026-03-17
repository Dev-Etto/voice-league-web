import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ASSETS } from '../constants/assets';
import { EXTERNAL_LINKS } from '../constants/links';
import LanguageSwitcher from './LanguageSwitcher';

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

export default function Header() {
  const { t } = useTranslation();

  return (
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
  );
}
