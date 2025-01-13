import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";


export default function Home() {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <Header />

      {/* Main Content */}
      <div className="ml-64 flex-1">
        <Hero />
        <About />
        {/* <Specialties/> */}
        <Portfolio/>
        {/* <DanceProfile/> */}
        <Contact />
      </div>
    </div>
  );
}
