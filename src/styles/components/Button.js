import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,

  big: css`
    height: 50px;
    font-size: 16px;
  `,
};

const colors = {
  default: css`
    background: #e5556e;

    &:hover {
      background: #b54357;
    }
  `,
};

const Button = styled.button.attrs({
  type: 'button',
})`
  border-radius: 25px;
  transition: background-color 0.15s ease;
  background: #e5556e;
  border: 0;
  color: #fff;
  font-size: 16px;
  padding: 0 10px;
  font-weight: bold;

  ${props => sizes[props.size || 'default']}
  ${props => colors[props.color || 'default']}

  ${props => props.filled === false
    && css`
      background: none;

      &:hover {
        background: none;
        opacity: 0.6;
      }
    `}
`;

export default Button;
