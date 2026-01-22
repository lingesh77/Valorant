import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/lingesh77", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/lingesh-gunasekaran/", icon: <FaLinkedin /> },
  { href: "mailto:lingesh2142004@gmail.com", icon: <FaEnvelope /> },
 
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#FF4654] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
      

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="https://playvalorant.com/en-us/"
          target="_blank"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          © 2024 Riot Games, Inc. All Rights Reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
