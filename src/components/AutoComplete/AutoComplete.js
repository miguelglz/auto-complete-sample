import React from 'react'
import Style from './AutoComplete.style'
import StyledInputText from '../StyledInputText'
import { generateItem, highlightSearch } from './AutoComplete.utils'

export class AutoComplete extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  componentDidUpdate () {
    const { searchTerm } = this.state
    const { data } = this.props
    if (data.length) data.forEach(({ index, name }) => highlightSearch({ index, name, searchTerm }))
  }

  _handleOnChange = ({ target: { value: searchTerm } }) => {
    this.props.handleSearch({ searchTerm })
    this.setState({ searchTerm })
  }

  render () {
    const { label, placeholder, data, disableInput } = this.props
    const { searchTerm } = this.state

    return (
      <div>
        <StyledInputText
          placeholder={placeholder}
          labelText={label}
          onChange={this._handleOnChange}
          disable={disableInput}
        />
        <div>
          {
            !data.length && searchTerm !== ''
              ? <div style={Style.noResults}>No Results to Show for <i>{searchTerm}</i>...</div>
              : <ul id='result-list' style={Style.listContainer}>
                  {data.map(generateItem)}
                </ul>
          }
        </div>
      </div>
    )
  }
}

export default AutoComplete
