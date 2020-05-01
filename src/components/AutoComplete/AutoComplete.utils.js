import React from 'react'
import API from '../../helpers/api'
import Style from './AutoComplete.style'

/**
 * Fetch the content from an spcified resource.
 *
 * @param {object} params - Parameters
 * @param {number} params.resourceEndpoint - The API get endpoint to be called.
 *
 * @returns {Array} List of items related to the content.
 */
export async function fetchContent ({ resourceEndpoint }) {
  try {
    const data = await API.get(resourceEndpoint)
    return data.results
  } catch (err) {
    console.error(err)
  }
}

/**
 * Generate a list item to be appended to the result list.
 *
 * @param {object} params - Parameters
 * @param {string} params.index - Unique identifier retrived from the content list.
 * @param {string} params.name - Name to be displayed.
 *
 * @returns {object} LI HTML Element.
 */
export const generateItem = ({ index, name }) => <li key={index} style={Style.listItem} id={index}>{name}</li>

/**
 * Changes the background color of each list element text that matches the search term.
 *
 * @param {object} params - Parameters
 * @param {string} params.index - Unique identifier retrived from the content list.
 * @param {string} params.name - Name to be displayed.
 * @param {string} params.searchTerm - Input value from the search bar.
 *
 */
export const highlightInElement = ({ index, name, searchTerm }) => {
  const liElement = document.getElementById(index)
  const exp = new RegExp(searchTerm, 'ig')
  liElement.innerHTML = name.replace(
    exp, `<span style="background-color: #85bae7">${searchTerm.toLowerCase()}</span>`
  )
}
