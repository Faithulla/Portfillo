
import "./PortfilioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfilioList active" : "portfilioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}