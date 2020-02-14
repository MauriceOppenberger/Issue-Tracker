import styled from "styled-components";

const NewIssueFormWrapper = styled.div`
  form {
    width: 50vw;
    margin-left: 8vmax;
  }
  p {
    margin-bottom: 3rem;
  }
  #file {
    display: none;
  }

  .upload-field::after {
    content: "▾";
    font-size: 1.5rem;
    color: var(--mainBlack);
    padding-left: 1.5rem;
  }
  input,
  .upload-field,
  .priority-field {
    padding: 8px 16px;
    border: 1px solid #eee;
    border-radius: 10px;
    background: var(--mainGrey);
    font-size: 1rem;
  }
  .upload-field,
  .priority-field {
    color: #757575;
    select {
      border: none;
      background: transparent;
      font-size: 1rem;
      margin: 0 10px;
    }
  }
  .title {
    width: 50%;
  }
  textarea {
    font-size: 1rem;
    padding: 16px;
    width: 100%;
    min-height: 200px;
    border: 1px solid #eee;
    border-radius: 10px;
    background: var(--mainGrey);
  }
  .form-button:hover {
    border: none !important;
    background: green !important;
  }
`;

export default NewIssueFormWrapper;
