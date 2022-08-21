import Image from "next/image";
import React from "react";

const Footer = () => (
  <footer>
    <a href="https://github.com/n6g7" target="blank" title="GitHub">
      <Image
        height="16"
        width="16"
        src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
        alt="GitHub"
      />
    </a>
    <a href="https://keybase.io/n6g7" target="blank" title="Keybase">
      <Image
        height="16"
        width="16"
        src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/keybase.svg"
        alt="Keybase"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/ngaberel/"
      target="blank"
      title="Keybase"
    >
      <Image
        height="16"
        width="16"
        src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
        alt="LinkedIn"
      />
    </a>
  </footer>
);

export default Footer;
