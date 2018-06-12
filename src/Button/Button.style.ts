import { StyleObject, DefaultStyle } from '../Util/Style';

export type Style = StyleObject<'button' | 'text'>;

export const defaultStyle: DefaultStyle<Style> = {
  button: {
    appearence: 'none',
    border: '0px none',
    backgroundColor: 'blue',
    outline: 'none'
  },
  text: {
    color: 'white'
  }
};
