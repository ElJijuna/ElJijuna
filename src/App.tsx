import "@gnome-ui/react/styles";
import { useDeferredValue, useState } from "react";
import {
  ActionRow,
  Avatar,
  Badge,
  Banner,
  BoxedList,
  Button,
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
import { GoNext, OpenMenu } from "@gnome-ui/icons";
import catalogData from "./catalog-data.json";
import "./app.css";

// ── Data ──────────────────────────────────────────────────────────────────────

const profile = {
  name: "Pilmee",
  title: "Software Engineer",
  bio: "Building small, sharp TypeScript tools: typed API clients, reusable UI, monitoring, and developer infrastructure.",
  location: "Pluton",
  avatar: "https://avatars.githubusercontent.com/u/104101281?v=4",
  github: "https://github.com/ElJijuna",
  linkedin: "https://www.linkedin.com/in/pilmee/",
  email: "pilmee@gmail.com",
  twitter: "https://x.com/pilmee",
  hobbies: ["Guitar & trumpet", "Tennis", "Painting"],
};

const profileStats = [
  { value: "89", label: "public repos" },
  { value: "86", label: "npm packages" },
  { value: "TypeScript", label: "main ecosystem" },
] as const;

const skills = [
  { name: "TypeScript", level: 0.9 },
  { name: "JavaScript", level: 0.95 },
  { name: "Node.js", level: 0.85 },
  { name: "React", level: 0.8 },
  { name: "Bun", level: 0.7 },
  { name: "Git", level: 0.85 },
];

const repositories = catalogData.repositories;
const npmPackages = catalogData.npmPackages;
const repositoryLanguages = Array.from(
  new Set(repositories.map((repository) => repository.language)),
).sort((first, second) => first.localeCompare(second));

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
      <Button variant="flat" onClick={() => scrollTo("repositories")}>
        Repositories
      </Button>
      <Button variant="flat" onClick={() => scrollTo("packages")}>
        npm Packages
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
              <Button variant="flat" onClick={() => scrollTo("repositories")}>
                Repositories
              </Button>
              <Button variant="flat" onClick={() => scrollTo("packages")}>
                npm Packages
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

      <Badge variant="success">Open-source builder</Badge>

      <Text variant="large-title" as="h1">
        Hi, I'm {profile.name}
      </Text>

      <Text variant="title-3" color="dim" as="p">
        {profile.title}
      </Text>

      <Text variant="body" color="dim" as="p" className="hero-bio">
        {profile.bio}
      </Text>

      <div className="profile-stats" aria-label="Public profile statistics">
        {profileStats.map((stat) => (
          <div className="profile-stat" key={stat.label}>
            <Text variant="heading">{stat.value}</Text>
            <Text variant="caption" color="dim">
              {stat.label}
            </Text>
          </div>
        ))}
      </div>

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
          build typed API clients, reusable interface systems, monitoring
          libraries, and developer tools that prioritize small APIs and low
          runtime overhead.
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

// ── Public catalogue ───────────────────────────────────────────────────────────

function RepositoryCatalog() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("All");
  const deferredQuery = useDeferredValue(query.trim().toLocaleLowerCase());
  const visibleRepositories = repositories.filter((repository) => {
    const matchesLanguage =
      language === "All" || repository.language === language;
    const matchesQuery =
      deferredQuery.length === 0 ||
      repository.name.toLocaleLowerCase().includes(deferredQuery) ||
      repository.description.toLocaleLowerCase().includes(deferredQuery);

    return matchesLanguage && matchesQuery;
  });

  return (
    <section id="repositories" className="section">
      <Clamp maximumSize={1180}>
        <Text variant="title-2" as="h2" className="section-title">
          Public Repositories
        </Text>
        <Text
          variant="body"
          color="dim"
          as="p"
          className="section-description"
        >
          All {repositories.length} public GitHub repositories, including
          source projects, experiments, and forks.
        </Text>

        <div className="catalog-toolbar">
          <label className="catalog-field" htmlFor="repository-search">
            <span>Search repositories</span>
            <input
              id="repository-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name or description"
            />
          </label>

          <label className="catalog-field" htmlFor="repository-language">
            <span>Language</span>
            <select
              id="repository-language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="All">All languages</option>
              {repositoryLanguages.map((repositoryLanguage) => (
                <option value={repositoryLanguage} key={repositoryLanguage}>
                  {repositoryLanguage}
                </option>
              ))}
            </select>
          </label>
        </div>

        <Text
          variant="caption"
          color="dim"
          as="p"
          className="catalog-result-count"
          role="status"
          aria-live="polite"
        >
          Showing {visibleRepositories.length} of {repositories.length}
        </Text>

        {visibleRepositories.length === 0 ? (
          <Banner variant="info">No repositories match these filters.</Banner>
        ) : (
          <ul className="catalog-grid">
            {visibleRepositories.map((repository) => (
              <li className="catalog-item" key={repository.name}>
                <article className="catalog-card">
                  <div className="catalog-card-body">
                    <Text variant="heading" as="h3">
                      <Link href={repository.url} external>
                        {repository.name}
                      </Link>
                    </Text>
                    <Text variant="body" color="dim" as="p">
                      {repository.description}
                    </Text>
                  </div>

                  <div className="catalog-card-footer">
                    <div className="catalog-badges">
                      <Badge variant="neutral">{repository.language}</Badge>
                      <Badge variant="neutral">
                        {repository.fork ? "Fork" : "Source"}
                      </Badge>
                      {repository.archived ? (
                        <Badge variant="warning">Archived</Badge>
                      ) : null}
                    </div>

                    <div className="catalog-meta">
                      <Text variant="caption" color="dim">
                        {repository.stars} stars
                      </Text>
                      <Text variant="caption" color="dim">
                        Updated{" "}
                        <time dateTime={repository.updatedAt}>
                          {repository.updatedAt}
                        </time>
                      </Text>
                      {repository.homepage ? (
                        <Link href={repository.homepage} external>
                          Live / docs
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </Clamp>
    </section>
  );
}

function NpmPackageCatalog() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLocaleLowerCase());
  const visiblePackages = npmPackages.filter(
    (npmPackage) =>
      deferredQuery.length === 0 ||
      npmPackage.name.toLocaleLowerCase().includes(deferredQuery) ||
      npmPackage.description.toLocaleLowerCase().includes(deferredQuery),
  );

  return (
    <section id="packages" className="section-alt">
      <Clamp maximumSize={1180}>
        <Text variant="title-2" as="h2" className="section-title">
          Published npm Packages
        </Text>
        <Text
          variant="body"
          color="dim"
          as="p"
          className="section-description"
        >
          All {npmPackages.length} public packages returned for maintainer
          <code> pilmee</code>, ordered by latest publication.
        </Text>

        <div className="catalog-toolbar catalog-toolbar-single">
          <label className="catalog-field" htmlFor="package-search">
            <span>Search npm packages</span>
            <input
              id="package-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Package name or description"
            />
          </label>
        </div>

        <Text
          variant="caption"
          color="dim"
          as="p"
          className="catalog-result-count"
          role="status"
          aria-live="polite"
        >
          Showing {visiblePackages.length} of {npmPackages.length}
        </Text>

        {visiblePackages.length === 0 ? (
          <Banner variant="info">No npm packages match this search.</Banner>
        ) : (
          <ul className="catalog-grid">
            {visiblePackages.map((npmPackage) => (
              <li className="catalog-item" key={npmPackage.name}>
                <article className="catalog-card">
                  <div className="catalog-card-body">
                    <Text variant="heading" as="h3">
                      <Link href={npmPackage.url} external>
                        {npmPackage.name}
                      </Link>
                    </Text>
                    <Text variant="body" color="dim" as="p">
                      {npmPackage.description}
                    </Text>
                  </div>

                  <div className="catalog-card-footer">
                    <Badge variant="neutral">v{npmPackage.version}</Badge>
                    <Text variant="caption" color="dim">
                      Published{" "}
                      <time dateTime={npmPackage.publishedAt}>
                        {npmPackage.publishedAt}
                      </time>
                    </Text>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </Clamp>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
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
        <RepositoryCatalog />
        <NpmPackageCatalog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
