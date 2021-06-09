import * as React from "react";

export const GarajeTemplate = ({ keys, translations, onChange }) => {
  return (
    <div>
      <article className="message is-info">
        <div className="message-header">
          <p>
            <input
              value={translations["CARD_TITLE"]}
              onChange={onChange("CARD_TITLE")}
            />
          </p>
        </div>
        <div className="message-body">
          <input
            value={translations["CARD_TEXT_SECTION"]}
            onChange={onChange("CARD_TEXT_SECTION")}
          />
        </div>
        <div className="button is-success mx-4 my-4">
          <input
            value={translations["CARD_CTA"]}
            onChange={onChange("CARD_CTA")}
          />
        </div>
      </article>
    </div>
  );
};
