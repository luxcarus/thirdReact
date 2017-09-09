import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components/input'
import { Checkbox } from 'components/input'
import { Button } from 'components/button'
import { Message } from 'components/message'
import { connect } from 'react-redux'
import Ajax from 'libs/Http/Ajax'

import { updateMemberStatus } from 'actions'
// export default class SignIn extends React.Component {
class SignIn extends React.Component {

  constructor (props) {
    super(props)
    this.ajax = null
    this.signIn = this.signIn.bind(this)
    this.idOnChange = this.idOnChange.bind(this)
    this.passwordOnChange = this.passwordOnChange.bind(this)
    this.state = {
      // isMember: true,
      id: null,
      password: null
    }
  }

  signIn () {
    
    let $this = this
    if(!this.ajax){
      this.ajax = new Ajax()
    }
    this.ajax.setUrl('www.tt.com')
    this.ajax.setOnSuccess((data) => {
      if (data) {
        // if (data.isMember) {
        //   // this.setState({isMember: true})
        //   this.context.router.history.push("home")
        //   debugger
        // } else {
        //   console.log('not a member')
        //   // this.setState({isMember: false})
        // }
        this.props.updateMemberStatus({
          isMember: data.isMember,
          id: 'sth1',
          name: 'sth2'
        })

        console.log(this.props)


      }
    }).request({id: this.state.id, password: this.state.password})
  }

  idOnChange (e) {
    this.setState({id: e.target.value})
  }
  passwordOnChange (e) {
    this.setState({password: e.target.value})
  }

  render () {
    return (
      <div>
        <div className = "signin">
          Welcome ~ :D
          <Input class="id" placeholder="id or e-mail" onChange={this.idOnChange}></Input>
          <Input class="password" placeholder="password" onChange={this.passwordOnChange}></Input>
          <Checkbox/>
          <Button value="Sign in" onClick={this.signIn}/>
        </div>

        {/* {!this.state.isMember && <Message type="caution" message="Check your id or password"/>} */}

      </div>
    )
  }
}
SignIn.contextTypes = {
  router: PropTypes.object.isRequired
}
let mapStateToProps = (state) => {
  console.log(state)
  return {
    isMember: state.signin.isMember
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateMemberStatus: (value) => dispatch(updateMemberStatus(value))
  };
}
export default SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn)