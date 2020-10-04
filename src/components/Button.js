/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ txt }) => {
  const style = css`
    width: 7.5em;
    height: 2.5em;
    border-radius: 0.5em;
    background-color: black;
    border: none;
    color: white;
  `;
  return <button css={style}>{txt}</button>;
};

export default Button;
