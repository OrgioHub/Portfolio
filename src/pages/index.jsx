import { AboutMe } from "@/components/AboutMe/AboutMe";
import { ContactsMe } from "@/components/ContactsMe/ContactsMe";
import { Experience } from "@/components/Experience/Experience";
import { Fooder } from "@/components/Fooder/Fooder";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { MobileTheme } from "@/components/MobileTheme/MobileTheme";
import { Skills } from "@/components/Skills/Skills";
import { Toggle } from "@/components/Toggle/Toggle";
import { Work } from "@/components/Work/Work";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  // const [isShow, setIsShow] = useState(false);

  const changecolor = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className="w-full flex justify-center items-center bg-white"
      dataTheme={isDark ? "dark" : "light"}
    >
      <div className="max-w-[1440px] h-auto md:px-[80px] md:py-[32px] relative">
        <Toggle handleCheck={changecolor} />
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        {/* <Experience /> */}
        {/* <Work /> */}
        <ContactsMe />
        <Fooder />
        {/* <MobileTheme /> */}
      </div>
    </div>
  );
}
