import { css } from 'styled-components';
export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 420px) {
            ${props}
        }
    `;
};

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 720px) and (min-width: 421px) {
            ${props}
        }
    `;
};

export const tabletAndmoblie = (props) => {
    return css`
        @media only screen and (max-width: 720px) {
            ${props}
        }
    `;
};
