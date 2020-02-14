import React from "react";
import NewIssueFormWrapper from "./styles/NewIssueFormWrapper";

const NewIssueForm = props => {
  console.log(props);
  return (
    <NewIssueFormWrapper>
      <form>
        <p>
          <label>
            Set Priority
            <select>
              <option>HIGH</option>
              <option>MEDIM</option>
              <option>LOW</option>
            </select>
          </label>
        </p>
        <p>
          <input type="file" name="file" id="file"></input>
          {/* <label for="file">Uploade Supporting document</label> */}
        </p>
        <p>
          <label>
            <input type="text" placeholder="Title"></input>
          </label>
        </p>
        <p>
          <label>
            <textarea type="text" placeholder="Describe your issue"></textarea>
          </label>
        </p>
        <button
          className="btn nav-button"
          onClick={() => props.history.push("/open-issues")}
        >
          Submit
        </button>
      </form>
    </NewIssueFormWrapper>
  );
};

export default NewIssueForm;
