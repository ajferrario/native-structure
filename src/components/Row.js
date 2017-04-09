import { Component, } from 'react';
import { View, } from 'react-native';

class Row extends Component {
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }
}

export default Row;
