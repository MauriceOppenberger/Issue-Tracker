import styled from "styled-components";

const HeaderWrapper = styled.div`
  margin: 0;
  margin-bottom: 2rem;
  padding: 2rem 0;
  background: var(--mainGrey);

  .header-container {
    width: 90vw;
    text-align: left;

    padding: 0 2rem;
    margin: auto;
    .logo-container {
      width: max-content;
    }
    .logo-link {
    }
    h1 {
      margin: 0;
    }
  }
`;

export default HeaderWrapper;
