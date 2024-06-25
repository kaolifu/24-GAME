import { Inner } from "./CardInner";

export const Card = (props) => {
  const { index, mark, color } = props;
  return (
    <div style={{ color: color }} className="card">
      <div className="index left-index">
        <p>{index}</p>
        <span>{mark}</span>
      </div>

      <Inner index={index} mark={mark} />

      <div className="index right-index">
        <p>{index}</p>
        <p>{mark}</p>
      </div>
    </div>
  );
};
