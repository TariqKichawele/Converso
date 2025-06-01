export const dynamic = "force-dynamic";

import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import Hero from "@/components/Hero";
import About from "@/components/About";
import React from "react";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";
import Footer from "@/components/Footer";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessions = await getRecentSessions(10);

  return (
    <>
      <Hero />
      <About />
      
      <main>
        <h1 className='text-4xl font-bold text-center'>Popular Companions</h1>

        <section className="home-section">
          {
            companions.map((companion) => (
              <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)}/>
            ))
          }
        </section>

        <section className="home-section">
          <CompanionsList 
            title="Recently Completed Sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;