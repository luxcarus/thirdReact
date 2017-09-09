import React from 'react'
import PropTypes from 'prop-types';
// export default class Input extends React.Component {
class Input extends React.Component {
  render () {
    return (
      <div> 
        <input type="text" className={this.props.class} placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        ></input>
      </div>
    )
  }
}
Input.PropTypes = {
  value: PropTypes.bool.isRequired,
  placeholder: PropTypes.func,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
}
export default Input


// export const Input = (props) => {
//   Input.PropTypes = {
//     value: PropTypes.bool.isRequired,
//     placeholder: PropTypes.func,
//     onSubmit: PropTypes.func,
//     onChange: PropTypes.func
//   }
//   return (
//       <div> 
//         <input placeholder={props.placeholder}></input>
//       </div>
//     )
//   }
// }