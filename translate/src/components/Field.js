import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const labelTxt = this.context.language === "english" ? "Name" : "Nome";

    return (
      <div className="ui field">
        <label>{labelTxt}</label>
        <input />
      </div>
    );
  }
}

export default Field;
