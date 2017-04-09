import React,{ Component, } from 'react';
import { View, } from 'react-native';
import { ScreenStyle, } from '../styles/Style';

class Screen extends Component {
  render() {
    return (
      <View style={ScreenStyle(this.props.color, this.props.direction)}>
        {this.props.children}
      </View>
    );
  }
}

Screen.defaultProps = {
  color: 'transparent',
  direction: 'column',
}

Screen.propTypes = {
  color: React.PropTypes.string,
  direction: React.PropTypes.string,
}
export default Screen;
