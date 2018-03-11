import React from 'react';
import {View, Text
} from 'react-native';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';


export default class LineGraph extends React.Component {
  render() {
    return (
      <View>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={this.props.data} x="time" y="emotion" />
        </VictoryChart>
      </View>
    );
  }
}
