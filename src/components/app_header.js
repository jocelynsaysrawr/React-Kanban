import React from "react";
import { Link } from "react-router-dom";
import "../style/styles.scss";

export default () => {
  return (
    <div className="header">
      <header>
        <h1>Kanban</h1>
      </header>

      <Link className="new-task-btn" to="/">
        + task
      </Link>
    </div>
  );
};
