import styled from "styled-components";

const IssueListWrapper = styled.div`
  display: grid;
  grid-template-columns: 30vw auto;
  padding: 0 2rem;

  .list-container {
  }
  .issue-container {
    padding: 1rem;
    border: 1px solid;
  }
  .issue-list {
    margin: 0;
    padding: 0;
  }
  .list-item {
    list-style: none;

    margin-bottom: 1rem;
  }
`;

export default IssueListWrapper;
