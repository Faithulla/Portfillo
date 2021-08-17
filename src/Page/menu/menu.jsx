import "./menu.scss";


export default function Menu({menuOpen, setMenuOpen}) {
    return (
    <div className={'menu '+(menuOpen && 'active')}>

      <ul>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#portfilio">Portfilio</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#works">Projects</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#test">Testimonials</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
