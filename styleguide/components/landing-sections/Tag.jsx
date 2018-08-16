import styled from 'styled-components';
import remcalc from 'remcalc';

const Tag = styled.div`
  color: ${props => (props.text === props.active ? '#ffffff' : '#5C6570')};
  padding: ${remcalc(4)} ${remcalc(8)};
  margin: ${remcalc(5)}
  border-radius: 3px;
  display: inline-flex;
  background: ${props => (props.text === props.active ? '#8BBF78' : '#f2f4f5')};
  font-size: ${remcalc(14)};
  cursor: pointer;
  transition: .5s ease;

  &:hover {
    color: #ffffff;
    background: #8BBF78;
  }
`;

export default Tag;
