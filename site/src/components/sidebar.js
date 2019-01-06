import styled from 'styled-components';
import remcalc from 'remcalc';

const Sidebar = styled.div`
  background: white;
  border-right: 1px solid #d0dae4;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow: auto;

  @media (max-width: 600px) {
    position: fixed;
    z-index: 999;
    width: 90%;
    display: ${props => (props.menuActive ? 'block' : 'none')};
  }

  .close {
    display: none;

    @media (max-width: 600px) {
      display: block;
      position: absolute;
      top: ${remcalc(20)};
      right: ${remcalc(20)};
    }
  }

  ul li {
    @media (max-width: 600px) {
      display: block;
    }
  }
`;

export default Sidebar;
