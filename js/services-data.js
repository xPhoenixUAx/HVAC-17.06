window.SERVICES = [
  {
    slug: "ac-repair",
    title: "AC Repair Service",
    short: "Fast diagnostics and repair for weak airflow, warm air, leaks, noise, and system shutdowns.",
    intro: "When cooling stops feeling reliable, a focused AC repair visit helps identify the cause and restore comfortable airflow without guesswork.",
    image: "img/generated/service-card-ac-repair.webp",
    heroImage: "img/generated/ac-repair.webp",
    category: "Cooling",
    icon: "snowflake",
    included: ["System performance check", "Thermostat and control review", "Refrigerant and drainage inspection", "Electrical and safety checks", "Repair options explained before work begins"],
    options: ["Central air systems", "Ductless mini-splits", "Wall-mounted units", "Heat pump cooling issues"],
    bestFor: ["Warm air from vents", "Short cycling", "Unusual noises", "Water near the indoor unit", "Uneven room temperatures"],
    process: ["Listen to symptoms and inspect the system", "Test controls, airflow, and operating pressures", "Explain the issue and repair choices", "Complete approved repair", "Run final cooling and safety checks"],
    details: ["Emergency issues may require temporary stabilization before a full part replacement.", "Final pricing depends on parts, access, system age, and provider availability."],
    faq: [
      { q: "Can an AC be repaired the same day?", a: "Many common issues can be handled during the first visit when parts are available." },
      { q: "Should I repair or replace?", a: "The provider can compare repair cost, system age, efficiency, and expected reliability." }
    ],
    related: ["preventive-maintenance", "thermostat-upgrades", "emergency-hvac"]
  },
  {
    slug: "hvac-installation",
    title: "HVAC Installation",
    short: "Planning, sizing, and installation support for new heating and cooling equipment.",
    intro: "A good HVAC installation starts with proper sizing, duct or line-set review, and equipment choices matched to the home or business.",
    image: "img/generated/service-card-hvac-installation.webp",
    heroImage: "img/generated/hvac-installation.webp",
    category: "Installation",
    icon: "wrench",
    included: ["Load and comfort needs review", "Equipment recommendation", "Removal planning for old equipment", "New unit placement and connection", "Startup testing and walkthrough"],
    options: ["Central HVAC systems", "Heat pumps", "Ductless mini-splits", "Furnace and AC pairings", "Zoned comfort setups"],
    bestFor: ["Aging systems", "Major remodels", "Poor efficiency", "Frequent repairs", "Adding comfort to new spaces"],
    process: ["Review the property and comfort goals", "Confirm equipment size and placement", "Prepare installation scope", "Install approved equipment", "Test airflow, safety, and controls"],
    details: ["Permit needs vary by location and project type.", "Providers may recommend ductwork or electrical updates when required for safe performance."],
    faq: [
      { q: "How long does installation take?", a: "Many residential replacements take one to two days, while larger projects may need more time." },
      { q: "Will I get equipment choices?", a: "Yes. Providers usually explain efficiency levels, capacity, warranties, and budget ranges." }
    ],
    related: ["thermostat-upgrades", "duct-cleaning", "preventive-maintenance"]
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    short: "Routine tune-ups that help systems run cleaner, safer, and more efficiently through heavy-use seasons.",
    intro: "Preventive maintenance is the simplest way to catch small HVAC issues before they become disruptive repairs.",
    image: "img/generated/service-card-preventive-maintenance.webp",
    heroImage: "img/generated/preventive-maintenance.webp",
    category: "Maintenance",
    icon: "clipboard-check",
    included: ["Filter and airflow review", "Coil and cabinet inspection", "Electrical connection checks", "Drain and condensate review", "Heating or cooling performance test"],
    options: ["Spring cooling tune-up", "Fall heating tune-up", "Maintenance plan visits", "Light commercial maintenance"],
    bestFor: ["Before summer heat", "Before winter heating season", "Systems under warranty", "Rental properties", "Reducing surprise breakdowns"],
    process: ["Confirm system history", "Inspect key components", "Clean accessible service areas", "Test operating performance", "Share findings and next steps"],
    details: ["Maintenance does not guarantee a system will never fail, but it can reduce preventable issues.", "Some deep cleaning or part replacements may be quoted separately."],
    faq: [
      { q: "How often should HVAC maintenance happen?", a: "Most systems benefit from at least one visit per year, and heat pump systems often benefit from two." },
      { q: "Does maintenance improve efficiency?", a: "Clean filters, coils, drains, and controls can help the system operate closer to its intended performance." }
    ],
    related: ["ac-repair", "duct-cleaning", "hvac-installation"]
  },
  {
    slug: "duct-cleaning",
    title: "Duct Cleaning & Sealing",
    short: "Duct inspection, cleaning, and sealing support to improve airflow and reduce dust circulation.",
    intro: "Ductwork affects comfort, cleanliness, and efficiency. Cleaning and sealing can help air move where it should.",
    image: "img/generated/service-card-duct-cleaning.webp",
    heroImage: "img/generated/duct-cleaning.webp",
    category: "Indoor Air",
    icon: "wind",
    included: ["Vent and return inspection", "Duct access review", "Debris and dust removal", "Leak and gap identification", "Sealing recommendations"],
    options: ["Residential duct cleaning", "Return duct cleaning", "Minor duct sealing", "Airflow balancing guidance"],
    bestFor: ["Visible dust at vents", "Recent renovation dust", "Uneven airflow", "Suspected duct leaks", "Indoor air quality concerns"],
    process: ["Inspect accessible ducts and registers", "Protect nearby surfaces", "Clean selected duct paths", "Identify leaks or restrictions", "Review air quality recommendations"],
    details: ["Not every home needs duct cleaning; inspection helps decide whether it is worthwhile.", "Sealing scope depends on duct accessibility and condition."],
    faq: [
      { q: "Will duct cleaning remove all dust?", a: "It can reduce buildup in accessible areas, but household dust also comes from daily living and filtration habits." },
      { q: "Can sealing lower energy waste?", a: "Sealing accessible leaks may help reduce conditioned air loss and improve room-to-room consistency." }
    ],
    related: ["preventive-maintenance", "ac-repair", "thermostat-upgrades"]
  },
  {
    slug: "thermostat-upgrades",
    title: "Thermostat Upgrades",
    short: "Thermostat replacement, compatibility checks, setup, and comfort scheduling guidance.",
    intro: "The right thermostat can make daily comfort easier to manage and help the HVAC system respond more consistently.",
    image: "img/generated/service-card-thermostat-upgrades.webp",
    heroImage: "img/generated/thermostat-upgrade.webp",
    category: "Controls",
    icon: "gauge",
    included: ["Compatibility check", "Old thermostat removal", "New thermostat installation", "System mode testing", "Basic schedule and app setup guidance"],
    options: ["Programmable thermostats", "Smart thermostats", "Multi-stage system controls", "Heat pump compatible controls"],
    bestFor: ["Hard-to-use controls", "Inconsistent temperature", "Energy-saving schedules", "System replacement projects", "Remote comfort management"],
    process: ["Confirm system wiring and compatibility", "Install selected thermostat", "Connect heating and cooling calls", "Test all modes", "Walk through everyday use"],
    details: ["Some systems need a common wire or adapter for smart thermostat compatibility.", "App accounts and Wi-Fi access are handled by the customer."],
    faq: [
      { q: "Can every home use a smart thermostat?", a: "Most can, but compatibility depends on wiring, system type, and voltage." },
      { q: "Will a thermostat fix HVAC performance problems?", a: "It can improve control, but equipment or airflow issues may still require service." }
    ],
    related: ["hvac-installation", "preventive-maintenance", "ac-repair"]
  },
  {
    slug: "emergency-hvac",
    title: "Emergency HVAC Services",
    short: "Help for sudden heating or cooling failures, safety concerns, and comfort problems that cannot wait.",
    intro: "When the system fails at the worst time, an emergency HVAC visit focuses on safe stabilization and clear next steps.",
    image: "img/generated/service-card-emergency-hvac.webp",
    heroImage: "img/generated/emergency-service.webp",
    category: "Emergency",
    icon: "phone-call",
    included: ["Urgent symptom intake", "Safety and shutdown guidance", "Priority provider matching", "On-site diagnosis when available", "Temporary or permanent repair recommendations"],
    options: ["No cooling", "No heat", "Electrical or burning smells", "Major leaks", "After-hours availability where offered"],
    bestFor: ["Extreme temperatures", "Vulnerable household members", "Complete system failure", "Active leaks", "Safety-related symptoms"],
    process: ["Collect urgent details", "Confirm location and availability", "Match with an available provider", "Diagnose immediate risks", "Stabilize or quote next repair steps"],
    details: ["Emergency pricing and availability vary by provider and time of day.", "If there is smoke, fire, gas odor, or immediate danger, call emergency services first."],
    faq: [
      { q: "Is emergency service available 24/7?", a: "Availability depends on local providers, but urgent requests are prioritized whenever possible." },
      { q: "Can every issue be fixed immediately?", a: "Some repairs require parts or follow-up work, but the first visit can often stabilize the situation." }
    ],
    related: ["ac-repair", "preventive-maintenance", "hvac-installation"]
  }
];
