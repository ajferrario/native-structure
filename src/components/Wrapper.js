import React, { Component, } from 'react';
import { View, } from 'react-native';
import WrapperStyle from '../styles/Style';
import validateText from '../validateProp';

class Wrapper extends Component {
  render() {
    return (
      <View style={WrapperStyle(this.props.flex, this.props.color, this.props.hAlign, this.props.vAlign)}>
        {this.props.children}
      </View>
    );
  }
}

Wrapper.defaultProps = {
  flex: 1,
  color: 'transparent',
  hAlign: 'center',
  vAlign: 'center',
}

Wrapper.propTypes = {
  flex: React.PropTypes.number,
  color: React.PropTypes.string,
  hAlign: React.PropTypes.string, /* ['flex-start', 'flex-end', 'center', 'space-around'] */
  vAlign: React.PropTypes.string, /* ['flex-start', 'flex-end', 'center', 'stretch'] */
}
export default Wrapper;
