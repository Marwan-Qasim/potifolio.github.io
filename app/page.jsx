const socials = [
  {
    name: "GitHub",
    href: "https://github.com/voisnoa",
    label: "Visit GitHub profile",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2.5c-5.24 0-9.5 4.26-9.5 9.52 0 4.2 2.72 7.76 6.48 9.02.48.09.66-.21.66-.47 0-.23-.01-1-.01-1.82-2.64.58-3.19-1.13-3.19-1.13-.43-1.1-1.06-1.39-1.06-1.39-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.47 2.24 1.05 2.79.8.09-.62.34-1.05.61-1.29-2.11-.24-4.34-1.06-4.34-4.71 0-1.04.37-1.88.98-2.54-.1-.24-.42-1.2.09-2.5 0 0 .8-.26 2.62.97a9.07 9.07 0 0 1 4.78 0c1.81-1.23 2.61-.97 2.61-.97.51 1.3.19 2.26.09 2.5.61.66.97 1.5.97 2.54 0 3.66-2.23 4.47-4.35 4.71.35.3.66.88.66 1.77 0 1.28-.01 2.31-.01 2.63 0 .26.17.56.67.47a9.53 9.53 0 0 0 6.47-9.02A9.5 9.5 0 0 0 12 2.5Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marwan-Qasim/",
    label: "Visit LinkedIn profile",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.56 8.78A1.78 1.78 0 1 1 6.57 5.2a1.78 1.78 0 0 1-.01 3.57Zm1.5 1.52H5.08V20h2.98v-9.7Zm4.76 0H9.87V20h2.95v-5.09c0-1.34.25-2.65 1.91-2.65 1.64 0 1.66 1.53 1.66 2.74V20h2.96v-5.6c0-2.75-.59-4.86-3.8-4.86-1.54 0-2.56.84-2.98 1.65h-.04v-1.39Z"
          fill="currentColor"
        />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <main className="home-shell">
      <section className="hero" aria-label="Intro">
        <h1 className="hero-title">Marwan Qasim</h1>

        <nav className="socials" aria-label="Social links">
          {socials.map((social) => (
            <a
              key={social.name}
              className="social-link"
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}
