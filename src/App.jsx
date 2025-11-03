import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DiscoverPreview from "./components/DiscoverPreview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <DiscoverPreview />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
