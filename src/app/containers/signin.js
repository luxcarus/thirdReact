import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Ajax from 'libs/Http/Ajax'
import { Button, Checkbox, Input, Message } from 'components'
import { updateMemberStatus } from 'actions'

class SignIn extends React.Component {

  constructor (props) {
    super(props)
    this.ajax = null
    this.signIn = this.signIn.bind(this)
    this.idOnChange = this.idOnChange.bind(this)
    this.passwordOnChange = this.passwordOnChange.bind(this)
    this.state = {
      id: null,
      password: null
    }
  }

  signIn () {
    
    if (!this.ajax) this.ajax = new Ajax()
    this.ajax.setUrl('www.tt.com')
    this.ajax.setOnSuccess((data) => {
      if (data) {
        if (data.isMember) {
          // this.props.updateMemberStatus({
            //   isMember: data.isMember,
            //   id: data.id,
            //   name: data.className
            // })
          this.props.updateMemberStatus({
            ...data
          })
          this.context.router.history.push("home")
        } else {
          console.log('not a member')
        }
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