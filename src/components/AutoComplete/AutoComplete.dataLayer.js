import React from 'react'
import AutoComplete from './AutoComplete'
import { fetchContent } from './AutoComplete.utils'

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

  _handleSearch = ({ searchTerm }) => {
    const matchedItems = searchTerm === '' ? [] : this.state.contentList.filter(
      item => item.name.toLowerCase().includes(searchTerm.toLowerCase()
    ))
    this.setState({ matchedItems })
  }

  render () {
    const { matchedItems, fetched } = this.state

    return (
      <AutoComplete
        {...this.props}
        handleSearch={this._handleSearch}
        data={matchedItems}
        disableInput={!fetched}
      />
    )
  }
}

export default AutoCompleteDataLayer
