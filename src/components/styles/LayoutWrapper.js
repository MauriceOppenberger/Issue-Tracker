import styled from "styled-components";

const LayoutWrapper = styled.div`
  .page-body {
    display: grid;
    grid-template-columns: 20vw auto;
  }

  .btn {
    min-width: 150px;
    padding: 8px 16px;
    border: 1px solid;
    border-radius: 20px;
    font-size: 1rem;
  }
  .btn:hover,
  .btn:active {
    background: var(--mainBlack);
    color: var(--mainWhite);
  }
`;

export default LayoutWrapper;
