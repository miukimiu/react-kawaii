import React from 'react';
import '../../sass/components/_button.scss';

const IconKawaii = ({ mood, size, type}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M50,100 C77.6142375,100 100,77.6142375 100,50 C100,22.3857625 77.6142375,0 50,0 C22.3857625,0 0,22.3857625 0,50 C0,77.6142375 22.3857625,100 50,100 Z" id="path-1"></path>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Landing-page" transform="translate(-1003.000000, -307.000000)">
                <g id="section-2" transform="translate(351.000000, 247.000000)">
                    <g id="growing" transform="translate(534.000000, 60.000000)">
                        <g id="Group">
                            <g id="kawaii-planet" transform="translate(118.000000, 0.000000)">
                                <g id="kawaii-planet-body">
                                    <mask id="mask-2" fill="white">
                                        <use xlinkHref="#path-1"></use>
                                    </mask>
                                    <use id="Mask" fill="#D56FAC" xlinkHref="#path-1"></use>
                                    <path d="M33.3333333,100 C60.9475708,100 83.3333333,77.6142375 83.3333333,50 C83.3333333,22.3857625 60.9475708,0 33.3333333,0 C5.71909584,0 -16.6666667,22.3857625 -16.6666667,50 C-16.6666667,77.6142375 5.71909584,100 33.3333333,100 Z" id="Oval-589" fill="#F199CE" opacity="0.4" mask="url(#mask-2)"></path>
                                </g>
                                <g id="kawaii-planet-face" transform="translate(30.833333, 43.333333)">
                                    <g id="blush" transform="translate(0.000000, 7.500000)" fill="#424852" opacity="0.2">
                                        <ellipse id="Oval-597" cx="3.67353552" cy="3.52941176" rx="2.94117647" ry="2.94117647"></ellipse>
                                        <circle id="Oval-597" cx="36.2235335" cy="3.52941176" r="2.94117647"></circle>
                                    </g>
                                    <g id="eyes-and-mouth" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(3.333333, 0.000000)">
                                        <ellipse id="kawaii-planet-left-eye" fill="#424852" cx="3.97548002" cy="3.67647059" rx="3.67647059" ry="3.67647059"></ellipse>
                                        <ellipse id="kawaii-planet-right-eye" fill="#424852" cx="29.2588357" cy="3.67647059" rx="3.67647059" ry="3.67647059"></ellipse>
                                        { mood === 'happy' && (
                                            <path d="M12.9406619,8.82352941 C12.9406619,10.8539881 14.5866738,12.5 16.6171324,12.5 L16.6171324,12.5 C18.6475911,12.5 20.293603,10.8539881 20.293603,8.82352941" id="kawaii-planet-happy-mouth" stroke="#424852" strokeWidth="2"></path>
                                        )}
                                        { mood === 'sad' && (
                                            <path d="M12.9406619,6.82352941 C12.9406619,8.85398805 14.5866738,10.5 16.6171324,10.5 L16.6171324,10.5 C18.6475911,10.5 20.293603,8.85398805 20.293603,6.82352941" id="kawaii-planet-sad-mouth" stroke="#424852" strokeWidth="2" transform="translate(16.617132, 8.661765) scale(1, -1) translate(-16.617132, -8.661765) "></path>
                                        )}


                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

// IconKawaii.propTypes = {
//   onClick: React.PropTypes.func,
// };

export default IconKawaii;
