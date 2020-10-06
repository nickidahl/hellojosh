/** @jsx jsx */
import { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";

const Completion = ({ percentage }) => {
  const [progress, setProgress] = useState(null);
  useEffect(() => {
    if (percentage < 100) setProgress("threequarters");
    if (percentage < 75) setProgress("half");
    if (percentage < 50) setProgress("onequarter");
    if (percentage < 1) setProgress("notstarted");
  }, [percentage]);
  const style = css`
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border: 2px black solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(45deg);

    &.threequarters {
      border-top-color: transparent;
    }
    &.half {
      border-top-color: transparent;
      border-right-color: transparent;
    }
    &.onequarter {
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
    &.notstarted {
      border-color: transparent;
    }
  `;
  const stylePercentage = css`
    font-size: 0.8125em;
    transform: rotate(-45deg);
  `;

  return (
    <div css={style} className={progress && progress}>
      <p css={stylePercentage}>{percentage}%</p>
    </div>
  );
};

export default Completion;
