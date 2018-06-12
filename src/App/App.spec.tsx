import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Style as ButtonStyle } from '../Button/Button.style';
import { Button, ButtonProps } from '../Button/Button';

import { App } from './App';

describe('App', () => {
  let component: ShallowWrapper<App>,
    buttons: ShallowWrapper<ButtonProps>,
    firstButton: ShallowWrapper<ButtonProps>;

  beforeEach(() => {
    component = shallow(<App></App>);

    buttons = component.find(Button);
    firstButton = buttons.first();
  });

  it('should render two buttons', () => {
    expect(buttons.length).toBe(2);
  });

  it('should provide custom styling for the first button', () => {
    expect(firstButton.props().newStyles).toEqual(jasmine.any(Object));
  });

  describe('when the first button is ran', () => {
    let originalStyle: Partial<ButtonStyle>;

    beforeEach(() => {
      originalStyle = firstButton.props().newStyles;
      firstButton.props().onRun();
      component.update();
      firstButton = component.find(Button).first();
    });

    it('should update the style of the first button', () => {
      expect(firstButton.props().newStyles).not.toBe(originalStyle);
    });
  });
});
