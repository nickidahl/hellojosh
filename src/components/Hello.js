/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import userDrawing from "../img/Illustration.png";

const Hello = ({ firstname }) => {
  const style = css`
    height: 10em;
    padding-left: 2em;
    background-color: #f5f5f7;
    border-radius: 0.875em;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5% 0;
  `;
  const styleImg = css`
    position: absolute;
    bottom: 0;
    left: 21.25em;
  `;
  return (
    <article css={style}>
      <h1>Hello {firstname}</h1>
      <p>Its good to see you again.</p>
      <img css={styleImg} src={userDrawing} alt="Sample user illustration" />
    </article>
  );
};

export default Hello;
