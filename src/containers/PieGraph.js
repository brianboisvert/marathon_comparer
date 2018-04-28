import React from 'react';
import {Bar} from 'react-chartjs';
import {connect} from 'react-redux'


class PieGraph extends React.Component {

  state = {
    chartData: {
      labels: ["Recovery Run", "Mid Run", "Long Run"],
      datasets: [
        {
          label: 'Run Type',
          data: [0, 0, 0],
        }
      ],
    }
  }

render() {
  const hey = this.props.userData ? this.props.userData.map((run, i) => {
    // console.log(run)
    if (run.distance <= 6437.38) {
      let newValue = {...this.state.chartData}
      let element = newValue["datasets"][0]["data"][0] += 1
      newValue["datasets"][0]["data"][0] = element
    } else if (run.distance <= 12874.8) {
      let newValue = {...this.state.chartData}
      let element = newValue["datasets"][0]["data"][1] += 1
      newValue["datasets"][0]["data"][1] = element
    } else {
      let newValue = {...this.state.chartData}
      let element = newValue["datasets"][0]["data"][2] += 1
      newValue["datasets"][0]["data"][2] = element
    }
  }) : null


  return(
    <div>
    <div className="chart">
      <Bar
        data={this.state.chartData}
          options={{
          maintainAspectRatio: false
        }}
    />
    </div>
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return{
    userData: state.UserData
  }
}

export default connect(mapStateToProps)(PieGraph);
