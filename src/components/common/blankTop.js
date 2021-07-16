import styled from 'styled-components';

const BlankDiv = styled.div`
  width: 100%;
  margin-top: ${(props) => props.DesktopMargin || 0}rem;
  @media only screen and (max-width: 1024px) {
    margin-top: ${(props) => props.TabletMargin || 0}rem;
  }
  @media only screen and (max-width: 828px) {
    margin-top: ${(props) => props.MobileMargin || 0}rem;
  }
  @media only screen and (max-width: 375px) {
    margin-top: ${(props) => props.SmallMobileMargin || 0}rem;
  }
`;

const MainBlankTop = ({
  DesktopMargin,
  TabletMargin,
  MobileMargin,
  SmallMobileMargin,
}) => {
  return (
    <BlankDiv
      DesktopMargin={DesktopMargin}
      TabletMargin={TabletMargin}
      MobileMargin={MobileMargin}
      SmallMobileMargin={SmallMobileMargin}
    ></BlankDiv>
  );
};

export default MainBlankTop;
