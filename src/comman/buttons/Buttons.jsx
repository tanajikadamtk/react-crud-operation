/* eslint-disable react/prop-types */


function Buttons(props) {
  return (
      <button className={props.className}>
        {props.icon}
        {props.text}
      </button>
  );
}

export default Buttons;
