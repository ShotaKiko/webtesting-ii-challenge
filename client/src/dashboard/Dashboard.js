import React from 'react'

class Dashboard extends React.Component {
    state = {
        strikes: 0,
        balls: 0,
        message:""
    }

    render(){
        return(
            <>
                <h2>Dashboard</h2>
                <div>{this.state.message}</div>
                <button onClick={this.strike}>Strike</button>
                <button>Ball</button>
                <button>Foul</button>
                <button>Hit</button>
            </>
        )
    }

    strike = () => {
      this.setState({ strikes: this.state.strikes + 1 })
      this.setState({ message:"Strike!!" })
    }

}

export default Dashboard