import styled from "styled-components";

const LayoutWrapper = styled.main`
  a {
    color: inherit;
    text-decoration: none;
  }
  .page-body {
    display: grid;
    grid-template-columns: 15vw auto;
  }

  .btn {
    width: 150px;
    padding: 8px 0;
    margin: 0 auto;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    font-size: 1rem;
    box-shadow: inset 0 0 0 0 var(--mainBlack);
    -webkit-transition: all ease-out 0.3s;
    -moz-transition: all ease-out 0.3s;
    transition: all ease-out 0.3s;
  }
  .btn:hover {
    color: var(--mainWhite);
    box-shadow: inset 150px 0 0 0.01px var(--mainBlack);
  }
  .active button {
    background: var(--mainBlack);
    color: var(--mainWhite);
  }
`;

export default LayoutWrapper;
