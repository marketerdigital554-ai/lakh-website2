import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "About", href: "/about" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Plans", href: "/plans" },
      { label: "Technology", href: "/technology" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Risk disclosure", href: "/risk-disclosure" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <span className="text-lg font-extrabold text-warm-white">LAKH</span>
            <p className="mt-3 max-w-xs text-sm text-ink-onDark/70">
              Powering a brighter future.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-warm-white">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-onDark/70 transition-colors hover:text-sky-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-navy-700 pt-6 text-xs text-ink-onDark/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} LAKH. All rights reserved.</span>
          <span>[Company registration] · [Regulatory information]</span>
        </div>
      </div>
    </footer>
  );
}
