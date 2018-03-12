import React, {
  Component,
} from 'react';
import {View,Text,ART} from 'react-native';
const {
  Group,
  Shape,
  Surface,
} = ART;

export default class Art extends Component {
  render() {
    return (
      <View>
        <Surface width={200} height={100}>
          <Group x={0} y={0}>
            <Shape
              d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
              stroke="#000"
              strokeWidth={1}
            />
          </Group>
        </Surface>
      </View>
    );
  }
}
