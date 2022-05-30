import IG from "./ig.jpg";
import FB from "./facebook.jpg";

export default function header() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/livajamarko/?hl=hr">
        <img src={IG} className="insta"></img>
      </a>
      <a href="https://www.facebook.com/Marko-Livaja-150825995123721/">
        <img src={FB} className="fb"></img>
      </a>
      <br />
      <br />
    </div>
  );
}
