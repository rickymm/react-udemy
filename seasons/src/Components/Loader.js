import React from "react";

const Loader = props => {
  return (
    <div className="ui">
      <div className="ui active inverted dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
      <p />
    </div>
  );
};

Loader.defaultProps = {
  message: "Loading..."
};

export default Loader;
