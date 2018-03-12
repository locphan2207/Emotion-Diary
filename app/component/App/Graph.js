import React from 'react';
import {View, Text
} from 'react-native';
import {VictoryBar, VictoryChart, VictoryTheme,
  VictoryPie
} from 'victory-native';

import styles from '../../style/styleSheet';

export default class Graph extends React.Component {
  constructor() {
    super();
    this.state = {filteredColor: [], filteredData: []};
  }
  componentDidMount() {
    this.filterData();
  }

  countData() {
    const emoText = ['Depressed', 'Sad', 'Meh', 'Happy', 'Joyful', 'Delighted', 'Loved'];
    const colorScale=['#899D78', '#A1B0AB', '#55B295', '#DB7F67', '#ED9B40',
      '#D34F73', '#BA3B46'];
    const emoCount = {};
    // initialize:
    for(let i = 0; i < 7; i++) {
      emoCount[i] = {x: emoText[i], y: 0, color: colorScale[i]};
    }
    //Count:
    this.props.data.forEach(emo => {
      emoCount[emo.emotion+2].y += 1; //+2 becuase we in database it range from -2 -> 5
    });
    console.log(emoCount);
    return Object.values(emoCount);
  }

  filterData() {  // filter color for only available emotions
    const filteredColor = [];
    const filteredData = [];
    console.log(this.props);
    // if (this.props.countData) {
      this.countData().forEach(data => {
        if (data.y > 0) {
          filteredColor.push(data.color);
          filteredData.push(data);
        }
      });
    // }
    this.setState({filteredColor, filteredData});
  }

  render() {
    console.log(this.props);
    // if (!this.props.countData) return null;
    return (
      <View>
        <VictoryPie
          style={{labels: {
            fontSize: 13,
            fill: 'white'
          }}}
          labelRadius={90}
          padAngle={2}
          colorScale={this.state.filteredColor}
          innerRadius={60}
          data={this.state.filteredData}
        />
      </View>
    );
  }
}
