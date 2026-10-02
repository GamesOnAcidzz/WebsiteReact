import instagramIcon from "../assets/instagram-logo-facebook-2-svgrepo-com.svg";
import githubIcon from "../assets/github-142-svgrepo-com.svg";
import xicon from "../assets/icons8-x-50.png";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.instagram.com/just_on_acidzz/">
      <img src={instagramIcon} className="social-icon"
      />
    </a>
      <a href="https://www.github.com/GamesOnAcidzz">
      <img src={githubIcon}
          className="social-icon"
      />
    </a>
      <a href="https://www.x.com/OnAcizz">
      <img src={xicon}
          className="social-icon"
      />
    </a>
    </footer>
  );
}
