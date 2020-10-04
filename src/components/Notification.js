/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import { faPersonBooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

const Notification = ({ unread }) => {
  const shakeOnChange = (e) => {
    e.target.style.backgroundColor = "orange";
    e.target.classList.add("bellshake");
  };

  const shake = keyframes`
        10%, 90%{
            transform: translate(-1px);
        }
        20%,80% {
            transform:translate(2px);
        }
        30%, 50%, 70% {
            transform: translate(-4px);
        }
        40%, 60%{
            transform: translate(4px)
        }
        ;
  `;
  const styleLink = css`
    color: black;
    text-decoration: none;
    position: relative;
  `;
  const styleIcon = css`
    font-size: 1.5em;
  `;
  const styleBadge = css`
    background-color: red;
    color: white;
    font-size: 0.42em;
    padding: 0.05em 0.35em;
    border-radius: 1em;
    border: 0.00625em solid white;
    display: inline-block;
    position: absolute;
    top: -1em;
    right: -0.5em;

    .bellshake {
      animation: ${shake} 0.82s cubic-bezier(36, 0.07, 0.19, 0.97) both;
      transform: translate(0);
    }
  `;
  const bellshake = css`
    animation: ${shake} 0.82s cubic-bezier(36, 0.07, 0.19, 0.97) both;
    transform: translate(0);
  `;

  return (
    <Link css={styleLink} to="/">
      <FontAwesomeIcon css={styleIcon} icon={["far", "bell"]} size="1x" />
      <span onClick={shakeOnChange} css={styleBadge}>
        {unread}
      </span>
    </Link>
  );
};

export default Notification;
