import React from "react";
import FormWrapper from "./styles/FormWrapper";

const NewIssueForm = props => {
  console.log(props);
  return (
    <FormWrapper>
      <form>
        <p>
          <label className="priority-field">
            Set Priority:
            <select>
              <option>HIGH</option>
              <option>MEDIUM</option>
              <option>LOW</option>
            </select>
          </label>
        </p>
        <p>
          <label className="upload-field" htmlFor="file">
            Upload Supporting Documents
          </label>
          <input type="file" name="file" id="file"></input>
        </p>
        <p>
          <label>
            <input className="title" type="text" placeholder="Title:"></input>
          </label>
        </p>
        <p>
          <label>
            <textarea type="text" placeholder="Describe the issue:"></textarea>
          </label>
        </p>
        <button
          className="btn form-button"
          onClick={() => props.history.push("/open-issues")}
        >
          Submit
        </button>
      </form>
    </FormWrapper>
  );
};

export default NewIssueForm;
