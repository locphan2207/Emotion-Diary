import React from 'react';
import {View, Text,
  TouchableOpacity
} from 'react-native';
import {VictoryChart,
  VictoryPie,
  VictoryLine,
  VictoryTooltip
} from 'victory-native';
import moment from 'moment';
import styles from '../../style/styleSheet';

export default class PieGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredColor: ['#899D78', '#A1B0AB', '#55B295', '#DB7F67', '#ED9B40',
        '#D34F73', '#BA3B46'],
      filteredData: [ //initial state of pie chart
        {x: 'Depressed', y: 1},
        {x: 'Sad', y: 1},
        {x: 'Meh', y: 1},
        {x: 'Happy', y: 1},
        {x: 'Delighted', y: 1},
        {x: 'Blissful', y: 1},
        {x: 'Loved', y: 1},
      ]
    };
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.filterData(this.props);
    }
  }

  componentWillReceiveProps(nextProps) { // incase no data loaded in did mount, we do here
    this.filterData(nextProps);
  }

  countData(props) {
    const emoText = ['Depressed', 'Sad', 'Meh', 'Happy', 'Delighted', 'Blissful', 'Loved'];
    const colorScale=['#899D78', '#A1B0AB', '#55B295', '#DB7F67', '#ED9B40',
      '#D34F73', '#BA3B46'];
    const emoCount = {};
    // initialize:
    for(let i = 0; i < 7; i++) {
      emoCount[i] = {x: emoText[i], y: 0, color: colorScale[i]};
    }
    //Count:
    props.data.forEach(emo => {
      emoCount[emo.emotion+2].y += 1; //+2 becuase we in database it range from -2 -> 5
    });
    return Object.values(emoCount);
  }

  filterData(props) {  // filter color for only available emotions
    const filteredColor = [];
    const filteredData = [];
    this.countData(props).forEach(data => {
      if (data.y > 0) {
        filteredColor.push(data.color);
        filteredData.push(data);
      }
    });
    // }
    this.setState({filteredColor, filteredData});
  }

  renderPie() {
    return (
      <VictoryPie
        style={{labels: {
          fontSize: 15,
          fill: 'white'
        }}}
        labelRadius={90}
        padAngle={2}
        colorScale={this.state.filteredColor}
        innerRadius={55}
        labels={(data) => (data.x)}
        data={this.state.filteredData}
        animate={{duration: 1500}}
      />
    );
  }

  render() {
    console.log(this.state.filteredData);
    // if (!this.props.countData) return null;
    return (
      <View style={styles.graphContainer}>
        {this.renderPie()}
      </View>
    );
  }
}
