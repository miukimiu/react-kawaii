import styled from 'styled-components';
import remcalc from 'remcalc';

const ToggleMenu = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    z-index: 999;
    width: 100%;

    .menu {
      position: fixed;
      padding: ${remcalc(20)};
    }

    /* display: ${props => (props.menuActive ? 'block' : 'none')}; */
  }
`;

export default ToggleMenu;
