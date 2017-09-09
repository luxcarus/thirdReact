import React from 'react'
import PropTypes from 'prop-types';
import {Input} from 'components/input'
import {Checkbox} from 'components/input'
import {Button} from 'components/button'
import {Message} from 'components/message'
import Ajax from 'libs/Http/Ajax'
export default class SignIn extends React.Component {

  constructor (props) {
    super(props)
    this.ajax = null
    this.signIn = this.signIn.bind(this);
    this.state = {
      isMember: true
    }
  }

  // componentDidMount () {
  //   console.log(9999)
  //   console.log(this)
  // }

  signIn () {
    
    if(!this.ajax){
      this.ajax = new Ajax()
    }
    this.ajax.setUrl('www.tt.com')
    this.ajax.setOnSuccess((data) => {
      console.log(data)
      if (data) {
        if (data.isMember) {
          this.context.router.history.push("home");
        } else {
          console.log('not a member')
          // this.state.isMember = false
          this.setState({isMember: false})
        }
      }
    }).request()
  }

  render () {
    return (
      <div>
        <div className = "signin">
          Welcome ~ :D
          <Input class="id" placeholder="id or e-mail"></Input>
          <Input class="password" placeholder="password"></Input>
          <Checkbox/>
          <Button value="Sign in" onClick={this.signIn}/>
        </div>

        {!this.state.isMember && <Message type="caution" message="Check your id or password"/>}

      </div>
    )
  }
}
SignIn.contextTypes = {
  router: PropTypes.object.isRequired
};




// let ajax = new Ajax({
//   url: 'signin',
//   method: 'GET',
//   onSuccess: (data) => {
//     if (data) {
//       if (!data.isMember) {
//         this.context.router.history.push("home");
//       } else {
//         console.log('not a member')
//       }
//     }
//   },
//   onError: (err) => {
//   },
// }).request()