(function () {
  const cfg = window.SITE_CONFIG;
  const services = window.SERVICES || [];
  const year = new Date().getFullYear();
  const testimonials = [
    {
      name: "Daniel R.",
      role: "Homeowner",
      initials: "DR",
      avatar: "img/generated/testimonial-daniel-r.webp",
      text: "The request form helped me explain the AC problem clearly. The provider knew what to inspect before arriving, and the repair options were easy to compare."
    },
    {
      name: "Maya K.",
      role: "Townhome Owner",
      initials: "MK",
      avatar: "img/generated/testimonial-maya-k.webp",
      text: "I was not sure whether we needed duct cleaning or maintenance. The service pages made the difference obvious, and our airflow issue finally had a clear path."
    },
    {
      name: "Leon P.",
      role: "Property Manager",
      initials: "LP",
      avatar: "img/generated/testimonial-leon-p.webp",
      text: "For rental units, I need fast details and fewer back-and-forth calls. The HVAC request came through organized enough to route the job without confusion."
    },
    {
      name: "Erica M.",
      role: "Customer",
      initials: "EM",
      avatar: "img/generated/testimonial-erica-m.webp",
      text: "Our thermostat replacement was straightforward because compatibility questions were covered before the visit. That saved time and avoided a second appointment."
    },
    {
      name: "Nolan B.",
      role: "Homeowner",
      initials: "NB",
      avatar: "img/generated/testimonial-nolan-b.webp",
      text: "The emergency service information was clear about safety issues and what to do first. It helped us describe the leak and shutdown problem calmly."
    },
    {
      name: "Priya S.",
      role: "Small Business Owner",
      initials: "PS",
      avatar: "img/generated/testimonial-priya-s.webp",
      text: "We needed maintenance for a small office system. The site made it simple to separate routine tune-up needs from bigger equipment replacement questions."
    },
    {
      name: "Marcus T.",
      role: "Homeowner",
      initials: "MT",
      avatar: "img/generated/testimonial-marcus-t.webp",
      text: "I liked that each service page explained what might affect pricing. It made the conversation with the provider feel more practical from the start."
    },
    {
      name: "Helen W.",
      role: "Customer",
      initials: "HW",
      avatar: "img/generated/testimonial-helen-w.webp",
      text: "Our older system had weak cooling upstairs. The airflow and duct guidance helped us ask better questions instead of just saying the AC was not working."
    },
    {
      name: "Owen C.",
      role: "Condo Owner",
      initials: "OC",
      avatar: "img/generated/testimonial-owen-c.webp",
      text: "The installation information helped me understand sizing, placement, and controls before I requested quotes. It felt less like guessing."
    },
    {
      name: "Sara L.",
      role: "Homeowner",
      initials: "SL",
      avatar: "img/generated/testimonial-sara-l.webp",
      text: "The maintenance checklist was useful. We knew what the visit should cover and what might need a separate quote if the technician found deeper issues."
    }
  ];

  const serviceUrl = (slug) => `services/${slug}.html`;
  const rootPrefix = location.pathname.includes("/services/") ? "../" : "";
  const pageName = location.pathname.split("/").pop() || "index.html";
  const isServicesPage = pageName === "services.html" || location.pathname.includes("/services/");

  function icon(name) {
    return `<i data-lucide="${name}" aria-hidden="true"></i>`;
  }

  function hydrateText(selector, value) {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = value || "";
    });
  }

  function hydrateAttr(selector, attr, value) {
    document.querySelectorAll(selector).forEach((el) => {
      if (value) el.setAttribute(attr, value);
    });
  }

  function renderHeader() {
    const groups = services.reduce((acc, service) => {
      acc[service.category] = acc[service.category] || [];
      acc[service.category].push(service);
      return acc;
    }, {});

    const servicesMenu = Object.entries(groups)
      .map(([group, items]) => `
        <a class="service-group" href="${rootPrefix}${serviceUrl(items[0].slug)}">
          <div class="service-group-title">${icon(items[0].icon)}<span>${group}</span></div>
          <div class="service-group-links">
            ${items.map((item) => `<span>${item.title}</span>`).join("")}
          </div>
        </a>
      `)
      .join("");

    const header = document.querySelector("[data-site-header]");
    if (!header) return;
    header.innerHTML = `
      <div class="topbar">
        <div class="topbar-contact">
          <a href="tel:${cfg.phone}" data-phone-link>${icon("phone")}${cfg.phoneDisplay}</a>
          <a href="mailto:${cfg.email}" data-email-link>${icon("mail")}${cfg.email}</a>
          <span>${icon("clock")}${cfg.businessHours}</span>
        </div>
        <div class="topbar-social" aria-label="Social links">
          <a href="#" aria-label="Facebook">${icon("facebook")}</a>
          <a href="#" aria-label="X">${icon("twitter")}</a>
          <a href="#" aria-label="YouTube">${icon("youtube")}</a>
          <a href="#" aria-label="Instagram">${icon("instagram")}</a>
        </div>
      </div>
      <header class="site-header">
        <a class="brand" href="${rootPrefix}index.html" aria-label="${cfg.companyName} home">
          <span class="brand-mark">${icon("waves")}</span>
          <span data-company-name>${cfg.companyName}</span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
          ${icon("menu")}
        </button>
        <nav class="main-nav" aria-label="Main navigation">
          <a href="${rootPrefix}index.html" class="${pageName === "index.html" ? "active" : ""}">Home</a>
          <a href="${rootPrefix}about.html" class="${pageName === "about.html" ? "active" : ""}">About Us</a>
          <div class="nav-dropdown">
            <a href="${rootPrefix}services.html" class="${isServicesPage ? "active" : ""}">Services <span class="nav-chevron">${icon("chevron-down")}</span></a>
            <div class="mega-menu">${servicesMenu}</div>
          </div>
          <a href="${rootPrefix}index.html#faq">FAQ</a>
          <a href="${rootPrefix}contact.html" class="${pageName === "contact.html" ? "active" : ""}">Contact</a>
        </nav>
        <a class="btn btn-primary header-cta" href="${rootPrefix}contact.html">${cfg.ctaPrimary}</a>
      </header>
      <div class="mobile-panel" hidden>
        <a class="mobile-brand" href="${rootPrefix}index.html">${icon("snowflake")}<strong data-company-name>${cfg.companyName}</strong></a>
        <a href="${rootPrefix}index.html">Home</a>
        <a href="${rootPrefix}about.html">About</a>
        <a href="${rootPrefix}services.html">Services</a>
        <button class="mobile-services-toggle" type="button" aria-expanded="false">Service Pages ${icon("chevron-down")}</button>
        <div class="mobile-services" hidden>
          ${services.map((service) => `<a href="${rootPrefix}${serviceUrl(service.slug)}">${service.title}</a>`).join("")}
        </div>
        <a href="${rootPrefix}index.html#faq">FAQ</a>
        <a href="${rootPrefix}contact.html">Contact</a>
        <a href="tel:${cfg.phone}" data-phone-link>${cfg.phoneButtonLabel}: ${cfg.phoneDisplay}</a>
        <a href="mailto:${cfg.email}" data-email-link>${cfg.email}</a>
      </div>
    `;
  }

  function renderFooter() {
    const footer = document.querySelector("[data-site-footer]");
    if (!footer) return;
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-grid">
          <div class="footer-about">
            <a class="brand footer-brand" href="${rootPrefix}index.html">
              <span class="brand-mark">${icon("waves")}</span>
              <span data-company-name>${cfg.companyName}</span>
            </a>
            <p data-footer-text-primary>${cfg.footerTextPrimary}</p>
          </div>
          <div class="footer-links">
            <h2>Company</h2>
            <a href="${rootPrefix}index.html">Home</a>
            <a href="${rootPrefix}services.html">Our Services</a>
            <a href="${rootPrefix}about.html">About Us</a>
            <a href="${rootPrefix}index.html#faq">FAQ</a>
            <a href="${rootPrefix}contact.html">Contact</a>
          </div>
          <div class="footer-links">
            <h2>Our Services</h2>
            ${services.slice(0, 6).map((service) => `<a href="${rootPrefix}${serviceUrl(service.slug)}">${service.title}</a>`).join("")}
          </div>
          <div class="footer-contact">
            <h2>${cfg.businessHours.includes("24") ? cfg.businessHours : "24 Hours & Emergencies"}</h2>
            <a class="footer-phone" href="tel:${cfg.phone}" data-phone-link>
              <span>${icon("phone")}</span>
              <strong>${cfg.phoneDisplay}</strong>
            </a>
            <div class="footer-contact-item">
              ${icon("map-pin")}
              <div>
                <strong>Office Location</strong>
                <span data-company-address>${cfg.addressLine1}, ${cfg.addressLine2}</span>
              </div>
            </div>
            <div class="footer-contact-item">
              ${icon("mail")}
              <div>
                <strong>Send a Message</strong>
                <a href="mailto:${cfg.email}" data-email-link>${cfg.email}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-disclaimer">
          <p data-footer-company-line>${cfg.companyName} - ${cfg.addressLine1}, ${cfg.addressLine2} - ${cfg.companyId}</p>
          <p data-disclaimer-short>${cfg.disclaimerShort}</p>
        </div>
        <div class="footer-bottom">
          <span class="footer-copyright">&copy; ${year} ${cfg.copyrightLine}</span>
          <nav class="footer-legal-links" aria-label="Footer legal links">
            <a href="${rootPrefix}terms.html">Terms & Conditions</a>
            <a href="${rootPrefix}privacy.html">Privacy Policy</a>
            <a href="${rootPrefix}cookie-policy.html">Cookie Policy</a>
          </nav>
        </div>
        <p class="footer-legal-disclaimer" data-footer-disclaimer>${cfg.footerDisclaimer}</p>
      </footer>
    `;
  }

  function hydrateConfig() {
    hydrateText("[data-company-name]", cfg.companyName);
    hydrateText("[data-company-legal-name]", cfg.companyLegalName);
    hydrateText("[data-company-id]", cfg.companyId);
    hydrateText("[data-phone-text]", cfg.phoneDisplay);
    hydrateText("[data-phone-label]", cfg.phoneButtonLabel);
    hydrateText("[data-email-text]", cfg.email);
    hydrateText("[data-website]", cfg.website);
    hydrateText("[data-cta-primary]", cfg.ctaPrimary);
    hydrateText("[data-service-area]", cfg.serviceArea);
    hydrateText("[data-business-hours]", cfg.businessHours);
    hydrateText("[data-company-address]", `${cfg.addressLine1}, ${cfg.addressLine2}`);
    hydrateText("[data-disclaimer-full]", cfg.disclaimerFull);
    hydrateText("[data-year]", year);
    hydrateAttr("[data-phone-link]", "href", `tel:${cfg.phone}`);
    hydrateAttr("[data-email-link]", "href", `mailto:${cfg.email}`);
    document.title = document.title.replace("{{companyName}}", cfg.companyName);
  }

  function renderServiceCards() {
    document.querySelectorAll("[data-services-grid]").forEach((grid) => {
      grid.innerHTML = services.map((service) => `
        <article class="service-card reveal">
          <a href="${serviceUrl(service.slug)}" class="service-image-link" aria-label="${service.title}">
            <img src="${service.image}" alt="${service.title}" loading="lazy">
          </a>
          <div class="service-card-body">
            <h2>${service.title}</h2>
            <p>${service.short}</p>
            <a class="text-link" href="${serviceUrl(service.slug)}">Learn more ${icon("arrow-right")}</a>
          </div>
        </article>
      `).join("");
    });

    document.querySelectorAll("[data-services-compact]").forEach((wrap) => {
      wrap.innerHTML = services.map((service) => `
        <a class="compact-service reveal" href="${serviceUrl(service.slug)}">
          ${icon(service.icon)}
          <span>
            <strong>${service.title}</strong>
            <small>${service.short}</small>
          </span>
          ${icon("arrow-right")}
        </a>
      `).join("");
    });
  }

  function initServiceSliders() {
    document.querySelectorAll("[data-services-slider]").forEach((slider) => {
      const track = slider.querySelector(".services-slider-track");
      const prev = slider.querySelector("[data-slider-prev]");
      const next = slider.querySelector("[data-slider-next]");
      if (!track || !prev || !next) return;

      const getStep = () => {
        const card = track.querySelector(".service-card");
        if (!card) return track.clientWidth;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        return card.getBoundingClientRect().width + gap;
      };

      const updateButtons = () => {
        const max = Math.max(0, track.scrollWidth - track.clientWidth - 2);
        prev.disabled = track.scrollLeft <= 2;
        next.disabled = track.scrollLeft >= max;
      };

      prev.addEventListener("click", () => {
        track.scrollBy({ left: -getStep(), behavior: "smooth" });
      });

      next.addEventListener("click", () => {
        track.scrollBy({ left: getStep(), behavior: "smooth" });
      });

      track.addEventListener("scroll", updateButtons, { passive: true });
      window.addEventListener("resize", updateButtons);
      updateButtons();
      setTimeout(updateButtons, 250);
    });
  }

  function renderTestimonials() {
    const track = document.querySelector("[data-testimonials-track]");
    const dots = document.querySelector("[data-testimonials-dots]");
    if (!track || !dots) return;

    const stars = Array.from({ length: 5 }, () => icon("star")).join("");
    const carouselItems = [...testimonials, ...testimonials];
    track.innerHTML = carouselItems.map((item, index) => {
      const isClone = index >= testimonials.length;
      return `
      <article class="testimonial-card reveal" data-testimonial-card${isClone ? ' aria-hidden="true"' : ""}>
        <span class="testimonial-quote">${icon("quote")}</span>
        <img class="testimonial-avatar" src="${rootPrefix}${item.avatar}" alt="${item.name} customer portrait" loading="lazy">
        <strong>${item.name}</strong>
        <small>${item.role}</small>
        <p>"${item.text}"</p>
        <div class="testimonial-stars" aria-label="5 out of 5 stars">${stars}</div>
      </article>
    `;
    }).join("");

    dots.innerHTML = testimonials.map((_, index) => `
      <button type="button" data-testimonial-dot="${index}" aria-label="Show testimonial ${index + 1}"></button>
    `).join("");
  }

  function initTestimonialsCarousel() {
    const carousel = document.querySelector("[data-testimonials-carousel]");
    if (!carousel) return;
    const track = carousel.querySelector("[data-testimonials-track]");
    const dots = [...carousel.querySelectorAll("[data-testimonial-dot]")];
    if (!track || !dots.length) return;

    const getStep = () => {
      const card = track.querySelector("[data-testimonial-card]");
      if (!card) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    };

    let animationId;
    let lastFrameTime;
    let isPaused = false;

    const getRawIndex = () => Math.round(track.scrollLeft / getStep());
    const getActiveIndex = () => ((getRawIndex() % dots.length) + dots.length) % dots.length;

    const updateDots = () => {
      const active = Math.max(0, Math.min(dots.length - 1, getActiveIndex()));
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === active);
        dot.setAttribute("aria-current", index === active ? "true" : "false");
      });
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        track.scrollTo({ left: getStep() * index, behavior: "auto" });
        updateDots();
      });
    });

    const getLoopWidth = () => getStep() * dots.length;

    const normalizeLoopPosition = () => {
      const loopWidth = getLoopWidth();
      if (loopWidth <= 0) return;
      while (track.scrollLeft >= loopWidth) {
        track.scrollLeft -= loopWidth;
      }
    };

    const animate = (timestamp) => {
      if (!lastFrameTime) lastFrameTime = timestamp;
      const delta = timestamp - lastFrameTime;
      lastFrameTime = timestamp;
      if (!isPaused) {
        track.scrollLeft += delta * 0.045;
        normalizeLoopPosition();
        updateDots();
      }
      animationId = window.requestAnimationFrame(animate);
    };

    const startAutoplay = () => {
      window.cancelAnimationFrame(animationId);
      lastFrameTime = undefined;
      animationId = window.requestAnimationFrame(animate);
    };

    carousel.addEventListener("focusin", () => {
      isPaused = true;
    });

    carousel.addEventListener("focusout", () => {
      isPaused = false;
      lastFrameTime = undefined;
    });

    document.addEventListener("visibilitychange", () => {
      isPaused = document.hidden;
      if (!isPaused) lastFrameTime = undefined;
    });

    track.addEventListener("scroll", () => {
      updateDots();
    }, { passive: true });
    window.addEventListener("resize", () => {
      normalizeLoopPosition();
      updateDots();
    });
    updateDots();
    setTimeout(updateDots, 250);
    startAutoplay();
  }

  function initHomeFaq() {
    const faq = document.querySelector("[data-home-faq]");
    if (!faq) return;
    const items = [...faq.querySelectorAll(".home-faq-item")];

    const setPanelHeight = (item, height) => {
      const panel = item.querySelector("p");
      if (panel) panel.style.maxHeight = `${height}px`;
    };

    const openItem = (item) => {
      const panel = item.querySelector("p");
      if (!panel) return;
      item.open = true;
      item.querySelector("summary")?.setAttribute("aria-expanded", "true");
      setPanelHeight(item, 0);
      requestAnimationFrame(() => {
        setPanelHeight(item, panel.scrollHeight + 24);
      });
    };

    const closeItem = (item) => {
      const panel = item.querySelector("p");
      if (!panel || !item.open) return;
      setPanelHeight(item, panel.scrollHeight + 24);
      requestAnimationFrame(() => {
        setPanelHeight(item, 0);
      });
      window.setTimeout(() => {
        if (panel.style.maxHeight === "0px") {
          item.open = false;
          item.querySelector("summary")?.setAttribute("aria-expanded", "false");
        }
      }, 360);
    };

    items.forEach((item) => {
      const summary = item.querySelector("summary");
      const panel = item.querySelector("p");
      summary?.setAttribute("aria-expanded", item.open ? "true" : "false");
      if (item.open && panel) setPanelHeight(item, panel.scrollHeight + 24);
      summary?.addEventListener("click", (event) => {
        event.preventDefault();
        const shouldClose = item.open;
        items.forEach((other) => {
          if (other !== item) closeItem(other);
        });
        if (shouldClose) {
          closeItem(item);
        } else {
          openItem(item);
        }
      });
    });

    window.addEventListener("resize", () => {
      items.forEach((item) => {
        const panel = item.querySelector("p");
        if (item.open && panel) setPanelHeight(item, panel.scrollHeight + 24);
      });
    });
  }

  function renderServicePage() {
    const mount = document.querySelector("[data-service-detail]");
    if (!mount) return;
    const slug = document.body.dataset.serviceSlug;
    const service = services.find((item) => item.slug === slug) || services[0];
    if (!service) return;
    document.title = `${service.title} | ${cfg.companyName}`;
    const related = service.related
      .map((rel) => services.find((item) => item.slug === rel))
      .filter(Boolean);

    mount.innerHTML = `
      <section class="service-hero">
        <div class="service-hero-inner reveal">
          <h1>${service.title}</h1>
          <nav class="page-breadcrumb" aria-label="Breadcrumb">
            <a href="../index.html">Home</a>
            <a href="../services.html">Services</a>
            <span>${service.title}</span>
          </nav>
        </div>
      </section>
      <section class="service-editorial">
        <div class="service-editorial-copy reveal">
          <h2>${service.title} that starts with the actual problem.</h2>
          <p>${service.intro}</p>
          <p>Instead of treating the request as a one-line booking, this service path helps organize the symptoms, equipment type, timing, and access notes a provider needs before recommending the next step. That context matters whether the answer is a small repair, a deeper inspection, a control adjustment, or a longer-term system plan.</p>
          <div class="service-soft-note">
            ${icon("clipboard-check")}
            <span>Good service starts before the visit: clear symptoms, clear scope, and fewer assumptions.</span>
          </div>
        </div>
        <div class="service-editorial-media reveal reveal-right">
          <img src="../${service.heroImage}" alt="${service.title}">
        </div>
      </section>

      <section class="service-detail-band">
        <div class="service-detail-heading reveal">
          <h2>What this service can include</h2>
          <p>Every job is different, but these are the practical checks and service points commonly reviewed before work is approved.</p>
        </div>
        <div class="service-line-list">
          ${service.included.map((item) => `<div class="service-line-item reveal">${icon("check")}<span>${item}</span></div>`).join("")}
        </div>
      </section>

      <section class="service-image-split">
        <div class="service-image-panel reveal reveal-left">
          <img src="../${service.image}" alt="${service.title} service detail">
        </div>
        <div class="service-image-copy reveal reveal-right">
          <h2>When this service makes sense</h2>
          <p>Use this path when the symptoms point toward ${service.category.toLowerCase()} work, but the final scope still needs to be confirmed by a qualified provider. The goal is to describe the situation well enough that the first response is useful, not vague.</p>
          <ul class="service-plain-list">
            ${service.bestFor.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </section>

      <section class="service-timeline-section">
        <div class="service-detail-heading reveal">
          <h2>How the visit usually works</h2>
          <p>The process stays flexible, but most visits move through the same rhythm: listen, inspect, explain, complete approved work, and test.</p>
        </div>
        <div class="service-timeline">
          ${service.process.map((step, index) => `
            <div class="service-timeline-step reveal">
              <strong>${String(index + 1).padStart(2, "0")}</strong>
              <p>${step}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="service-scope-section">
        <div class="service-scope-column reveal">
          <h2>Systems and situations covered</h2>
          <p>These examples help frame what the provider may review once the request is submitted.</p>
          <ul>${service.options.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="service-scope-column reveal reveal-right">
          <h2>Good to know before booking</h2>
          <p>Details like age, access, parts, urgency, and existing system condition can affect the final recommendation.</p>
          <ul>${service.details.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </section>
      <section class="faq-section">
        <div class="section-heading reveal">
          <h2>Common questions</h2>
        </div>
        <div class="faq-list">
          ${service.faq.map((item) => `
            <details class="reveal">
              <summary>${item.q}</summary>
              <p>${item.a}</p>
            </details>
          `).join("")}
        </div>
      </section>
      <section class="service-related-section">
        <div class="service-detail-heading reveal">
          <h2>Complete the comfort cycle</h2>
          <p>HVAC work is connected. These related services may help round out the next step if the issue points beyond a single visit.</p>
        </div>
        <div class="service-related-list">
          ${related.map((item) => `
            <a class="service-related-link reveal" href="${item.slug}.html">
              ${icon(item.icon)}
              <span>
                <strong>${item.title}</strong>
                <small>${item.short}</small>
              </span>
              ${icon("arrow-right")}
            </a>
          `).join("")}
        </div>
      </section>
    `;
  }

  function setupInteractions() {
    const siteHeader = document.querySelector("[data-site-header]");
    const setHeaderState = () => {
      if (siteHeader) siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });

    const toggle = document.querySelector(".menu-toggle");
    const panel = document.querySelector(".mobile-panel");
    if (toggle && panel) {
      toggle.addEventListener("click", () => {
        const open = panel.hasAttribute("hidden");
        panel.toggleAttribute("hidden", !open);
        toggle.setAttribute("aria-expanded", String(open));
      });
    }

    const serviceToggle = document.querySelector(".mobile-services-toggle");
    const servicePanel = document.querySelector(".mobile-services");
    if (serviceToggle && servicePanel) {
      serviceToggle.addEventListener("click", () => {
        const open = servicePanel.hasAttribute("hidden");
        servicePanel.toggleAttribute("hidden", !open);
        serviceToggle.setAttribute("aria-expanded", String(open));
      });
    }

    document.querySelectorAll("[data-contact-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const msg = cfg.formSuccessMessage
          .replace("{company}", cfg.companyName)
          .replace("{email}", cfg.email);
        const target = form.querySelector("[data-form-success]");
        if (target) {
          target.textContent = msg;
          target.hidden = false;
        }
        form.reset();
      });
    });

    const cookieKey = `cookie_pref_${cfg.companyName.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
    const banner = document.querySelector("[data-cookie-banner]");
    if (banner && !localStorage.getItem(cookieKey)) {
      banner.hidden = false;
      document.body.classList.add("cookie-open");
      banner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
        button.addEventListener("click", () => {
          localStorage.setItem(cookieKey, button.dataset.cookieChoice);
          banner.hidden = true;
          document.body.classList.remove("cookie-open");
        });
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  function renderCookieBanner() {
    const el = document.querySelector("[data-cookie-banner]");
    if (!el) return;
    el.innerHTML = `
      <div>
        <strong>Cookie preferences</strong>
        <p>We use essential cookies and optional analytics signals to understand site performance. Read our <a href="${rootPrefix}cookie-policy.html">Cookie Policy</a>.</p>
      </div>
      <div class="cookie-actions">
        <button class="btn btn-outline" type="button" data-cookie-choice="declined">Decline</button>
        <button class="btn btn-primary" type="button" data-cookie-choice="accepted">Accept</button>
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    hydrateConfig();
    renderServiceCards();
    initServiceSliders();
    renderTestimonials();
    initTestimonialsCarousel();
    initHomeFaq();
    renderServicePage();
    renderCookieBanner();
    setupInteractions();
    if (window.lucide) window.lucide.createIcons();
  });
})();
