'use client'

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Footer from "@/components/footer";
import Tech from "@/components/tech";
import { useRef } from "react";


export default function Home() {

  const mainRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const scrollToMain = () => {
    mainRef.current?.scrollIntoView({
      behavior: 'smooth'});
  }
  const scrollToSkill = () => {
    skillRef.current?.scrollIntoView({
      behavior: 'smooth'});
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth'});
  }


  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar
        onScrollToSkill={scrollToSkill}
        onScrollToContact={scrollToContact}
        onScrollToMain={scrollToMain}
      />
      <Hero onScrollClick={scrollToMain}/>
      <div ref={skillRef} >
      <Tech />
      </div>
      <div ref={mainRef}>
      <Main />
      </div>
      <div ref={contactRef}>
      <Footer />
      </div>
    </div>
  );
}
