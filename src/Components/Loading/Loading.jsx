import React from "react";

import "./Loading.less";

function Loading() {
  return (
    <div className="loading_section">
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
