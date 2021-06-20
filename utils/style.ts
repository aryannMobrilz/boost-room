import { css, SerializedStyles } from '@emotion/react';

export const mediaQuery = {
  xs: (...args: Record<string, any>[]): SerializedStyles =>
    css`
      @media (max-width: 575px) {
        ${css(...args)}
      }
    `,
  sm: (...args: Record<string, any>[]): SerializedStyles =>
    css`
      @media (min-width: 576px) {
        ${css(...args)}
      }
    `,
  md: (...args: Record<string, any>[]): SerializedStyles =>
    css`
      @media (min-width: 768px) {
        ${css(...args)}
      }
    `,
  lg: (...args: Record<string, any>[]): SerializedStyles =>
    css`
      @media (min-width: 992px) {
        ${css(...args)}
      }
    `,
  xl: (...args: Record<string, any>[]): SerializedStyles =>
    css`
      @media (min-width: 1200px) {
        ${css(...args)}
      }
    `,
  xxl: (...args: Record<string, any>[]): SerializedStyles =>
    css`
      @media (min-width: 1600px) {
        ${css(...args)}
      }
    `
};
