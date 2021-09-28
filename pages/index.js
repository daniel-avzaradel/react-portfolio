import Layout from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import SectionGrid from "../layout/SectionGrid";

export default function Home() {
  return (
    <Layout>
      <SectionGrid>
        <Hero />
        <BgAnimation />
      </SectionGrid>
    </Layout>
  );
}
