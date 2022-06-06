import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return (
    //  Js style однолайновый if, && - почему-то как if
    <div className={`card ${reverse && "reverse"}`}>{children}</div>
  );
  // Vtoroy Sposob
  // <div
  //   className='card'
  //   style={{
  //     backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //     color: reverse ? '#fff' : '#000',
  //   }}
  // >
  //   {children}
  // </div>
}

Card.defaultProps = {
  reverse: false,
};

// способ указать типы принимаемых данных + задать обязательные данные
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
