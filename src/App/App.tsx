import React from 'react';
import { StyleSheet } from 'aphrodite';

import { defaultStyle, Style as AppStyle } from './App.style';
import { Style as ButtonStyle } from '../Button/Button.style';
import { Button } from '../Button/Button';

export interface AppProps {
}

export interface AppState {
  button1Styles: Partial<ButtonStyle>;
}

const style: AppStyle = StyleSheet.create(defaultStyle);

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      button1Styles: {
        button: style.button1, 
        text: style.button1Text
      }
    };
  }

  render(): React.ReactNode {
    return <>
      <Button newStyles={this.state.button1Styles} onRun={this._updateButton} text="Hi"></Button>
      <Button text="Bye"></Button>
    </>;
  }

  private _updateButton = () => {
    this.setState({
      button1Styles: {
        button: style.button1Clicked,
        text: style.button1ClickedText
      }
    });
  }
}
