import { Profile, SocialLinks } from "@/types/resume";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

interface ContactProps {
  profile: Profile;
  social: SocialLinks;
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
      <line x1="6" y1="9" x2="6.01" y2="9" />
      <line x1="18" y1="9" x2="18.01" y2="9" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact({ profile, social }: ContactProps) {
  const channels: { label: string; value: string; href: string }[] = [];
  if (profile.email) {
    channels.push({ label: "Email", value: profile.email, href: `mailto:${profile.email}` });
  }
  if (profile.phone) {
    channels.push({
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    });
  }
  if (social.github) {
    channels.push({ label: "GitHub", value: "github", href: social.github });
  }
  if (social.linkedin) {
    channels.push({ label: "LinkedIn", value: "linkedin", href: social.linkedin });
  }

  const socialIcons: { href: string; label: string; icon: React.ReactNode }[] = [];
  if (social.github) {
    socialIcons.push({ href: social.github, label: "GitHub profile", icon: <GitHubIcon /> });
  }
  if (social.linkedin) {
    socialIcons.push({ href: social.linkedin, label: "LinkedIn profile", icon: <LinkedInIcon /> });
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader index="08" label="Contact" />

        <Reveal>
          <h2 id="contact-title" className="contact__title">
            Let&apos;s build
            <span className="text-accent"> something useful.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          {channels.length > 0 && (
            <ul className="contact__channels">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="contact__channel"
                  >
                    <span className="mono-label">{channel.label}</span>
                    <span className="contact__channel-value">
                      {channel.label === "GitHub" || channel.label === "LinkedIn"
                        ? `/${channel.value}`
                        : channel.value}
                    </span>
                    <ArrowUpRight size={18} className="contact__channel-icon" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        {(socialIcons.length > 0 || profile.availability) && (
          <Reveal delay={200} className="contact__foot">
            <div className="contact__icons">
              {socialIcons.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__icon-btn"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            {profile.availability && (
              <p className="contact__availability">
                <span className="status-dot" aria-hidden="true" />
                {profile.availability}
              </p>
            )}
          </Reveal>
        )}
      </div>
    </section>
  );
}
