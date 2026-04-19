import "@gnome-ui/react/styles";
import {
  ActionRow,
  Avatar,
  Badge,
  Banner,
  BoxedList,
  Button,
  Card,
  Chip,
  Clamp,
  HeaderBar,
  Icon,
  Link,
  Popover,
  ProgressBar,
  Text,
  WrapBox,
  useBreakpoint,
} from "@gnome-ui/react";
import { GoNext, OpenMenu, Star } from "@gnome-ui/icons";
import "./app.css";

// ── Data ──────────────────────────────────────────────────────────────────────

const profile = {
  name: "Pilmee",
  title: "Software Engineer",
  bio: "Focused on building clean, reusable solutions with modern JavaScript ecosystems.",
  location: "Pluton",
  avatar: "https://avatars.githubusercontent.com/u/104101281?v=4",
  github: "https://github.com/ElJijuna",
  linkedin: "https://www.linkedin.com/in/pilmee/",
  email: "pilmee@gmail.com",
  twitter: "https://twitter.com/pilmee",
  hobbies: ["Guitar & trumpet", "Tennis", "Painting"],
};

const skills = [
  { name: "TypeScript", level: 0.9 },
  { name: "JavaScript", level: 0.95 },
  { name: "Node.js", level: 0.85 },
  { name: "React", level: 0.8 },
  { name: "Bun", level: 0.7 },
  { name: "Git", level: 0.85 },
];

const projects = [
  {
    name: "gnome-ui",
    description:
      "React monorepo bringing GNOME HIG to the web · core, react, hooks, charts, layout, platform, icons",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/gnome-ui",
  },
  {
    name: "api-hooks",
    description:
      "React hooks built on TanStack Query for API integrations · bp, gh, npm, osv",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/api-hooks",
  },
  {
    name: "BragiUI",
    description: "React component library built with Vite",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/BragiUI",
  },
  {
    name: "SSignal",
    description: "Signal pattern implementation for reactive state management",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/SSignal",
  },
  {
    name: "floaty",
    description:
      "Floating widget with drag, collapse/expand, and pin functionality",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/floaty",
  },
  {
    name: "infinity-fetch",
    description:
      "Configurable recursive/infinite fetch utility for paginated APIs — Node.js and browser",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/infinity-fetch",
  },
  {
    name: "MonitoringTool",
    description:
      "Lightweight solution for tracking system metrics and performance",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/ElJijuna/MonitoringTool",
  },
  {
    name: "express-memorize",
    description:
      "Express middleware for caching responses with customizable strategies",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/express-memorize",
  },
  {
    name: "useQuery",
    description:
      "Lightweight query client with caching, garbage collection, retry logic, and subscriptions",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/ElJijuna/useQuery",
  },
  {
    name: "MyNpmLens",
    description: "PWA to track and monitor your favourite npm packages at a glance",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/MyNpmLens",
  },
  {
    name: "vite-legacy-interop",
    description: "Vite plugin for seamless legacy module interop",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/vite-legacy-interop",
  },
  {
    name: "vite-magic-tree-shaking",
    description:
      "Auto-generate tree-shakeable lib entries for Vite build.lib.entry",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/vite-magic-tree-shaking",
  },
  {
    name: "vite-legacy-pass-through",
    description: "Vite plugin to pass through legacy assets without transformation",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/vite-legacy-pass-through",
  },
  {
    name: "typedoc-gnome-template",
    description: "TypeDoc theme with GNOME visual identity",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/typedoc-gnome-template",
  },
  {
    name: "super-configs",
    description: "Shared configurations for ESLint, Prettier, Jest, and more",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/super-configs",
  },
  {
    name: "BitbucketDataCenterApiClient",
    description: "TypeScript client for Bitbucket Data Center REST API",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/ElJijuna/BitbucketDataCenterApiClient",
  },
] as const;

// ── Utils ─────────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function Header() {
  const { isMedium } = useBreakpoint();

  const navMenu = (
    <div className="nav-menu">
      <Button variant="flat" onClick={() => scrollTo("about")}>
        About
      </Button>
      <Button variant="flat" onClick={() => scrollTo("projects")}>
        Projects
      </Button>
      <Button
        variant="suggested"
        shape="pill"
        onClick={() => scrollTo("contact")}
      >
        Contact
      </Button>
    </div>
  );

  return (
    <div className="sticky-header">
      <HeaderBar
        title={<Text variant="heading">{profile.name}</Text>}
        end={
          isMedium ? (
            <Popover content={navMenu} placement="bottom">
              <Button variant="flat">
                <Icon icon={OpenMenu} size="md" label="menu" />
              </Button>
            </Popover>
          ) : (
            <WrapBox childSpacing={8}>
              <Button variant="flat" onClick={() => scrollTo("about")}>
                About
              </Button>
              <Button variant="flat" onClick={() => scrollTo("projects")}>
                Projects
              </Button>
              <Button
                variant="suggested"
                shape="pill"
                onClick={() => scrollTo("contact")}
              >
                Contact
              </Button>
            </WrapBox>
          )
        }
      />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Avatar src={profile.avatar} name={profile.name} size="xl" />

      <Badge variant="success">Available for work</Badge>

      <Text variant="large-title" as="h1">
        Hi, I'm {profile.name}
      </Text>

      <Text variant="title-3" color="dim" as="p">
        {profile.title}
      </Text>

      <Text variant="body" color="dim" as="p" className="hero-bio">
        {profile.bio}
      </Text>

      <div className="hero-actions">
        <Button
          variant="suggested"
          size="lg"
          shape="pill"
          onClick={() => openUrl(profile.github)}
        >
          GitHub
        </Button>
        <Button
          variant="raised"
          size="lg"
          shape="pill"
          onClick={() => openUrl(profile.linkedin)}
        >
          LinkedIn
        </Button>
        <Button
          variant="flat"
          size="lg"
          shape="pill"
          onClick={() => (window.location.href = `mailto:${profile.email}`)}
        >
          Email
        </Button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-alt">
      <Clamp maximumSize={760}>
        <Text variant="title-2" as="h2" className="section-title">
          About Me
        </Text>
        <Text variant="body" color="dim" as="p" className="section-description">
          Software Engineer based in <strong>{profile.location}</strong>. I
          build clean, reusable TypeScript libraries and developer tools that
          prioritize simplicity and maintainability.
        </Text>

        <div className="about-grid">
          {/* Left column: contact + hobbies */}
          <div className="about-col">
            <Text variant="heading" as="h3" className="col-heading">
              Contact
            </Text>
            <BoxedList>
              <ActionRow
                title="Email"
                subtitle={profile.email}
                interactive
                trailing={<Icon icon={GoNext} size="sm" label="open email" />}
                onClick={() =>
                  (window.location.href = `mailto:${profile.email}`)
                }
              />
              <ActionRow
                title="GitHub"
                subtitle="github.com/ElJijuna"
                interactive
                trailing={<Icon icon={GoNext} size="sm" label="open github" />}
                onClick={() => openUrl(profile.github)}
              />
              <ActionRow
                title="LinkedIn"
                subtitle="linkedin.com/in/pilmee"
                interactive
                trailing={
                  <Icon icon={GoNext} size="sm" label="open linkedin" />
                }
                onClick={() => openUrl(profile.linkedin)}
              />
              <ActionRow title="Location" subtitle={profile.location} />
            </BoxedList>

            <Text variant="heading" as="h3" className="col-heading mt-lg">
              Beyond Code
            </Text>
            <div className="chip-group">
              {profile.hobbies.map((hobby) => (
                <Chip key={hobby} label={hobby} />
              ))}
            </div>
          </div>

          {/* Right column: skills */}
          <div className="about-col">
            <Text variant="heading" as="h3" className="col-heading">
              Skills
            </Text>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-header">
                    <Text variant="body">{skill.name}</Text>
                    <Text variant="caption" color="dim">
                      {Math.round(skill.level * 100)}%
                    </Text>
                  </div>
                  <ProgressBar value={skill.level} aria-label={skill.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Clamp>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="section">
      <Clamp maximumSize={1040}>
        <Text variant="title-2" as="h2" className="section-title">
          Projects
        </Text>
        <Text variant="body" color="dim" className="section-description">
          Open source tools and libraries I've built.
        </Text>

        <div className="projects-grid">
          {projects.map((project) => (
            <Card
              key={project.name}
              padding="lg"
              interactive
              className="project-card"
              onClick={() => openUrl(project.url)}
            >
              <div className="project-card-body">
                <Text variant="heading" as="h3">
                  {project.name}
                </Text>
                <Text variant="body" color="dim">
                  {project.description}
                </Text>
              </div>
              <div className="project-card-footer">
                <Badge variant="neutral">{project.language}</Badge>
                {project.stars > 0 && (
                  <span className="project-stars">
                    <Icon icon={Star} size="sm" label="stars" />
                    <Text variant="caption">{project.stars}</Text>
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Clamp>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-alt">
      <Clamp maximumSize={540}>
        <Text variant="title-2" as="h2" className="section-title">
          Get in Touch
        </Text>

        <Banner variant="info" className="contact-banner">
          Open to collaborations, interesting projects, and conversations about
          TypeScript, Node.js, or developer tooling.
        </Banner>

        <div className="contact-links">
          <Button
            variant="suggested"
            size="lg"
            shape="pill"
            onClick={() =>
              (window.location.href = `mailto:${profile.email}`)
            }
          >
            Send Email
          </Button>
          <Button
            variant="raised"
            size="lg"
            shape="pill"
            onClick={() => openUrl(profile.linkedin)}
          >
            LinkedIn
          </Button>
          <Button
            variant="flat"
            size="lg"
            shape="pill"
            onClick={() => openUrl(profile.twitter)}
          >
            @pilmee
          </Button>
        </div>
      </Clamp>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Text variant="caption" color="dim">
        © {new Date().getFullYear()} {profile.name} · Built with{" "}
        <Link href="https://github.com/ElJijuna/gnome-ui" external>
          gnome-ui
        </Link>{" "}
        &{" "}
        <Link href="https://vite.dev" external>
          Vite
        </Link>
      </Text>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
