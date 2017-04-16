import React, { Component, } from 'react';
import { View, } from 'react-native';
import RowStyle from '../styles/Style';

class Row extends Component {
  render() {
    return (
      <View style={RowStyle(this.props.flex, this.props.color, this.props.hAlign, this.props.vAlign)}>
        {this.props.children}
      </View>
    );
  }
}

Row.defaultProps = {
  flex: 1,
  color: 'transparent',
  hAlign: 'center',
  vAlign: 'stretch',
}

Row.propTypes = {
  flex: React.PropTypes.number,
  color: React.PropTypes.string,
  hAlign: React.PropTypes.string, /* ['flex-start', 'flex-end', 'center', 'space-around'] */
  vAlign: React.PropTypes.string, /* ['flex-start', 'flex-end', 'center', 'stretch'] */
}
export default Row;
