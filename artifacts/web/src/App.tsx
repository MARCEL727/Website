import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDown, ArrowDownRight, ArrowUp, Github, Instagram, Mail, Menu, X } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = 'MARCEL — Dirt on Tires';
    const description = 'MARCEL is an Indonesian creator building the Dirt on Tires world from the ground up.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const copyEmail = async () => {
    const email = 'hello@dirton.tires';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main className="site-shell" id="top">
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#top" onClick={closeMenu} data-testid="link-brand">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span className="brand-name">MARCEL <span>/</span> DOT</span>
          </a>
          <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} id="primary-navigation" aria-label="Primary navigation">
            <a className="nav-link" href="#about" onClick={closeMenu} data-testid="link-about">About</a>
            <a className="nav-link" href="#world" onClick={closeMenu} data-testid="link-world">The world</a>
            <a className="nav-link" href="#contact" onClick={closeMenu} data-testid="link-contact">Contact</a>
          </nav>
          <div className="header-status" aria-label="Current status">
            <span className="status-dot" aria-hidden="true" />
            In the field
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow reveal"><span className="eyebrow-line" /> Indonesian creator / 001</div>
          <h1 className="hero-title reveal delay-1" id="hero-title">
            Dirt<br />
            <span className="title-outline">on</span><br />
            <span className="title-accent">tires</span>
          </h1>
          <p className="hero-intro reveal delay-2">
            MARCEL is a creator from Indonesia, documenting the machines, places, and
            people that choose the long way through.
          </p>
          <div className="hero-actions reveal delay-3">
            <a className="button-primary" href="#world" data-testid="button-explore">
              Enter the world <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a className="button-ghost" href="#contact" data-testid="button-connect">Say hello</a>
          </div>
        </div>
        <div className="hero-art-wrap" aria-label="Abstract Dirt on Tires field study graphic">
          <div className="hero-art">
            <span className="art-label">Field study / Java, ID</span>
            <span className="art-wheel" aria-hidden="true" />
            <span className="art-stamp">NO<br />SHORTCUTS</span>
            <span className="art-coordinates">06° 12' S<br />106° 49' E<br /><br />WET SEASON / 24</span>
          </div>
        </div>
        <div className="scroll-cue"><ArrowDown size={14} aria-hidden="true" /> Scroll to roam</div>
      </section>

      <div className="ticker" aria-label="Dirt on Tires values">
        <div className="ticker-track">
          {['Ride curious', 'Make dust', 'Stay close to the ground', 'Indonesia, always', 'Ride curious', 'Make dust', 'Stay close to the ground', 'Indonesia, always'].map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section manifesto" id="about" aria-labelledby="about-title">
        <div>
          <div className="section-rule">01 / The rider</div>
          <h2 id="about-title">Made of<br /><em>motion.</em></h2>
        </div>
        <div className="manifesto-copy">
          <p className="manifesto-lede">
            Dirt on Tires is a living notebook for the road between a map and a memory.
            MARCEL follows the feeling, not the finish line.
          </p>
          <div className="manifesto-body">
            <p>
              From wet volcanic tracks to the quiet edge of a city, I make photographs,
              films, and field notes about off-road culture in Indonesia. The work is
              tactile, human, and a little bit weathered.
            </p>
            <p>
              No polished showroom stories. Just good machines, honest hands, and the
              places that ask you to slow down enough to see them.
            </p>
          </div>
          <span className="signature">— Marcel</span>
        </div>
      </section>

      <section className="world-section" id="world" aria-labelledby="world-title">
        <div className="section">
          <div className="section-rule">02 / The archive</div>
          <div className="section-heading">
            <h2 id="world-title">A world<br />with <span style={{ color: 'var(--orange-dark)' }}>grip.</span></h2>
            <p>Selected coordinates from the Dirt on Tires universe. Texture over polish. Process over posing.</p>
          </div>
          <div className="field-grid" aria-label="Dirt on Tires visual archive">
            <article className="field-card" data-testid="card-field-01">
              <span className="field-number">01</span>
              <div className="field-card-content">
                <div className="field-meta"><span>Terrain / rough</span><span>01—04</span></div>
                <h3>Where the<br />track starts.</h3>
              </div>
            </article>
            <article className="field-card" data-testid="card-field-02">
              <span className="field-number">02</span>
              <div className="field-card-content">
                <div className="field-meta"><span>Machine / trusted</span><span>02—04</span></div>
                <h3>Built to<br />be used.</h3>
              </div>
            </article>
            <article className="field-card" data-testid="card-field-03">
              <span className="field-number">03</span>
              <div className="field-card-content">
                <div className="field-meta"><span>Light / fleeting</span><span>03—04</span></div>
                <h3>Chase the<br />good hour.</h3>
              </div>
            </article>
            <article className="field-card" data-testid="card-field-04">
              <span className="field-number">04</span>
              <div className="field-card-content">
                <div className="field-meta"><span>People / essential</span><span>04—04</span></div>
                <h3>Never ride<br />alone.</h3>
              </div>
            </article>
          </div>
          <div className="coordinates" aria-label="Dirt on Tires principles">
            <article className="coordinate">
              <span className="coordinate-index">A / 001</span>
              <h3>Ride</h3>
              <p>Follow the line that disappears around the corner.</p>
            </article>
            <article className="coordinate">
              <span className="coordinate-index">B / 002</span>
              <h3>Record</h3>
              <p>Keep the mud on the frame. Keep the story honest.</p>
            </article>
            <article className="coordinate">
              <span className="coordinate-index">C / 003</span>
              <h3>Repeat</h3>
              <p>Come back with better questions, not bigger answers.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section contact-inner">
          <div>
            <div className="section-rule">03 / Open frequency</div>
            <h2 id="contact-title">Let’s get<br /><span>dusty.</span></h2>
          </div>
          <div className="contact-detail">
            <p>For a ride, a story, a good location, or a reason to leave the pavement — reach out.</p>
            <div className="contact-links">
              <button className={`contact-link ${copied ? 'is-copied' : ''}`} type="button" onClick={copyEmail} aria-label="Copy Marcel's email address" data-testid="button-copy-email">
                <Mail size={15} aria-hidden="true" /> {copied ? 'Email copied' : 'Copy email'}
              </button>
              <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer" data-testid="link-github">
                <Github size={15} aria-hidden="true" /> GitHub
              </a>
              <a className="contact-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer" data-testid="link-instagram">
                <Instagram size={15} aria-hidden="true" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-copy">© {new Date().getFullYear()} Marcel / Dirt on Tires / Indonesia</span>
          <button className="footer-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-testid="button-back-top">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </footer>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;