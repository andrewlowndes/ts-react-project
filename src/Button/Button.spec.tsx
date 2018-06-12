import React from 'react';
import { StyleSheet } from 'aphrodite';
import { shallow, ShallowWrapper, HTMLAttributes } from 'enzyme';

import { Style } from './Button.style';
import { Button, ButtonProps } from './Button';

describe('Button', () => {
  let component: ShallowWrapper<ButtonProps>,
    button: ShallowWrapper<HTMLAttributes>,
    span: ShallowWrapper<HTMLAttributes>;

  beforeEach(() => {
    component = shallow(<Button text="Test"></Button>);

    button = component.find('button');
    span = component.find('span');
  });

  it('should render a button', () => {
    expect(button.length).toBe(1);
  });

  it('should show the text provided', () => {
    expect(span.text()).toBe('Test');
  });

  it('should not do anything when the button is pressed', () => {
    expect(() => button.simulate('click')).not.toThrow(jasmine.any(Error));
  });

  describe('when an onRun property is provided', () => {
    let runSpy: jasmine.Spy;

    beforeEach(() => {
      runSpy = jasmine.createSpy('run');
  
      component.setProps({ onRun: runSpy });
  
      button = component.find('button');
    });
  
    describe('when the button is pressed', () => {
      beforeEach(() => {
        button.simulate('click');
      });
  
      it('should call the onClick property', () => {
        expect(runSpy).toHaveBeenCalledWith();
      });
    });
  });

  describe('when a newStyles property is provided', () => {
    let prevButtonClassName: string,
      prevSpanClassName: string;

    beforeEach(() => {
      prevButtonClassName = button.props().className;
      prevSpanClassName = span.props().className;
      
      const tempStyle: Style = StyleSheet.create({
        button: {
          border: '1px solid pink'
        },
        text: {
          color: 'pink'
        }
      });

      component.setProps({
        newStyles: { 
          button: tempStyle.button,
          text: tempStyle.text
        }
      });
  
      button = component.find('button');
      span = component.find('span');
    });

    it('should update the className for the button', () => {
      expect(button.props().className).not.toBe(prevButtonClassName);
    });

    it('should update the className for the span', () => {
      expect(span.props().className).not.toBe(prevSpanClassName);
    });
  });
});
