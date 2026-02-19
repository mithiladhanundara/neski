import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Analytics from "@/components/Analytics";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Features />
      <Analytics />
      <Pricing />
      <Footer />
    </main>
  );
}
