export const Inner = (props) => {
  const { index, mark } = props;
  if (index === "A") {
    return (
      <div className="inner inner-1">
        <span>{mark}</span>
      </div>
    );
  } else if (index === 2) {
    return (
      <div className="inner">
        <span>{mark}</span>
        <span className="reverse">{mark}</span>
      </div>
    );
  } else if (index === 3) {
    return (
      <div className="inner">
        <span>{mark}</span>
        <span>{mark}</span>
        <span className="reverse">{mark}</span>
      </div>
    );
  } else if (index === 4) {
    return (
      <div className="inner">
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="inner-row reverse">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
      </div>
    );
  } else if (index === 5) {
    return (
      <div className="inner">
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div>
          <span>{mark}</span>
        </div>
        <div className="inner-row reverse">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
      </div>
    );
  } else if (index === 6) {
    return (
      <div className="inner">
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="inner-row reverse">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
      </div>
    );
  } else if (index === 7) {
    return (
      <div className="inner">
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="absolute-33">
          <span>{mark}</span>
        </div>
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="inner-row reverse">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
      </div>
    );
  } else if (index === 8) {
    return (
      <div className="inner">
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="absolute-33">
          <span>{mark}</span>
        </div>
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="absolute-66">
          <span>{mark}</span>
        </div>
        <div className="inner-row reverse">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
      </div>
    );
  } else if (index === 9) {
    return (
      <div className="inner">
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="absolute-50">
          <span>{mark}</span>
        </div>
        <div className="inner-row reverse">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="inner-row reverse">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
      </div>
    );
  } else if (index === 10) {
    return (
      <div className="inner">
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="absolute-25">
          <span>{mark}</span>
        </div>
        <div className="inner-row">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="inner-row reverse">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
        <div className="absolute-75">
          <span>{mark}</span>
        </div>
        <div className="inner-row reverse">
          <span>{mark}</span>
          <span>{mark}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="inner inner-1">
        <span>{index}</span>
      </div>
    );
  }
};
