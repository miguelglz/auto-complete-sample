import React from 'react'

class StyledInputText extends React.Component {
  render () {
    const {
      placeholder,
      labelText,
      onChange,
      disable
    } = this.props

    return (
      <label>
        {labelText}
        <input
          type='text'
          style={styles.input}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disable}
        />
      </label>
    )
  }
}

const styles = {
  input: {
    fontSize: 22,
    display: 'block',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    width: '100%',
    border: 'none'
  }
}

export default StyledInputText
