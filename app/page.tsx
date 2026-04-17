'use client';

import Image from "next/image";
import {
   Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  PlayCircle,
  Award,
  Video,
  Camera,
  HeartHandshake,
  Clapperboard,
  Users,
  Megaphone,
  Briefcase,
  Eye,
  TrendingUp,
  Sparkles,
  Download,
} from "lucide-react";

 

// Shared UI Components
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl animate-fade-up">{children}</div>
    </section>
  );
}

function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      {subtitle && (
        <p className="mb-3 text-sm font-bold uppercase tracking-widest gradient-text">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {children}
      </h2>
    </div>
  );
}

function Placeholder({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-muted transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
      <div className="relative flex flex-col items-center p-6 text-center">
        <Camera className="mb-3 h-8 w-8 text-muted-foreground/50 transition-transform duration-500 group-hover:scale-110" />
        <span className="text-sm font-medium text-muted-foreground/80">{text}</span>
      </div>
    </div>
  );
}

function Navbar() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#featured-work" },
    { label: "Initiatives", href: "#initiatives" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="nav-glass mx-auto max-w-6xl rounded-full border border-white/55 px-3 py-3 md:px-5">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#"
            className="shrink-0 text-xl font-black tracking-tight text-foreground md:text-2xl"
          >
            Baraa
          </a>

          <nav className="hidden min-w-0 flex-1 justify-center md:flex">
            <div className="flex items-center gap-1 rounded-full bg-white/45 px-2 py-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-white/80 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <a
            href="mailto:baraama993@gmail.com"
            className="btn-primary inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white md:px-5"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Email Contact</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>

        <nav className="mt-3 overflow-x-auto md:hidden">
          <div className="flex min-w-max items-center gap-2 pb-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-accent/20 hover:bg-white hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

const portfolioSection = {
  title: "Featured Portfolio",
  subtitle:
    "Selected works across humanitarian storytelling, awareness content, travel documentation, and promotional media.",
  items: [
    {
      title: "Taxi of Goodness",
      coverImage: "/works/work6.jpg",
      url: "https://www.instagram.com/baraa_malaika/reel/DM_D-o1MBvQ/",
      shortDescription:
        "A humanitarian reel series centered around finding struggling taxi drivers, documenting their stories with empathy, and offering direct support.",
    },
    {
      title: "Social Awareness Series",
      coverImage: "/works/work4.jpg",
      url: "https://www.instagram.com/baraa_malaika/reel/DMnnV8ARuKg/",
      shortDescription:
        "A series of awareness-focused videos addressing public responsibility, cleanliness, traffic respect, cooperation, and everyday civic values.",
    },
    {
      title: "Journey Through Egypt",
      coverImage: "/works/work3.jpg",
      url: "https://www.instagram.com/baraa_malaika/reel/DWbht8zEQ2Q/",
      shortDescription:
        "A travel storytelling project exploring Egypt through scenic content, vlog-style moments, and humanitarian activities created in collaboration with a charitable organization.",
    },
    {
      title: "On the Road",
      coverImage: "/works/work8.png",
      url: "https://www.instagram.com/baraa_malaika/reel/DPzFGb2kcEW/",
      shortDescription:
        "A Ramadan humanitarian series focused on supporting vulnerable families through food baskets, iftar support, and direct community outreach.",
    },
    {
      title: "Goodness Continues",
      coverImage: "/works/work.jpg",
      url: "https://www.facebook.com/profile.php?id=100002298332862",
      shortDescription:
        "A continuation of charitable work beyond Ramadan, emphasizing sustainable giving and year-round humanitarian responsibility.",
    },
    {
      title: "Medical Center Promotional Reels",
      coverImage: "/works/work5.jpg",
      url: "https://www.instagram.com/baraa_malaika/reel/DQb1hgXkRMQ/",
      shortDescription:
        "A collection of promotional reels produced for medical centers in Aleppo, including Aleppo LASIK Center, combining professional presentation with engaging visual storytelling.",
    },
  ],
};

// Page Sections
function Hero() {
  const socialPlatforms = [
    { icon: "/instagram.png", label: "Instagram", count: "162K", href: "https://www.instagram.com/baraa_malaika/", className: "instagram" },
    { icon: "/youtube.png", label: "YouTube", count: "250K", href: "https://youtube.com/@baraamalaika-954", className: "youtube" },
    { icon: "/facebook.png", label: "Facebook", count: "250K", href: "https://www.facebook.com/profile.php?id=100002298332862", className: "facebook" },
  ];

  return (
    <section className="relative overflow-hidden bg-background hero-bg-glow px-6 pt-32 pb-20 md:pt-36 md:pb-32">
      {/* Atmospheric blobs — vibrant */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/6 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-vivid/5 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-gold/4 blur-[120px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 animate-fade-in-left">
            {/* Location badge */}
            <div className="gold-badge inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-6">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Egypt & MENA region
            </div>

            <h1 className="text-6xl font-black tracking-tighter text-foreground md:text-7xl lg:text-8xl">
              Baraa <span className="gradient-text">Malaika.</span>
            </h1>
            <p className="mt-6 text-xl font-medium tracking-tight text-foreground/70 md:text-2xl">
              Humanitarian Storyteller | Photographer | Video Editor | Media Professional
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I create humanitarian visual content that documents community initiatives and
              highlights stories that deserve to be told, through ethical storytelling that
              preserves dignity and transforms digital engagement into tangible real-world impact.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#featured-work"
                className="btn-primary rounded-full px-8 py-4 text-sm font-semibold text-white transition-all"
              >
                View My Work
              </a>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/baraa-malaika-portfolio.pdf';
                  link.download = 'Baraa-Malaika-Portfolio.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent/30 hover:bg-accent/5 hover:shadow-md flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
              <a
                href="#contact"
                className="rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent/30 hover:bg-accent/5 hover:shadow-md"
              >
                Contact Me
              </a>
            </div>

            {/* Social Media Icons with Counts */}
            <div className="mt-12 flex flex-wrap items-center gap-3">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target={platform.href.startsWith("http") ? "_blank" : undefined}
                  rel={platform.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`social-platform-card ${platform.className} flex items-center gap-2.5 rounded-full border border-border bg-card/80 backdrop-blur-sm px-4 py-2.5 shadow-sm`}
                >
                  <img src={platform.icon} alt={platform.label} className="social-icon-img" style={{ width: 24, height: 24 }} />
                  <span className="text-sm font-bold text-foreground">{platform.label}</span>
                  {platform.count && (
                    <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {platform.count}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative animate-fade-in-right">
            <div className="absolute -inset-4 rounded-3xl gradient-border translate-x-4 " />
            {/* Soft glow halo behind image */}
            <div className="absolute inset-0 rounded-2xl bg-accent/8 blur-2xl translate-x-2 translate-y-2 " />
            <Image
              src="/hero.jpg"
              alt="Baraa Malaika portrait"
              className="hero-image aspect-[4/5] w-full rounded-2xl object-cover z-10 relative "
              width={600}
              height={750}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" className="bg-section-bg section-texture">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-4 rounded-3xl gradient-border translate-x-4 -translate-y-4" />
          {/* Subtle glow under image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 w-3/4 bg-accent/10 blur-3xl rounded-full" />
          <Image
            src="/personal.jpg"
            alt="Baraa Malaika during field work"
            className="aspect-square w-full rounded-2xl object-cover shadow-xl relative"
            width={400}
            height={400}
            style={{ boxShadow: "0 20px 60px -10px rgba(15,23,42,0.15), 0 4px 12px rgba(15,23,42,0.06)" }}
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionTitle subtitle="About Me">Visuals With Purpose</SectionTitle>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Baraa Malaika is a humanitarian content creator, photographer, and video editor from
              Aleppo, Syria. He began his journey in content creation in 2018 and gradually focused
              on documenting humanitarian initiatives, community activities, and volunteer work
              through photography and video before fully dedicating himself to humanitarian digital
              media in 2024.
            </p>
            <p
              className="border-l-2 pl-6 italic text-foreground font-medium gold-line"
              style={{ borderColor: "var(--accent)" }}
            >
              "He believes content should not be used only for reach, but as a tool for awareness,
              mobilization, and impact. That is why his work is centered on ethical visual
              storytelling that respects privacy and places dignity at the heart of every story."
            </p>
            <div className="pt-4">
              <a
                href="#identity"
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-accent hover:text-vivid transition-colors"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ImpactNumbers() {
  const platforms = [
    { icon: "/youtube.png", value: "250K+", label: "YouTube Subscribers", color: "#FF0000", bgColor: "rgba(255,0,0,0.06)", borderColor: "rgba(255,0,0,0.15)" },
    { icon: "/facebook.png", value: "250K+", label: "Facebook Followers", color: "#1877F2", bgColor: "rgba(24,119,242,0.06)", borderColor: "rgba(24,119,242,0.15)" },
    { icon: "/instagram.png", value: "162K+", label: "Instagram Followers", color: "#E1306C", bgColor: "rgba(225,48,108,0.06)", borderColor: "rgba(225,48,108,0.15)" },
  ];

  return (
    <Section id="impact">
      <div className="text-center mb-16">
        <SectionTitle subtitle="The Reach">Impact in Numbers</SectionTitle>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          This digital presence was never the goal by itself. It became a channel for social
          awareness, community engagement, and turning audiences into active contributors to
          meaningful humanitarian work.
        </p>
      </div>

      {/* Total Views — Hero Stat */}
      <div className="mb-12 text-center">
        <div className="inline-flex flex-col items-center glass-card rounded-3xl px-12 py-8 gradient-border">
          <div className="flex items-center gap-3 mb-2">
            <Eye className="h-8 w-8 text-accent" />
            <TrendingUp className="h-6 w-6 text-olive" />
          </div>
          <div className="stat-value text-5xl font-black tracking-tighter gradient-text md:text-6xl lg:text-7xl">
            350M+
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mt-2">
            Total Views in 2024
          </div>
        </div>
      </div>

      {/* Platform Cards with Image Icons */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {platforms.map((platform) => (
          <div
            key={platform.label}
            className="group relative rounded-2xl border bg-card p-8 text-center stat-card-glow overflow-hidden"
            style={{ borderColor: platform.borderColor, background: `linear-gradient(135deg, ${platform.bgColor}, transparent)` }}
          >
            <div className="flex justify-center mb-4">
              <img src={platform.icon} alt={platform.label} className="social-icon-img-lg" style={{ width: 52, height: 52 }} />
            </div>
            <div className="stat-value text-4xl font-black tracking-tighter md:text-5xl mb-2" style={{ color: platform.color }}>
              {platform.value}
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {platform.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl glass-card border border-border p-8 text-center flex flex-col justify-center card-shadow">
          <div className="flex justify-center mb-3">
            <Sparkles className="h-6 w-6 text-vivid" />
          </div>
          <p className="text-3xl font-black text-foreground">2018</p>
          <p className="text-sm text-muted-foreground mt-2">Start of content creation journey</p>
        </div>
        <div className="rounded-2xl glass-card border border-border p-8 text-center flex flex-col justify-center card-shadow">
          <div className="flex justify-center mb-3">
            <TrendingUp className="h-6 w-6 text-accent" />
          </div>
          <p className="text-3xl font-black text-foreground">2024</p>
          <p className="text-sm text-muted-foreground mt-2">Full transition to humanitarian media</p>
        </div>
        <div className="award-gold-card rounded-2xl bg-gold/10 border border-gold/20 p-8 text-center flex flex-col items-center justify-center">
          <Award className="h-8 w-8 text-gold mb-3" style={{ filter: "drop-shadow(0 0 8px rgba(245,158,11,0.5))" }} />
          <p className="text-xl font-bold text-foreground">YouTube Silver Creator Award</p>
        </div>
      </div>
    </Section>
  );
}

function Identity() {
  return (
    <Section id="identity" className="bg-section-bg section-texture">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle subtitle="Philosophy">
          A Professional Identity Built on Impact and Dignity
        </SectionTitle>
        <p className="text-xl leading-relaxed text-muted-foreground">
          What defines Baraa's work is not only content creation itself, but how content is used in
          service of people and communities. He is deeply committed to ethical humanitarian
          storytelling and, in many of his works, avoids showing beneficiaries' faces or turning
          suffering into visual spectacle. For him, the value of a story lies in presenting it with
          respect, responsibility, and awareness.
        </p>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
          He uses digital media as a tool for social impact, launching initiatives, encouraging
          participation, and moving people from passive viewing to meaningful action.
        </p>
      </div>
      <div className="mt-16 relative">
        {/* Warm glow beneath image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/3 w-2/3 bg-accent/8 blur-3xl rounded-full" />
        <Image
          src="/hero.png"
          alt="Humanitarian visual storytelling"
          className="w-full rounded-2xl object-cover object-top relative"
          width={800}
          height={320}
          style={{ boxShadow: "0 24px 60px -10px rgba(15,23,42,0.14)" }}
        />
      </div>
    </Section>
  );
}

function Services() {
  const services = [
    {
      icon: HeartHandshake,
      title: "Humanitarian Content Creation",
      desc: "Producing digital content that documents humanitarian initiatives and community stories through a professional and ethical lens.",
    },
    {
      icon: Camera,
      title: "Field Photography & Filming",
      desc: "Covering events, initiatives, and community activities visually with a strong human-centered perspective.",
    },
    {
      icon: Clapperboard,
      title: "Video Editing",
      desc: "Transforming raw footage into emotionally impactful stories with attention to rhythm, message, and visual quality.",
    },
    {
      icon: Video,
      title: "Reels & Short-Form Video Production",
      desc: "Creating high-impact short videos tailored for platforms such as Instagram, YouTube, and TikTok.",
    },
    {
      icon: Users,
      title: "Media Coverage for Initiatives",
      desc: "Producing visual and media content that highlights the work and impact of organizations, campaigns, and community projects.",
    },
    {
      icon: Megaphone,
      title: "Social Impact Campaign Development",
      desc: "Contributing to campaign concept development, storytelling structure, messaging, and visual execution for humanitarian campaigns.",
    },
  ];

  return (
    <Section id="services">
      <SectionTitle subtitle="Expertise">What I Do</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl bg-card p-8 transition-all hover-lift border border-border"
          >
            {/* Gradient corner accent on hover */}
            <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <service.icon
              className="h-10 w-10 text-accent mb-6 transition-all duration-300 group-hover:scale-110"
              style={{ filter: "drop-shadow(0 0 6px rgba(14,165,233,0.4))" }}
            />
            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function RegionalCollaboration() {
  const partnerTypes = ["NGOs", "Organizations", "Media Platforms"];

  return (
    <Section id="regional-collaboration" className="bg-section-bg section-texture">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="rounded-[2rem] border border-border bg-card p-8 card-shadow md:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest gradient-text">
            Collaboration
          </p>
          <h2 className="max-w-3xl text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Available for collaboration in Egypt and across the MENA region.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I help NGOs and campaigns in the region create impactful awareness content that is built for reach, clarity, and real social value.
            </p>
            <p>
              I also help organizations create impactful content that drives awareness and action, turning media production into a practical communication tool.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {partnerTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-accent/15 bg-accent/6 px-4 py-2 text-sm font-semibold text-foreground"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-[1.75rem] border border-border bg-card p-6 card-shadow">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Region
            </p>
            <p className="mt-3 text-2xl font-black tracking-tight text-foreground">
              Egypt + MENA
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Open to regional assignments, campaigns, and cross-border collaboration.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-card p-6 card-shadow">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Focus
            </p>
            <p className="mt-3 text-2xl font-black tracking-tight text-foreground">
              Awareness Content
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Story-driven production for humanitarian, civic, and public-interest messaging.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-card p-6 card-shadow">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Outcome
            </p>
            <p className="mt-3 text-2xl font-black tracking-tight text-foreground">
              Awareness to Action
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Content designed to inform audiences, strengthen trust, and encourage participation.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FeaturedPortfolio() {
  return (
    <Section id="featured-work" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0  h-84  bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gold/8 blur-[120px]" />

      <div className="relative">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest gradient-text">
            Portfolio
          </p>
          <div>
            <SectionTitle>{portfolioSection.title}</SectionTitle>
            <p className="-mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {portfolioSection.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioSection.items.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.75rem] border border-white/50 bg-card/85 p-3 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.24)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-[1.35rem] bg-muted">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="px-1 pt-5 pb-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent/80">
                  Work 0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-[15px]">
                  {item.shortDescription}
                </p>
                <a
                  href={item.url ?? "#featured-work"}
                  target={item.url?.startsWith("http") ? "_blank" : undefined}
                  rel={item.url?.startsWith("http") ? "noreferrer" : undefined}
                  className="btn-primary mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
                >
                  View Work
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ImpactSection() {
  const impactItems = [
    {
      category: "Medical Content",
      title: "Medical Awareness Reel",
      views: "1.7M",
      link: "https://www.instagram.com/reel/DQb1hgXkRMQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image: "/works/work5.jpg",
    },
    {
      category: "Awareness Content",
      title: "Awareness Reel",
      views: "15M",
      link: "https://www.instagram.com/reel/DMnnV8ARuKg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image: "/works/work4.jpg",
    },
    {
      category: "Charity Content",
      title: "Charity Reel",
      views: "4.5M",
      link: "https://www.instagram.com/reel/DPzFGb2kcEW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image: "/charity-reel.jpg",
    },
  ];

  return (
    <Section id="impact" className="bg-section-bg section-texture">
      <SectionTitle subtitle="Impact">Digital Impact</SectionTitle>

      <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
        Selected reels that achieved strong visibility across awareness, medical, and humanitarian content.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {impactItems.map((item) => (
          <article
            key={item.title}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card hover-lift"
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={300}
                height={533}
              />

              <div
                className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold text-white backdrop-blur-sm"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--vivid))",
                }}
              >
                {item.category}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {item.title}
              </h3>

              <div className="mt-6 flex-1 flex flex-col justify-end">
                <div className="border-t border-border pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    Views
                  </p>
                  <h4 className="mt-2 text-5xl font-black leading-none text-blue-400">
                    +{item.views}
                  </h4>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-accent hover:text-white
                  bg-blue-400 text-white
                  "
                >
                  <Image src="/instagram.png" alt="Instagram icon" width={24} height={24} className="mr-2" />
                  Watch Work
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
function Initiatives() {
  const otherInitiatives = [
    "Blood Donation Initiative",
    "For Your Eyes, Aleppo",
    "Tomorrow Is Better for Children with Cancer",
    "Keep Childhood Safe",
    "Loyalty to Aleppo",
  ];
  const initiativeGallery = [
    {
      title: "Blood Donation Initiative",
      image: "/blood-donner.jpg",
      className: "row-span-1",
    },
    {
      title: "Blood Donation Support",
      image: "/blood-donner-2.jpg",
      className: "row-span-1",
    },
    {
      title: "Children With Cancer Initiative",
      image: "/cancer-childs.png",
      className: "sm:col-span-2",
    },
    {
      title: "Community Field Coverage",
      image: "/post1.jpg",
      className: "row-span-1",
    },
    {
      title: "Volunteer Storytelling",
      image: "/post2.jpg",
      className: "row-span-1",
    },
    {
      title: "For Aleppo",
      image: "/for-aleppo.jpg",
      className: "sm:col-span-2",
    },
  ];

  return (
    <Section id="initiatives">
      <SectionTitle subtitle="Social Impact">Initiatives That Created Real Impact</SectionTitle>
      <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
        For Baraa, content has never been separated from reality. It became a way to launch
        initiatives, support families, strengthen volunteer action, and turn online engagement into
        meaningful on-the-ground outcomes.
      </p>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Main Initiatives - vertical image focused */}
        <div className="space-y-8">
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover-lift group">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/taxi.jpg"
                alt="Taxi of Goodness initiative"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={300}
                height={400}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-1">Taxi of Goodness</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                Role: Founder and Program Director
              </p>
              <p className="text-muted-foreground text-sm">
                A recurring humanitarian initiative designed to support families in need and transform
                individual giving into a more organized and sustainable support model.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden hover-lift group">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/on-the-road.jpg"
                alt="On the Road initiative"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={300}
                height={400}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-1">On the Road</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                Role: Creator and Executive Producer
              </p>
              <p className="text-muted-foreground text-sm">
                A humanitarian and awareness-based digital series that highlights marginalized
                individuals through ethical storytelling and strong privacy protection.
              </p>
            </div>
          </div>
        </div>

        {/* Other Initiatives - grid of vertical images */}
        <div className="space-y-8">
          <div
            className="bg-section-bg border border-border rounded-2xl p-6"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Other Key Initiatives</h3>
            <ul className="space-y-3 mb-8">
              {otherInitiatives.map((init, i) => (
                <li key={i} className="flex items-center text-base text-muted-foreground group">
                  <span
                    className="mr-3 h-2 w-2 rounded-full bg-accent shrink-0 transition-all duration-300 group-hover:scale-150"
                    style={{ boxShadow: "0 0 6px rgba(14,165,233,0.5)" }}
                  />
                  {init}
                </li>
              ))}
            </ul>
          </div>

          {/* Initiative images grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {initiativeGallery.map((item) => (
              <div
                key={item.title}
                className={`group overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.className}`}
              >
                <div className="overflow-hidden rounded-[1.1rem]">
                  <div className={`relative ${item.className?.includes("col-span-2") ? "aspect-[16/10]" : "aspect-[3/4]"}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      width={600}
                      height={800}
                    />
                  </div>
                </div>
                <div className="px-2 pb-2 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/80">
                    Initiative
                  </p>
                  <h4 className="mt-2 text-base font-bold leading-snug text-foreground">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Collaborations() {
  const orgs = [
    "Smile United",
    "Basmat Amal Association",
    "Kafaf",
    "Ayloul Foundation",
    "American Orphans Association",
    "TR99 Media",
    "Roya TV",
  ];

  const types = [
    "Media coverage",
    "Humanitarian storytelling",
    "Field volunteer activities",
    "Community campaigns",
    "Visual documentation for initiatives and organizations",
  ];

  return (
    <Section id="collaborations" className="bg-section-bg section-texture">
      <SectionTitle subtitle="Network">Collaborations & Partnerships</SectionTitle>
      <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
        Baraa has collaborated with a range of organizations, institutions, and community
        initiatives across humanitarian, media, and social impact projects.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
          <h3 className="text-xl font-bold text-foreground mb-6">Organizations and Entities</h3>
          <div className="flex flex-wrap gap-3">
            {orgs.map((org) => (
              <span
                key={org}
                className="bg-muted px-4 py-2 rounded-full text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-accent/10 hover:text-accent cursor-default"
                style={{ transition: "all 0.2s ease" }}
              >
                {org}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
          <h3 className="text-xl font-bold text-foreground mb-6">Nature of Collaboration</h3>
          <ul className="space-y-3">
            {types.map((type, i) => (
              <li key={i} className="flex items-start text-muted-foreground">
                <HeartHandshake
                  className="mr-3 h-5 w-5 text-accent shrink-0"
                  style={{ filter: "drop-shadow(0 0 4px rgba(14,165,233,0.35))" }}
                />
                <span>{type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl overflow-hidden border border-border group">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/personal.jpg"
              alt="Collaboration and partnership moment"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border group">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/initiative1.jpg"
              alt="Field collaboration"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border group">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/initiative3.jpg"
              alt="Partnership moment"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function MediaPresence() {
  return (
    <Section id="media">
      <SectionTitle subtitle="Press">Growing Media Presence</SectionTitle>
      <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
        Alongside his field work and digital production, Baraa has been featured on various Arab and
        regional media platforms, where he has spoken about humanitarian content, ethical
        storytelling, and the role of media in creating social impact.
      </p>

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <div
            className="border-l-4 pl-6 py-2 gold-line"
            style={{ borderColor: "var(--accent)" }}
          >
            <h4 className="text-2xl font-bold text-foreground">Ana Syria TV Interview</h4>
            <p className="text-lg italic text-muted-foreground mt-2">
              "Humanitarian Content on Social Media... When Words Become Impact"
            </p>
            <p className="text-sm font-bold uppercase text-accent mt-4">15/03/2026</p>
            <a
              href="https://youtu.be/A6x6D1TlskE?si=dwQhTJKSuqnARROV"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center text-sm font-bold text-foreground hover:text-accent transition-colors"
            >
              Watch Interview <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="border-l-4 border-border pl-6 py-2 mt-8">
            <h4 className="text-xl font-bold text-foreground">Roya TV Published Report</h4>
            <a
              href="https://www.instagram.com/p/DIZfiUEtjyA/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              View Report <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-8">
            <p className="text-sm font-bold uppercase text-muted-foreground mb-3">
              Other Platforms Mentioned:
            </p>
            <div className="flex gap-3 flex-wrap">
              {["Lana TV", "Roya TV", "Arab & Regional Outlets"].map((platform) => (
                <span
                  key={platform}
                  className="bg-muted px-4 py-2 rounded-lg text-sm transition-all hover:bg-accent/10 hover:text-accent cursor-default"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Image
          src="/hero.jpg"
          alt="Media presence and interview cover"
          className="w-full rounded-2xl object-cover"
          width={600}
          height={500}
          style={{ boxShadow: "0 24px 60px -10px rgba(0,0,0,0.14)" }}
        />
      </div>
    </Section>
  );
}

function TimelineEducationAwards() {
  return (
    <Section id="background" className="bg-section-bg section-texture">
      <SectionTitle subtitle="Journey">A Journey Evolving Toward Impact</SectionTitle>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {[
            {
              year: "2018",
              text: "Started working in content creation and began learning photography and visual storytelling independently.",
            },
            {
              year: "2018–2023",
              text: "Continued building experience in digital media, content creation, visual storytelling, and media production.",
            },
            {
              year: "Early 2024",
              text: "Became more deeply involved in volunteer field work and local community support in Aleppo.",
            },
            {
              year: "2024",
              text: "Fully transitioned into humanitarian digital media and launched initiatives and content with strong social impact.",
            },
            {
              year: "2024–2026",
              text: "Reached more than 250 million views, expanded media presence, and collaborated with multiple organizations.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="timeline-dot flex items-center justify-center w-10 h-10 rounded-full border-4 border-section-bg bg-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl border border-border card-shadow">
                <div className="font-bold text-accent mb-1">{item.year}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{item.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Briefcase className="mr-3 text-accent" /> Academic & Learning
            </h3>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6 card-shadow">
              <h4 className="font-bold text-foreground mb-3">Academic Qualifications</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Health Sciences Graduate – University of Aleppo (2014) – GPA: 87%</li>
                <li>Communications Engineering (2021)</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 card-shadow">
              <h4 className="font-bold text-foreground mb-3">Continuous Learning & Contribution</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Ongoing learning in leadership, digital communication, human interaction, media
                ethics, and awareness messaging.
              </p>
              <p className="text-muted-foreground text-sm border-t border-border pt-4">
                He has designed and delivered workshops and guidance sessions related to humanitarian
                ethics, civic responsibility, and sustainable volunteering, while also mentoring
                volunteers and young people interested in community work.
              </p>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Award
                className="mr-3 text-gold"
                style={{ filter: "drop-shadow(0 0 6px rgba(245,158,11,0.45))" }}
              />{" "}
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              <div className="bg-card border border-border p-4 rounded-xl flex items-center gap-4 card-shadow hover:border-red-200 transition-colors duration-300">
                <Award
                  className="h-8 w-8 shrink-0"
                  style={{
                    color: "#FF0000",
                    filter: "drop-shadow(0 0 6px rgba(255,0,0,0.4))",
                  }}
                />
                <div>
                  <h5 className="font-bold text-foreground">YouTube Silver Creator Award</h5>
                  <p className="text-xs text-muted-foreground">Digital Recognition</p>
                </div>
              </div>
              <div className="award-gold-card bg-card border border-border p-4 rounded-xl flex items-center gap-4 transition-colors duration-300">
                <Award
                  className="h-8 w-8 shrink-0 text-gold"
                  style={{ filter: "drop-shadow(0 0 6px rgba(245,158,11,0.5))" }}
                />
                <div>
                  <h5 className="font-bold text-foreground">TOYP Nomination</h5>
                  <p className="text-xs text-muted-foreground">Humanitarian and Voluntary Leadership</p>
                </div>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl flex items-center gap-4 card-shadow">
                <Users
                  className="h-8 w-8 shrink-0"
                  style={{ color: "var(--olive)", filter: "drop-shadow(0 0 4px rgba(5,150,105,0.3))" }}
                />
                <div>
                  <h5 className="font-bold text-foreground">Community Recognition</h5>
                  <p className="text-xs text-muted-foreground">
                    Appreciation in Aleppo's blood donation campaign and several social campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function PersonalMessage() {
  return (
    <Section
      id="message"
      className="bg-foreground text-background text-center py-32 relative overflow-hidden"
    >
      {/* Subtle radial glow in dark section */}
      <div className="message-section-glow pointer-events-none absolute inset-0" />
      <div className="relative z-10">
        <QuoteIcon
          className="mx-auto h-16 w-16 mb-8 quote-icon-glow"
          style={{ color: "rgba(14,165,233,0.3)" }}
        />
        <h2 className="text-3xl md:text-5xl font-black max-w-4xl mx-auto leading-tight">
          "I believe the camera is not just a tool for documentation, but a responsibility."
        </h2>
        <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light" style={{ color: "rgba(255,255,255,0.7)" }}>
          A humanitarian story should not be told to be consumed, but to create understanding,
          empathy, and change. That is why I focus on producing content that carries value, respects
          people, and gives community issues a sincere voice that can move others toward action.
        </p>
        <p className="mt-8 font-bold tracking-widest uppercase text-sm text-accent">
          — Baraa Malaika
        </p>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Let's Create <span className="gradient-text">Impact.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            For collaborations in media projects, humanitarian initiatives, visual coverage, or
            professional inquiries, feel free to get in touch.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-4 group contact-icon-bubble-wrap">
              <div className="contact-icon-bubble p-4 rounded-full bg-section-bg transition-all duration-300">
                <Mail
                  className="h-6 w-6 text-accent"
                  style={{ filter: "drop-shadow(0 0 4px rgba(14,165,233,0.4))" }}
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:baraama993@gmail.com"
                  className="block text-xl font-medium text-foreground hover:text-accent transition-colors"
                >
                  baraama993@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group contact-icon-bubble-wrap">
              <div className="contact-icon-bubble p-4 rounded-full bg-section-bg transition-all duration-300">
                <Phone
                  className="h-6 w-6 text-accent"
                  style={{ filter: "drop-shadow(0 0 4px rgba(14,165,233,0.4))" }}
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Phone
                </p>
                <p className="block text-xl font-medium text-foreground">+963 940 662 763</p>
              </div>
            </div>
          </div>

          {/* Social buttons with brand-colored image icons */}
          <div className="mt-12 flex gap-3 flex-wrap">
            <a
              href="https://www.instagram.com/baraa_malaika/"
              target="_blank"
              rel="noreferrer"
              className="social-btn-instagram flex items-center gap-2.5 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300"
            >
              <img src="/instagram.png" alt="Instagram" className="h-5 w-5" /> Instagram
            </a>
            <a
              href="https://youtube.com/@baraamalaika-954"
              target="_blank"
              rel="noreferrer"
              className="social-btn-youtube flex items-center gap-2.5 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300"
            >
              <img src="/youtube.png" alt="YouTube" className="h-5 w-5" /> YouTube
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100002298332862"
              target="_blank"
              rel="noreferrer"
              className="social-btn-facebook flex items-center gap-2.5 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300"
            >
              <img src="/facebook.png" alt="Facebook" className="h-5 w-5" /> Facebook
            </a>
        
         
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 w-3/4 bg-accent/8 blur-3xl rounded-full" />
          <Image
            src="/personal-3.webp"
            alt="Contact section visual"
            className="w-full rounded-2xl object-cover border border-border relative"
            width={400}
            height={500}
            style={{ boxShadow: "0 24px 60px -10px rgba(15,23,42,0.12)" }}
          />
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-section-bg py-12 relative">
      {/* Glow divider at top */}
      <div className="glow-divider mb-8 absolute top-0 w-full " />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-6 md:flex-row gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-foreground">Baraa Malaika</p>
          <p className="text-sm text-muted-foreground mt-1">
            Humanitarian Content Creator | Media Professional
          </p>
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          &copy; {new Date().getFullYear()} Baraa Malaika. All rights reserved.
        </p>
        <p className="text-sm font-medium text-muted-foreground">Egypt & MENA region</p>
      </div>
    </footer>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-foreground">
      <Navbar />
      <Hero />
      <About />
      <ImpactNumbers />
      <Identity />
      <Services />
      <RegionalCollaboration />
      <FeaturedPortfolio />
      <ImpactSection />
      <Initiatives />
      <Collaborations />
      <MediaPresence />
      <TimelineEducationAwards />
      <PersonalMessage />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
