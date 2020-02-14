import React from "react";
import SingleIssue from "./SingleIssue";

import IssueListWrapper from "./styles/IssueListWrapper";
const IssueList = () => {
  const issues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <IssueListWrapper>
      <div className="list-container">
        <ul className="issue-list">
          {issues.map(el => {
            return (
              <li className="list-item">
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
              </li>
            );
          })}
        </ul>
      </div>
      <SingleIssue />
    </IssueListWrapper>
  );
};

export default IssueList;
