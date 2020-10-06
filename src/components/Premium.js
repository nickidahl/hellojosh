/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import book from "../img/book.png";
import Button from "../components/Button";

const Premium = () => {
  const style = css`
    display: flex;
    background-color: #f5f5f7;
    flex-direction: column;
    position: relative;
    border-radius: 10px;
    max-width: 440px;
    padding-left: 1.5em;
    padding-top: 2.313em;
    padding-bottom: 1em;
  `;
  return (
    <div css={style}>
      <h1
        css={css`
          font-size: 1.5em;
        `}
      >
        Learn Even More!
      </h1>
      <p
        css={css`
          width: 200px;
          font-size: 1em;
          padding: 18px 0;
        `}
      >
        Unlock premium features only for $9.99 per month.
      </p>

      <img
        src={book}
        alt="Book"
        css={css`
          position: absolute;
          top: 37px;
          left: 300px;
        `}
      />
      <Button txt="Go Premium" color="red" />
    </div>
  );
};

export default Premium;
