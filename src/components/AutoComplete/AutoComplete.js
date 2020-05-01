import React from 'react'
import Style from './AutoComplete.style'
import StyledInputText from '../StyledInputText'
import { generateItem } from './AutoComplete.utils'

export class AutoComplete extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  componentDidUpdate () {
    const { data, highlightSearch } = this.props
    // call the fn that highlights the text only if there is some data in the result list.
    if (data.length) highlightSearch(this.state.searchTerm)
  }

  /**
  * Calls the fn that gets the matching items from the main content list
  * and sets the current string that the user is searching
  *
  * @param {Object} event - Input text onChange event object.
  */
  _handleOnChange = ({ target: { value: searchTerm } }) => {
    this.props.handleSearch(searchTerm)
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
