import styled from 'styled-components';

export const StyledFooter = styled.div`
  background: #2c2c2c;
  margin: 20px 0 auto;
  box-sizing: border-box;
  text-align: right;


  .footer-content {
    max-width: 1280px;
    min-height: 80px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }

    .footer-text {
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    overflow: hidden;

        p {
        font-family: 'Abel', sans-serif;
        font-size: 16px;
        }

        a {
        color: inherit;
        text-decoration: inherit;
        padding: 10px
        }

        @media screen and (max-width: 768px) {
        p{
        font-size: 10px;

        }
  }
    }
  }
`;
