import { api } from './config'

const get = async endpoint => {
  try {
    const response = await fetch(`${api.baseUrl}${endpoint}`)
    return response.json()
  } catch (e) {
    throw e
  }
}

export default { get }
