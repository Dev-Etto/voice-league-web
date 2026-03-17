import styled from 'styled-components';

import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Conduct from './Conduct';
import Support from './Support';
import Footer from './Footer';

const AppContainer = styled.div`
  position: relative;
`;

export default function LandingPage() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Conduct />
      <Support />
      <Footer />
    </AppContainer>
  );
}
