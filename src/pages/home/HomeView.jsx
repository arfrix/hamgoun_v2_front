import React from "react";
import HeaderBodyFooter from '../../layouts/HeaderBodyFooterLayout'
import HeroSection from "./blocks/HeroSection";

export default function HomeView() {
  return (
    <section>
      <HeaderBodyFooter>
        <HeroSection/>
      </HeaderBodyFooter>
    </section>
  );
}
