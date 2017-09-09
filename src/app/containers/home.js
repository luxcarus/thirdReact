import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Header from 'containers/header'
import Footer from 'containers/footer'
class Home extends React.Component {
  render () {
    return (
      <div>
        <Header class='tt-header'/>
        <div className = "home">
          This is Home
        </div>
        <div>
          id : {this.props.id}
        </div>
        <div>
          name : {this.props.name}
        </div>
        <Footer/>
      </div>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}
export default Home = connect((state) => {
  return {
    id: state.signin.id,
    name: state.signin.name,
  }
}, (dispatch) => {
  return {
    updateMemberStatus: (value) => dispatch(updateMemberStatus(value))
  }
})(Home)