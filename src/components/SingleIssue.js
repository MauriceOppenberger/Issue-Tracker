import React from "react";
import SingleIssueWrapper from "./styles/SingleIssueWrapper";

const SingleIssue = () => {
  return (
    <SingleIssueWrapper>
      <div className="issue-container">
        <p>priority</p>
        <h2>Title</h2>
        <p>blurb</p>
        <span>
          <p>opened</p>
        </span>
        <span>
          <p>creator</p>
        </span>
      </div>
    </SingleIssueWrapper>
  );
};

export default SingleIssue;
