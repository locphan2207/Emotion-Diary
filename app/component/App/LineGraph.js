import React from 'react';
import {View, Text,
  TouchableOpacity
} from 'react-native';
import {
  VictoryChart, VictoryLine, VictoryVoronoiContainer, VictoryAxis,
  VictoryTheme, VictoryGroup, VictoryScatter
} from 'victory-native';

import moment from 'moment';
import styles from '../../style/styleSheet';

export default class LineGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredData: [],
      scrollEnabled: true
    };
  }

  renderLine() {
    console.log(this.props.data);
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        height={400} width={400}
        padding={{left: 100, top: 60, right: 70, bottom: 60}}
        domainPadding={5}
        containerComponent={
          <VictoryVoronoiContainer
          labels={(d) => {
            if (d.text === '') return `${moment(d.time).format('ddd, MMM D, h:mm:ss a')}`;
            else return `${moment(d.time).format('ddd, MMM D, h:mm:ss a')}\n"${d.text}"`;
          }}
          />
        }
      >
        <VictoryLine
          style={{data: {stroke: '#B33F62'}}}
          x='date' y='emotion'
          scale='time'
          data={this.props.data}
          animate={{duration: 2000}}
        />

        <VictoryAxis style={{ axis: {strokeWidth: 1} }}
          tickFormat={() => ''}
          />
        <VictoryAxis
          dependentAxis
          tickValues={[-2, -1, 0, 1, 2, 3, 4]}
          tickFormat={['Depressed', 'Sad', 'Meh', 'Happy', 'Delighted', 'Blissful', 'Loved']}
          />
      </VictoryChart>
    );
  }

  render() {
    if (this.props.data.length < 1) return null;
    return (
      <View style={styles.graphContainer}>
        {this.renderLine()}
      </View>
    );
  }
}
// incase I want scatter again:
// <VictoryChart
// >
//   <VictoryScatter
//     style={{data: {stroke: '#55B295'}}}
//     x='date' y='emotion'
//     scale='time'
//     data={this.props.data}
//     animate={{duration: 2000}}
//   />
// </VictoryChart>
