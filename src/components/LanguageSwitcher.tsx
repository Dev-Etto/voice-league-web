import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SwitchContainer = styled.div`
  display: flex;
  gap: 8px;
  background: ${props => props.theme.colors.glassBg};
  padding: 4px;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
`;

const LangButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? props.theme.colors.accentBlue : 'transparent'};
  color: ${props => props.$active ? props.theme.colors.primaryBg : props.theme.colors.textDim};
  border: none;
  padding: 4px 12px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.$active ? props.theme.colors.primaryBg : props.theme.colors.white};
  }
`;

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language.split('-')[0];

  return (
    <SwitchContainer aria-label="Seleção de idioma">
      <LangButton 
        $active={currentLang === 'pt'} 
        onClick={() => changeLanguage('pt-BR')}
        title="Português"
      >
        PT
      </LangButton>
      <LangButton 
        $active={currentLang === 'en'} 
        onClick={() => changeLanguage('en')}
        title="English"
      >
        EN
      </LangButton>
    </SwitchContainer>
  );
}
