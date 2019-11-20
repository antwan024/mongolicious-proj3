import React from "react";
import "./styles.css";

const TaskInput = () => {
  return (
    <div>
      <form>
        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">assignment</i>
            <textarea
              id="icon_prefix2"
              className="materialize-textarea"
            ></textarea>
            <label for="icon_prefix2">Add a Task</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
