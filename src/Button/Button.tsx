import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Style, defaultStyle } from './Button.style';

export interface ButtonProps {
  newStyles?: Partial<Style>;
  text: string;
  onRun?: () => void;
}

export interface ButtonState {
  style: Style;
  text: string;
}

const style: Style = StyleSheet.create(defaultStyle);

export class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render(): React.ReactNode {
    return <button className={this._style('button')} onClick={this._handleClick}>
      <span className={this._style('text')}>{this.props.text}</span>
    </button>;
  }

  private _style(name: keyof Style): string {
    return css(style[name], this.props.newStyles ? this.props.newStyles[name] : null);
  }
  
  private _handleClick = () => {
    if (this.props.onRun) {
      this.props.onRun();
    }
  }
}
