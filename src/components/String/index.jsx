import React, { useState, useEffect } from "react";
import "./styles.scss";
import { languageManager, utility } from "../../services";

const StringInput = props => {
  const currentLang = languageManager.getCurrentLanguage().name;

  const { field, formData } = props;
  const [input, setInput] = useState("");

  // set default value to form data in parent
  // useEffect(() => {
  //   if (field.isRequired === true) props.init(field.name, false);
  // }, []);

  // set value to input
  useEffect(() => {
    if (formData[field.name]) {
      if (field.isRequired === true) props.init(field.name, true);

      if (field.isTranslate) setInput(props.formData[field.name][currentLang]);
      else setInput(props.formData[field.name]);
    } else {
      if (field.isRequired === true) props.init(field.name, false);

      if (field.defaultValue) {
        setInput(field.defaultValue);
        setValueToParentForm(field.defaultValue);
      } else setInput("");
    }
  }, [formData]);

  function setValueToParentForm(inputValue) {
    let value;
    if (field.isTranslate) value = utility.applyeLangs(inputValue);
    else value = inputValue;

    if (field.isRequired) {
      let isValid = false;
      if (inputValue.length > 0) {
        isValid = true;
      }
      props.onChangeValue(field, value, isValid);
    } else props.onChangeValue(field, value, true);
  }
  function handleOnChange(e) {
    setInput(e.target.value);
    setValueToParentForm(e.target.value);
  }
  return (
    <div className="form-group">
      <label>{field.title && field.title[currentLang]}</label>
      {field.isMultiLine !== undefined && field.isMultiLine ? (
        <textarea
          className="form-control up-form-stringInput-textArea"
          placeholder={field.title[currentLang]}
          value={input}
          onChange={handleOnChange}
          readOnly={props.viewMode}
        />
      ) : (
        <input
          type={field.appearance ? field.appearance : "text"}
          className="form-control"
          placeholder={field.title && field.title[currentLang]}
          value={input}
          onChange={handleOnChange}
          readOnly={props.viewMode}
        />
      )}
      <small className="form-text text-muted">
        {field.description && field.description[currentLang]}
      </small>
    </div>
  );
};

export default StringInput;
