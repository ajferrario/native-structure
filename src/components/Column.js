import React, { Component, } from 'react';
import { View, } from 'react-native';
import ColumnStyle from '../styles/Style';
import validateText from '../validateProp';

class Column extends Component {
  render() {
    return (
      <View style={ColumnStyle(this.props.flex, this.props.color, this.props.hAlign, this.props.vAlign)}>
        {this.props.children}
      </View>
    );
  }
}

Column.defaultProps = {
  flex: 1,
  color: 'transparent',
  hAlign: 'stretch',
  vAlign: 'center',
}

Column.propTypes = {
  flex: React.PropTypes.number,
  color: React.PropTypes.string,
  hAlign: React.PropTypes.string, /* ['flex-start', 'flex-end', 'center', 'space-around'] */
  vAlign: React.PropTypes.string, /* ['flex-start', 'flex-end', 'center', 'stretch'] */
}
export default Column;
