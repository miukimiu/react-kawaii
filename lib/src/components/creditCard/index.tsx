import { FunctionComponent } from 'react';
import paths from './paths';
import Face from '../common/face';
import getUniqueId from '../../utils/getUniqueId';
import { KawaiiProps } from '../../types';

const CreditCard: FunctionComponent<KawaiiProps> = ({
  size = 200,
  mood = 'blissful',
  color = '#83D1FB',
  ...rest
}) => (
  <svg
    width={size * 1.38}
    height={size}
    viewBox="0 0 198 143"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...rest}
  >
    <g id="kawaii-creditCard">
      <g id="kawaii-creditCard__body" fillRule="nonzero">
        <path d={paths.shape} id="kawaii-creditCard__shape" fill={color} />
        <path
          d={paths.shadow}
          id="kawaii-creditCard__shadow"
          fill="#000"
          opacity=".1"
        />
        <path id="kawaii-creditCard__stripe" fill="#000" d="M0 17h198v27H0z" />
      </g>
      <Face mood={mood} transform="translate(66 73)" uniqueId={getUniqueId()} />
    </g>
  </svg>
);

export default CreditCard;
