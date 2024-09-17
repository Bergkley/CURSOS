import "./Counter.css";

const Counter = ({ title, number, eventColor }) => {
  const getColor = (color) => {
    const isWhite = ['#fff', '#ffffff', 'rgb(255, 255, 255)', 'white'].includes(color?.toLowerCase());
    return isWhite ? 'black' : color;
  };
  return (
    <div className="counter">
        <p className="counter-number" style={{ backgroundColor: getColor(eventColor) }}>
        {number}
      </p>
      <h3 className="counter-text" style={{ color: getColor(eventColor) }}>
        {title}
      </h3>
    </div>
  );
};

export default Counter;
