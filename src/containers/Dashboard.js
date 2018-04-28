import React from 'react';
import AccessToken from '../actions/AccessTokens';
import { connect } from 'react-redux';
import {Bar, Line, Pie} from 'react-chartjs';
import PieGraph from './PieGraph'


class Dashboard extends React.Component {

  state = {
    data: [0, 0, 0]
    // chartData: {
    //   labels: ["Recovery Run", "Mid Run", "Long Run"],
    //   datasets: [
    //     {
    //       label: 'Run Type',
    //       data: [0, 0, 0],
    //     }
    //   ],
    // }
  }

  categorizeRuns () {
    this.props && this.props.userData ? this.props.userData.map((run, i) => {
      // console.log("hit");
      // if (run.distance <= 6437.38) {
      //   let newValue = {...this.state.chartData}
      //   newValue.datasets["data"][0] += 1
      //
      //   this.setState({
      //     chartData: newValue
      //   })
      //
      // } else if (run.distance <= 12874.8) {
      //   console.log("cool")
      // } else {
      //   console.log("nice")
      // }
    }) : console.log("Nothing yet");
  }

  componentDidMount() {
    this.props.fetchData(window.location.href.split('').splice(45).join(''));
  }

  // <div className="chart">
  //   <Bar
  //     data={this.state.chartData}
  //       options={{
  //       maintainAspectRatio: false
  //     }}
  // />
  // </div>

  render() {
    // console.log("state", this.state);
    // console.log("props", this.props);

    return(
      <div>
      Dashboard
      <PieGraph />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  userData: state.UserData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (token) => {dispatch (AccessToken(token))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


// http://localhost:3000/dashboard/?state=&code=1dee3eaf1b74bdb6df004f1c048634ee601f0df0
