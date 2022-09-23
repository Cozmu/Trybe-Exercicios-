import React from "react"

class Forms extends React.Component {
state = {
  number: 0,
  text: '',
  check: false,
}

handleChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({ 
    [name]: value 
  })
} 
render() {
  const { text, number, check } = this.state;
  return(
    <form className="Forms">
      <label>nome
        <input 
          name="text"
          type="text" 
          value={ text } 
          onChange={this.handleChange}
        />
      </label>
      <label>numero
        <input 
          type="number"
          name="number"
          value={ number }
          onChange={this.handleChange}
        />
      </label>
      <label> VC E GAY?
          <input 
          type="checkbox"
          value={ check } 
          onChange={this.handleChange}
          />
      </label>
    </form>
  )
  }
}

export default Forms;
