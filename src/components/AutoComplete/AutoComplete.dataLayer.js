import React from 'react'
import AutoComplete from './AutoComplete'
import {
  fetchContent,
  highlightInElement
} from './AutoComplete.utils'

export class AutoCompleteDataLayer extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      contentList: [],
      matchedItems: [],
      fetched: false
    }
  }

  async componentDidMount () {
    const { resourceEndpoint } = this.props
    const contentList = await fetchContent({ resourceEndpoint })
    this.setState({ contentList, fetched: true })
  }

  handleSearch = searchTerm => {
    const matchedItems = searchTerm === '' ? [] : this.state.contentList.filter(
      ({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()
    ))

    this.setState({ matchedItems }) 
  }

  highlightSearch = searchTerm => {
    this.state.matchedItems.forEach(
      ({ index, name }) => highlightInElement({ index, name, searchTerm })
    )
  }

  render () {
    const { matchedItems, fetched } = this.state

    return (
      <AutoComplete
        {...this.props}
        handleSearch={this.handleSearch}
        highlightSearch={this.highlightSearch}
        data={matchedItems}
        disableInput={!fetched}
      />
    )
  }
}

export default AutoCompleteDataLayer
