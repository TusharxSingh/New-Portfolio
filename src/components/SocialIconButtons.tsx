"use client";

import { Mail, Linkedin, Github, Code2 } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/portfolio";
import "./SocialIconButtons.css";

export function SocialIconButtons() {
  return (
    <div className="social-icons-main">
      <div className="social-icons-up">
        {/* Email */}
        <a
          href={`mailto:${siteConfig.email}`}
          title="Email"
          className="social-card-email"
          aria-label="Send email"
        >
          <Mail className="email-icon" width="40" height="40" />
        </a>

        {/* LinkedIn */}
        <a
          href={socialLinks.find((l) => l.label === "LinkedIn")?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="social-card-linkedin"
          aria-label="Visit LinkedIn"
        >
          <Linkedin className="linkedin-icon" width="40" height="40" />
        </a>
      </div>

      <div className="social-icons-down">
        {/* GitHub */}
        <a
          href={socialLinks.find((l) => l.label === "GitHub")?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="social-card-github"
          aria-label="Visit GitHub"
        >
          <Github className="github-icon" width="40" height="40" />
        </a>

        {/* LeetCode */}
        <a
          href={socialLinks.find((l) => l.label === "LeetCode")?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
          className="social-card-leetcode"
          aria-label="Visit LeetCode"
        >
          <Code2 className="leetcode-icon" width="40" height="40" />
        </a>
      </div>
    </div>
  );
}
