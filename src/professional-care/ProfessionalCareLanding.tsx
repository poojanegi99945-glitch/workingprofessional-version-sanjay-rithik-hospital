import { useState, type ReactNode } from "react";
import { ArrowRight, CalendarDays, GraduationCap, MapPin, ShieldCheck, Star } from "lucide-react";

import { VersionA } from "@/comparison/a/Page";
import type { AgeJourneySelection } from "@/comparison/a/components/skin/AgeJourney";
import { VersionB } from "@/comparison/b/Page";

import logo from "@/assets/hospital-logo.png";
import heroImage from "@/assets/professional-care/professional-hero.png";
import concernImage from "@/assets/professional-care/student-skin-concern.png";
import hairImage from "@/assets/professional-care/hair-scalp-consult.png";
import planningImage from "@/assets/professional-care/treatment-planning.png";

const pageOrder = [
  "navigation",
  "hero",
  "trust",
  "professional-audience",
  "dermatology-care",
  "assessment",
  "treatments",
  "services",
  "medical",
  "doctor",
  "video",
  "treatments-before-age",
  "age",
  "testimonials",
  "before-after",
  "questions",
  "proof",
  "close",
  "consultation",
  "footer",
] as const;

const services = [
  {
    title: "Chemical Peel",
    image: concernImage,
    concerns: "Acne, acne marks and skin glow",
    rhythm: "Monthly once",
    sessions: "Around 4 sittings",
  },
  {
    title: "Excimer Laser",
    image: planningImage,
    concerns: "White patches and vitiligo care discussion",
    rhythm: "Weekly once",
    sessions: "Doctor-advised course",
  },
  {
    title: "Botox / Fillers",
    image: planningImage,
    concerns: "Wrinkles, facial balance and ageing concerns",
    rhythm: "Consultation-led",
    sessions: "Planned by doctor",
  },
  {
    title: "HIFU",
    image: planningImage,
    concerns: "Facial lifting and skin tightening",
    rhythm: "Once in 2 months",
    sessions: "Around 3 sittings",
  },
  {
    title: "Cryotherapy / LLLT",
    image: planningImage,
    concerns: "Warts and focused lesion care",
    rhythm: "Weekly once",
    sessions: "6-8 sittings",
  },
  {
    title: "Low Level Laser Therapy",
    image: hairImage,
    concerns: "Hair growth support and scalp wellness",
    rhythm: "Weekly once",
    sessions: "10-15 sittings",
  },
  {
    title: "Microneedle RF",
    image: concernImage,
    concerns: "Acne scars, stretch marks and texture",
    rhythm: "Monthly once",
    sessions: "4-5 sittings",
  },
  {
    title: "IPL",
    image: concernImage,
    concerns: "Vascular marks, redness and dark spots",
    rhythm: "Monthly once",
    sessions: "8-10 sittings",
  },
  {
    title: "Hydra Facial",
    image: planningImage,
    concerns: "Event glow, freshness and hydration",
    rhythm: "Monthly once",
    sessions: "4-6 sittings",
  },
  {
    title: "Mesotherapy + PRP",
    image: planningImage,
    concerns: "Ageing concerns and skin quality",
    rhythm: "Monthly once",
    sessions: "4-5 sittings",
  },
  {
    title: "CO2 Fractional Laser",
    image: concernImage,
    concerns: "Scars, resurfacing and texture",
    rhythm: "Monthly once",
    sessions: "4-6 sittings",
  },
  {
    title: "PRP + GFC",
    image: hairImage,
    concerns: "Hair fall and scalp care",
    rhythm: "Monthly once",
    sessions: "4-6 sittings",
  },
  {
    title: "Carbon Peel",
    image: concernImage,
    concerns: "Hyperpigmentation, glow and open pores",
    rhythm: "Monthly once",
    sessions: "3-4 sittings",
  },
  {
    title: "Q-Switched ND:YAG Laser",
    image: planningImage,
    concerns: "Pigment concerns and mark review",
    rhythm: "Monthly once",
    sessions: "6-8 sittings",
  },
] as const;

function ProfessionalHero() {
  return (
    <section id="pc-top" className="pc-v2-hero">
      <header className="pc-v2-nav">
        <a href="#pc-top" className="pc-v2-brand">
          <img src={logo} alt="" />
          <span>
            <strong>Sanjay Rithik Hospital</strong>
            <small>Skin care · Karur</small>
          </span>
        </a>
        <div className="pc-v2-nav-meta">
          <span><MapPin /> Local clinic · Karur</span>
          <span><Star /> 4.5 · 440 Google reviews</span>
        </div>
        <a href="#b-consultation" className="pc-v2-nav-cta">Book Consultation <ArrowRight /></a>
      </header>
      <div className="pc-v2-hero-grid">
        <div className="pc-v2-hero-copy">
          <p>For professionals, teachers and students</p>
          <h1>Skin and hair care planned around real schedules.</h1>
          <span>
            Dermatologist-led help for acne, pigmentation, hair fall, scars, open pores,
            dullness and glow goals without guessing the procedure first.
          </span>
          <div className="pc-v2-hero-actions">
            <a href="#b-skin-check">Start Skin Check <ArrowRight /></a>
            <a href="#pc-services">Explore Services</a>
          </div>
          <div className="pc-v2-hero-pills">
            <span><ShieldCheck /> Consultation first</span>
            <span><CalendarDays /> Weekly/monthly planning</span>
            <span><GraduationCap /> Work, class and exams friendly</span>
          </div>
        </div>
        <figure className="pc-v2-hero-image">
          <img src={heroImage} alt="Dermatologist consultation for a working professional" />
          <figcaption>
            <strong>Doctor-guided care</strong>
            <span>Concern, skin type and available recovery time are discussed before treatment.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function ProfessionalAudience() {
  return (
    <section className="pc-v1-audience">
      <div>
        <p className="eyebrow text-clay">Designed around your day</p>
        <h2>Designed for working professionals, teachers and students.</h2>
        <span>
          A consultation-led experience for people managing office hours, classroom routines,
          college schedules, exams, interviews and events.
        </span>
      </div>
      <div className="pc-v1-audience-grid">
        {[
          ["Working professionals", "Screen-heavy days, meetings, travel, stress-triggered acne and tired-looking skin."],
          ["Teachers", "Sun exposure, long classroom hours, pigmentation, melasma and practical recovery timing."],
          ["Students", "Acne, marks, oily skin, dandruff-related hair fall and confidence before interviews."],
        ].map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DermatologyCare() {
  const cards = [
    ["Acne, marks and pigmentation", "Everyday visible concerns that affect college, work and teaching confidence."],
    ["Hair fall and scalp concerns", "Review-led support for shedding, thinning, dandruff-linked worry and scalp changes."],
    ["Glow, scars and ageing concerns", "Procedure options explained by suitability, recovery, cost and expected maintenance."],
  ] as const;

  return (
    <section className="pc-v2-derm-care section-shell bg-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <figure>
          <img src={concernImage} alt="Student checking acne marks before a busy day" loading="lazy" />
        </figure>
        <div>
          <p className="eyebrow text-clay">Dermatology care</p>
          <h2>Care that begins with the concern, not a procedure.</h2>
          <span>
            From everyday skin conditions to cosmetic dermatology, the right next step depends
            on your skin, medical history, routine and priorities.
          </span>
          <div className="pc-v2-derm-cards">
            {cards.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfessionalServices() {
  return (
    <section id="pc-services" className="pc-v1-services section-shell bg-sand">
      <div className="mx-auto w-full max-w-6xl">
        <div className="pc-v1-service-head">
          <p className="eyebrow text-clay">Explore our services</p>
          <h2>Dermatology and laser services planned around your routine.</h2>
          <span>
            Each service begins with a doctor-led discussion about your concern, skin type,
            available recovery time and the number of sessions that may be suitable.
          </span>
        </div>
        <div className="pc-v1-service-grid">
          {services.map((service) => (
            <article key={service.title}>
              <img src={service.image} alt={service.title} loading="lazy" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.concerns}</p>
                <dl>
                  <div>
                    <dt>Frequency</dt>
                    <dd>{service.rhythm}</dd>
                  </div>
                  <div>
                    <dt>Sessions</dt>
                    <dd>{service.sessions}</dd>
                  </div>
                </dl>
                <a href="#b-consultation">
                  Discuss suitability <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfessionalSections({ a, b }: { a: Record<string, ReactNode>; b: Record<string, ReactNode> }) {
  const sections: Record<string, ReactNode> = {
    ...a,
    navigation: null,
    hero: <ProfessionalHero />,
    trust: b["trust"] ?? a["trust"],
    "dermatology-care": <DermatologyCare />,
    assessment: b["assessment"] ?? a["assessment"],
    treatments: b["treatments"] ?? a["treatments"],
    services: <ProfessionalServices />,
    medical: b["medical"],
    video: b["video"] ?? a["video"],
    testimonials: b["testimonials"] ?? a["testimonials"],
    questions: b["questions"] ?? a["questions"],
    proof: b["proof"] ?? a["proof"],
    close: b["close"] ?? a["close"],
    consultation: b["consultation"] ?? a["consultation"],
    footer: b["footer"] ?? a["footer"],
    sticky: b["sticky"],
    "professional-audience": <ProfessionalAudience />,
  };

  return (
    <div className="enhanced-site pc-v1-page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      {a["schema"]}
      {b["schema"]}
      {b["progress"]}
      <main id="main-content">
        {pageOrder.map((key) => sections[key] ? (
          <div key={key} className="pc-v1-section" data-section={key}>
            {sections[key]}
          </div>
        ) : null)}
      </main>
      {sections["sticky"]}
    </div>
  );
}

export function ProfessionalCareLanding() {
  const [ageSelection, setAgeSelection] = useState<AgeJourneySelection>();

  return (
    <VersionA
      onAgeSelection={setAgeSelection}
      render={(a) => (
        <VersionB
          sharedAgeSelection={ageSelection}
          render={(b) => <ProfessionalSections a={a} b={b} />}
        />
      )}
    />
  );
}
