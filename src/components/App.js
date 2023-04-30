import {
  AboutSection,
  BlogsSection,
  CasesSection,
  HeroSection,
  Layout,
  TeamSection,
  ContactSection,
} from 'components';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CasesSection />
      <BlogsSection />
      <TeamSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
