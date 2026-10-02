import instagramIcon from "../assets/instagram-logo-facebook-2-svgrepo-com.svg";
import githubIcon from "../assets/github-142-svgrepo-com.svg";
import xicon from "../assets/icons8-x-50.png";

export function Socials(){
  return (
    <main>
      <h1>Socials</h1>
      <p>Here is my social media, if you enjoy my content, like and subscribe</p>
      <p>Collabs, work offer or any other form of interaction pm on </p>
        <p>Instagram or X.com</p>
      <div className="spacer"></div>
      <a href="https://www.instagram.com/just_on_acidzz/">
      <img src={instagramIcon} className="big-social-icon"
      />
    </a>
      <a href="https://www.github.com/GamesOnAcidzz">
      <img src={githubIcon}
          className="big-social-icon"
      />
    </a>
      <a href="https://www.x.com/OnAcizz">
      <img src={xicon}
          className="big-social-icon"
      />
    </a>
    </main>
  );
}
