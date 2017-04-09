import React from 'react';
import { View, Text, } from 'react-native'
import { Row, } from '../index';

const RowTest = {
  children: {
    empty: [],
    oneChild: [ <View key=1 style={flex: 1}><Text>Child 1</Text></View>, ],
    multipleChildren: [
      <View key=1 style={flex: 1}><Text>Child 1</Text></View>,
      <View key=2 style={flex: 1}><Text>Child 2</Text></View>,
    ],
  },
  props: {
    flex: [ 2, ],
    color: [ '#29B6C0', 'purple', ],
    hAlign: [ 'flex-start', 'flex-end', 'center', 'space-around', ],
    vAlign: ['flex-start', 'flex-end', 'center', 'stretch', ],
  },
}

function generateCases() {
  let c = 
}
