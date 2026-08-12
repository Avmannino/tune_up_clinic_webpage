import "./App.css";

const REGISTRATION_URL =
  "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4099945#SelectRegistrationType";

const DATES = [
  {
    day: "Saturday",
    date: "9/5",
  },
  {
    day: "Sunday",
    date: "9/6",
  },
  {
    day: "Monday",
    date: "9/7",
  },
];

const SCHEDULE = [
  {
    group: "Mites",
    time: "8:10 AM – 9:10 AM",
  },
  {
    group: "Squirts",
    time: "9:20 AM – 10:20 AM",
  },
];

const PRICING = [
  {
    days: "1 Day",
    price: "$70",
  },
  {
    days: "2 Days",
    price: "$120",
  },
  {
    days: "3 Days",
    price: "$150",
  },
];

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="inline-icon"
      aria-hidden="true"
    >
      <path
        d="M7 2v3M17 2v3M3.5 9h17M5.5 4.5h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="button-arrow"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  return (
    <main className="tune-up-page">
      {/* HERO */}
      <section className="hero">
        <div className="rink-line rink-line-top" />

        <div className="page-shell hero-content">
          <div className="hero-copy">
            <img
              className="hero-logo"
              src={`${import.meta.env.BASE_URL}wings-logo.png`}
              alt="Wings Arena logo"
            />

            <p className="hero-eyebrow">Labor Day Weekend</p>

            <h1 className="hero-title">
              <span className="hero-title-top">Pre-Season</span>

              <span className="hero-title-main">
                <span className="hero-title-main-text">“Tune Up”</span>
              </span>

              <span className="hero-title-bottom">Clinic</span>
            </h1>

            <div className="hero-groups">
              Mites <span>&amp;</span> Squirts
            </div>

            <p className="hero-description">
              Get back on the ice before the season starts. The Pre-Season
              Tune Up gives players a chance to get their legs back, sharpen
              their skills and feel game-ready heading into the new season.
            </p>

            <div className="hero-date">
              <CalendarIcon />

              <span>
                Saturday, September 5 – Monday, September 7
              </span>
            </div>

            <a
              className="primary-button hero-button"
              href={REGISTRATION_URL}
              target="_top"
              rel="noopener noreferrer"
            >
              <span>Registration Now Open!</span>
              <ArrowIcon />
            </a>
          </div>

          <aside className="hero-side" aria-label="Clinic highlights">
            <div className="hero-feature">
              <div className="hero-feature-number">3</div>

              <div className="hero-feature-copy">
                <strong>Mornings</strong>
                <span>Labor Day Weekend</span>
              </div>
            </div>

            <div className="hero-feature">
              <div className="hero-feature-number">2</div>

              <div className="hero-feature-copy">
                <strong>Age Groups</strong>
                <span>Mites &amp; Squirts</span>
              </div>
            </div>

            <div className="hero-feature hero-feature-last">
              <div className="hero-feature-number">1</div>

              <div className="hero-feature-copy">
                <strong>Hour Sessions</strong>
                <span>60 minutes on ice each day</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="schedule-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="section-eyebrow">September 5–7</p>

            <h2>On-Ice Schedule</h2>

            <p>
              Both groups skate at the same time each morning throughout
              Labor Day weekend.
            </p>
          </div>

          {/* DESKTOP / LARGE TABLET */}
          <div className="schedule-board">
            <div className="schedule-date-row">
              <div className="schedule-corner">
                Group
              </div>

              {DATES.map((date) => (
                <div className="schedule-date" key={date.day}>
                  <span>{date.day}</span>
                  <strong>{date.date}</strong>
                </div>
              ))}
            </div>

            {SCHEDULE.map((item) => (
              <div className="schedule-row" key={item.group}>
                <div className="schedule-group">
                  <strong>{item.group}</strong>
                </div>

                {DATES.map((date) => (
                  <div
                    className="schedule-time"
                    key={`${item.group}-${date.day}`}
                  >
                    {item.time}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET */}
          <div className="mobile-schedule">
            {DATES.map((date) => (
              <article className="mobile-day-card" key={date.day}>
                <header className="mobile-day-header">
                  <span>{date.day}</span>
                  <strong>{date.date}</strong>
                </header>

                <div className="mobile-day-content">
                  {SCHEDULE.map((item) => (
                    <div
                      className="mobile-session"
                      key={`${date.day}-${item.group}`}
                    >
                      <div className="mobile-session-group">
                        <strong>{item.group}</strong>
                      </div>

                      <span className="mobile-session-time">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / REGISTRATION */}
      <section className="registration-section">
        <div className="page-shell registration-layout">
          <div className="registration-copy">
            <p className="section-eyebrow section-eyebrow-light">
              Clinic Pricing
            </p>

            <h2>Choose the Days That Work for You</h2>

            <p className="registration-description">
              Join us for one, two or all three days of the clinic. The more
              time players spend back on the ice, the more comfortable they
              can feel when the season gets underway.
            </p>

            <div className="pricing-grid">
              {PRICING.map((option) => (
                <article className="price-card" key={option.days}>
                  <span>{option.days}</span>
                  <strong>{option.price}</strong>
                </article>
              ))}
            </div>
          </div>

          <aside className="registration-card">
            <div className="registration-card-heading">
              <span>Registration</span>
              <h3>Reserve Your Spot</h3>
            </div>

            <div className="qr-frame">
              <div className="qr-inner">
                <img
                  src={`${import.meta.env.BASE_URL}qr-code.png`}
                  alt="Pre-Season Tune Up Clinic registration QR code"
                  loading="lazy"
                />
              </div>

              <span className="qr-corner qr-corner-top-left" />
              <span className="qr-corner qr-corner-top-right" />
              <span className="qr-corner qr-corner-bottom-left" />
              <span className="qr-corner qr-corner-bottom-right" />
            </div>

            <p className="qr-instruction">
              Scan the QR code with your phone or use the button below.
            </p>

            <a
              className="primary-button registration-button"
              href={REGISTRATION_URL}
              target="_top"
              rel="noopener noreferrer"
            >
              <span>Register Now</span>
              <ArrowIcon />
            </a>
          </aside>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing-section">
        <div className="page-shell closing-content">
          <span className="closing-line" />

          <div className="closing-copy">
            <h2>
              Shake Off the Rust. Get Ready for the Season.
            </h2>
          </div>

          <span className="closing-line" />
        </div>
      </section>
    </main>
  );
}

export default App;