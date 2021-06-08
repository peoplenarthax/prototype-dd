import * as React from "react";
import { useState } from "react";

export const DefaultTemplate = ({ keys, translations }) => {
  const [formData, setFormData] = useState(translations);

  const changeInput = (value: string) => (evt) => {
    setFormData({ ...formData, [value]: evt.currentTarget.value });
  };
  const submit = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={submit}>
      {keys.map((key) => (
        <div key={key} className="field">
          <label className="label">{key}</label>
          <div className="control">
            <input
              name={key}
              className="input"
              type="text"
              value={formData[key]}
              onChange={changeInput(key)}
            />
          </div>
        </div>
      ))}
    </form>
  );
};
