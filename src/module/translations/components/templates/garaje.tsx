import * as React from "react";
import { useState } from "react";

export const GarajeTemplate = ({ keys, translations }) => {
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
      <article className="message is-info">
        <div className="message-header">
          <p>
            <input
              value={formData["CARD_TITLE"]}
              onChange={changeInput("CARD_TITLE")}
            />
          </p>
        </div>
        <div className="message-body">
          <input
            value={formData["CARD_TEXT_SECTION"]}
            onChange={changeInput("CARD_TEXT_SECTION")}
          />
        </div>
        <div className="button is-success mx-4 my-4">
          <input
            value={formData["CARD_CTA"]}
            onChange={changeInput("CARD_CTA")}
          />
        </div>
      </article>
    </form>
  );
};
