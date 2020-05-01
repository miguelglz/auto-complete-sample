import React from 'react'

class StyledLink extends React.Component {
  render () {
    const { to, children } = this.props

    return (
      <a href={to} style={styles.text}>{children}</a>
    )
  }
}

const styles = {
  text: {
    color: '#034e8e'
  }
}

export default StyledLink
