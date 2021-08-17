import "./menu.scss";

export default function Menu({menuOpen, setMuneOpne}) {
  return (
    <div className={'menu '+(menuOpen && 'active')}>
      <ul>
        <li>
          <a href="#inrto">Home</a>
        </li>
        <li>
          <a href="#portfilio">Portfilio</a>
        </li>
        <li>
          <a href="#works">Projects</a>
        </li>
        <li>
          <a href="#test">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
