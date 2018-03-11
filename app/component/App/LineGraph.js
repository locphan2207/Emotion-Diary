import React from 'react';
import {View, Text,
  ART
} from 'react-native';


export default class LineGraph extends React.Component {
  render() {
    console.log(ART);
    return (
      <View>
        <Text>Test</Text>
        <ART.Surface>
          <ART.Group>
            <ART.Shape
              d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
              stroke='#FFF'
              strokeWidth={1}
            />
          </ART.Group>
        </ART.Surface>
      </View>
    );
  }
}
