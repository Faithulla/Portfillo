import "./Porfilio.scss";
import PortfilioList from "./PortfilioList";
import { useState } from "react";
export default function Portfilio() {

    const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="Portfilio" id="portfilio">
      <h1>Portfilio</h1>
      <ul>
        {list.map((item) => (
          <PortfilioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200"
            alt=""
          />
          <h3>Ranking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200"
            alt=""
          />
          <h3>Ranking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200"
            alt=""
          />
          <h3>Ranking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200"
            alt=""
          />
          <h3>Ranking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200"
            alt=""
          />
          <h3>Ranking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200"
            alt=""
          />
          <h3>Ranking App</h3>
        </div>
      </div>
    </div>
  );
}
