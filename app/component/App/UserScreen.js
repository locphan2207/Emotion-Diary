import React from 'react';
import {View, Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
// import graphUtil from '../../graphUtil/graphUtil';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

import styles from '../../style/styleSheet';
import firebase from '../../../firebase/firebase';
import PieGraph from './PieGraph';
import LineGraph from './LineGraph';

export default class UserScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emotions: [],
      chartType: 'pie',
      filterType: 'day'
    };
  }

  componentDidMount() {
    this.collectData();
  }

  collectData() {
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref(`emotions/${uid}`).once('value').then(snapshot => {
      this.setState({
        emotions: Object.values(snapshot.val())
      });
    });
  }

  filterData() {
    const end = moment();
    let start;
    switch (this.state.filterType) {
      case 'day':
        start = moment().subtract(24, 'hours').unix();
        break;
      case 'week':
        start = moment().subtract(7, 'days').unix();
        break;
      case 'month':
        start = moment().subtract(1, 'months').unix();
        break;
    }
    // Get current date, then calculate the range of data from 12AM to 11:59PM
    const filteredData = [];
    this.state.emotions.forEach(data => {
      if (data.time >= start && data.time <= end) {
        data.date = new Date(data.time);
        filteredData.push(data);
      }
    });
    return filteredData;
  }

  renderChart() {

    if (this.state.chartType === 'pie') {
      return (
        <PieGraph
          data={this.filterData()}
        />
    );
    } else {
      return (
        <LineGraph
          data={this.filterData()}
        />
      );
    }
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Auth');
    });
  }

  render() {
    return (
      <LinearGradient
        colors={['#C0FDFB', '#c5eaf9', '#FCFFFD']}
        style={styles.container}>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Text>Drawer</Text>
          </TouchableOpacity>

          {this.renderChart()}

          <TouchableOpacity onPress={() => this.setState({filterType: 'day'})}>
            <Text>Last 24h</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({filterType: 'week'})}>
            <Text>This week</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({filterType: 'month'})}>
            <Text>This month</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({chartType: 'pie'})}>
            <Text>Pie Chart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({chartType: 'line'})}>
            <Text>Line Chart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.logOut}
            onPress={() => this.signOut()}>
            <Text style={{color: 'red'}}>Log Out</Text>
          </TouchableOpacity>
      </LinearGradient>
    );
  }
}
