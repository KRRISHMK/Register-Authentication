import React from "react";

const Bgclr = () => {
  return (
    <div
      style={{
        "--color-1": "navy",
        "--color-2": "deepskyblue",
        background: `
      linear-gradient(
        100deg,
        var(--color-1),
        var(--color-2) 80%
      ) `,

        width: "100%",
      }}
    >
      3werdtjk,
    </div>
  );
};

export default Bgclr;
