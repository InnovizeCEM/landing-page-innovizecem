import Footer from "@/components/Footer";
import About from "../../container/About Us/About";
import Hero from "../../container/Hero/Hero";
import Solution from "../../container/Solution Us/Solution";
import Contact from "../../container/contact/Contact";
import Portfolio from "../../container/portfolio/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <div>
        <Hero/>
        <About/>
        <Solution/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
      <div className="w-full h-[5vh] bg-blue-950 text-white text-center pt-1">
        <p>&copy; 2024 Innovizecem</p>
      </div>
    </>
  );
}
