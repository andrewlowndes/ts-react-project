import { StyleObject, DefaultStyle } from '../Util/Style';
import { defaultStyle as buttonDefaultStyle } from '../Button/Button.style';

export type Style = StyleObject<'button1' | 'button1Text' | 'button1Clicked' | 'button1ClickedText'>;

export const defaultStyle: DefaultStyle<Style> = {
  button1: {
    ...buttonDefaultStyle.button,
    backgroundColor: 'red'
  },
  button1Text: {
    ...buttonDefaultStyle.text,
    borderBottom: '1px solid black'
  },
  button1Clicked: {
    ...buttonDefaultStyle.button,
    backgroundColor: 'pink'
  },
  button1ClickedText: {
    ...buttonDefaultStyle.text,
    borderBottom: '1px solid black',
    color: 'black'
  }
};
