import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";

import acneImage from "@/assets/luxury-glow/service-acne-breakouts.png";
import antiAgingImage from "@/assets/luxury-glow/service-anti-aging-firmness.png";
import hairImage from "@/assets/luxury-glow/hair-scalp-consultation.png";
import pigmentationImage from "@/assets/luxury-glow/service-pigmentation.png";
import scarsImage from "@/assets/luxury-glow/service-scars-texture.png";
import sensitiveImage from "@/assets/luxury-glow/service-sensitive-skin.png";
import glowImage from "@/assets/luxury-glow/service-tired-dull.png";
import roomImage from "@/assets/luxury-glow/header-treatment-room-teal.png";
import logo from "@/assets/hospital-logo.png";

const audiences = [
  {
    icon: BriefcaseBusiness,
    title: "Working professionals",
    text: "For screen-heavy days, meetings, travel, stress-related breakouts, pigmentation and tired-looking skin.",
  },
  {
    icon: BookOpen,
    title: "Teachers",
    text: "For long classroom hours, daily sun exposure, melasma, dullness, hair fall and practical recovery expectations.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    text: "For acne, acne marks, oily skin, dandruff-related hair fall and confidence before college or interviews.",
  },
] as const;

const concerns = [
  "Acne and acne marks",
  "Pigmentation and uneven tone",
  "Open pores and dullness",
  "Hair fall and scalp concerns",
  "Acne scars and stretch marks",
  "Fine lines and anti-ageing goals",
  "Skin glow before events",
  "White patches or vascular marks",
] as const;

const services = [
  {
    title: "Chemical Peeling",
    image: acneImage,
    concerns: ["Acne", "Acne marks", "Skin glow"],
    rhythm: "Monthly once",
    sessions: "Around 4 sittings",
  },
  {
    title: "Excimer Laser",
    image: sensitiveImage,
    concerns: ["White patches", "Vitiligo discussion"],
    rhythm: "Weekly once",
    sessions: "As advised after review",
  },
  {
    title: "Botox / Fillers",
    image: antiAgingImage,
    concerns: ["Wrinkles", "Facial balance", "Anti-ageing"],
    rhythm: "Consultation-led",
    sessions: "Planned by doctor",
  },
  {
    title: "HIFU",
    image: antiAgingImage,
    concerns: ["Face lifting", "Skin tightening"],
    rhythm: "Once in 2 months",
    sessions: "Around 3 sittings",
  },
  {
    title: "Cryotherapy / LLLT",
    image: roomImage,
    concerns: ["Warts", "Targeted lesions"],
    rhythm: "Weekly once",
    sessions: "6-8 sittings",
  },
  {
    title: "Low Level Laser Therapy",
    image: hairImage,
    concerns: ["Hair growth support", "Scalp wellness"],
    rhythm: "Weekly once",
    sessions: "10-15 sittings",
  },
  {
    title: "Microneedle RF",
    image: scarsImage,
    concerns: ["Acne scars", "Stretch marks", "Skin texture"],
    rhythm: "Monthly once",
    sessions: "4-5 sittings",
  },
  {
    title: "IPL",
    image: pigmentationImage,
    concerns: ["Vascular marks", "Redness", "Dark spots"],
    rhythm: "Monthly once",
    sessions: "8-10 sittings",
  },
  {
    title: "Hydra Facial",
    image: glowImage,
    concerns: ["Party facial", "Freshness", "Event glow"],
    rhythm: "Monthly once",
    sessions: "4-6 sittings",
  },
  {
    title: "Mesomen + PRP",
    image: antiAgingImage,
    concerns: ["Anti-ageing", "Skin quality"],
    rhythm: "Monthly once",
    sessions: "4-5 sittings",
  },
  {
    title: "CO2 Fractional Laser",
    image: scarsImage,
    concerns: ["Scars", "Skin resurfacing", "Texture"],
    rhythm: "Monthly once",
    sessions: "4-6 sittings",
  },
  {
    title: "PRP + GFC",
    image: hairImage,
    concerns: ["Hair fall", "Scalp care"],
    rhythm: "Monthly once",
    sessions: "4-6 sittings",
  },
  {
    title: "Carbon Peel",
    image: pigmentationImage,
    concerns: ["Hyperpigmentation", "Skin glow", "Open pores"],
    rhythm: "Monthly once",
    sessions: "3-4 sittings",
  },
  {
    title: "Q-Switched ND:YAG Laser",
    image: roomImage,
    concerns: ["Pigment concerns", "Tattoo/mark review"],
    rhythm: "Monthly once",
    sessions: "6-8 sittings",
  },
] as const;

function Section({
  id,
  eyebrow,
  title,
  text,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  text?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="pc-section">
      <div className="pc-shell">
        {title && (
          <header className="pc-section-head">
            {eyebrow && <p>{eyebrow}</p>}
            <h2>{title}</h2>
            {text && <span>{text}</span>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function ProfessionalCareLanding() {
  return (
    <main className="pc-page">
      <header className="pc-nav">
        <a href="#pc-top" className="pc-brand" aria-label="Sanjay Rithik Hospital home">
          <img src={logo} alt="" />
          <span>
            <strong>Sanjay Rithik Hospital</strong>
            <small>Skin care · Karur</small>
          </span>
        </a>
        <nav aria-label="Professional care navigation">
          <a href="#pc-concerns">Concerns</a>
          <a href="#pc-services">Services</a>
          <a href="#pc-plan">Plan</a>
        </nav>
        <a href="#pc-consultation" className="pc-nav-cta">
          Book Consultation <ArrowRight />
        </a>
      </header>

      <section id="pc-top" className="pc-hero">
        <div className="pc-shell pc-hero-grid">
          <div className="pc-hero-copy">
            <p>For professionals, teachers and students</p>
            <h1>Clear skin and hair care that fits a busy weekday.</h1>
            <span>
              Dermatologist-led planning for acne, pigmentation, hair fall, open pores, scars,
              dullness and anti-ageing concerns at Sanjay Rithik Hospital, Karur.
            </span>
            <div className="pc-actions">
              <a href="#pc-consultation">Start With Consultation <ArrowRight /></a>
              <a href="#pc-services">Explore Services</a>
            </div>
            <div className="pc-trust-strip">
              <span><ShieldCheck /> Doctor-led care</span>
              <span><MapPin /> Karur clinic</span>
              <span><CalendarDays /> Session planning</span>
            </div>
          </div>
          <figure className="pc-hero-visual">
            <img src={roomImage} alt="Premium dermatology treatment room" />
            <figcaption>
              <strong>Consultation-first care</strong>
              <span>No treatment is chosen before your concern, skin type and schedule are discussed.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <Section id="pc-audience" eyebrow="Designed around your day" title="Different routines. Similar skin and hair stress.">
        <div className="pc-audience-grid">
          {audiences.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="pc-concerns"
        eyebrow="Start with symptoms"
        title="Tell us what you notice first."
        text="You do not need to know the treatment name. Start with the visible change or discomfort."
      >
        <div className="pc-concern-list">
          {concerns.map((item) => (
            <span key={item}><CheckCircle2 /> {item}</span>
          ))}
        </div>
      </Section>

      <Section
        id="pc-services"
        eyebrow="Service menu"
        title="Treatment options from your list, organised for clarity."
        text="Session counts are educational planning ranges. Final suitability and frequency are confirmed only after consultation."
      >
        <div className="pc-service-grid">
          {services.map((service) => (
            <article key={service.title} className="pc-service-card">
              <img src={service.image} alt={service.title} loading="lazy" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.concerns.join(" · ")}</p>
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
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="pc-plan" eyebrow="Simple patient journey" title="A practical pathway for weekdays, classes and exams.">
        <div className="pc-plan">
          {["Share your concern", "Doctor assessment", "Choose suitable service", "Plan sessions around your schedule"].map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </Section>

      <section id="pc-consultation" className="pc-consultation">
        <div className="pc-shell">
          <div>
            <p>Book a consultation</p>
            <h2>Let the clinic help you choose the right next step.</h2>
            <span>
              This page is educational. A consultation request does not confirm treatment or pricing.
            </span>
          </div>
          <a href="tel:+918903009723">
            Call Sanjay Rithik Hospital <ArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}
