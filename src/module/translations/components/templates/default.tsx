import * as React from "react";

export const DefaultTemplate = ({ keys, translations, onChange }) => {
  return (
    <div>
      {keys.map((key) => (
        <div key={key} className="field">
          <label className="label">{key}</label>
          <div className="control">
            <input
              name={key}
              className="input"
              type="text"
              value={translations[key]}
              onChange={onChange(key)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
