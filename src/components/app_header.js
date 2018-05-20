import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="header">
      <header>
        <h1>Kanban</h1>
      </header>
      <div className="new-task">
        <Link className="new-task-btn" to="/cards/new">
          + task
        </Link>
      </div>
    </div>
  );
};
