
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  );
}
