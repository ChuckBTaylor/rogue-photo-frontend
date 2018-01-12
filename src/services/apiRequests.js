export default function(){

  const userID = () => {
    const decoder = require('jwt-decode')
    const decoded = decoder(localStorage.getItem('jwtToken'))
  }
  const { API_ROOT } = require('./api-config')

  const railsHeaders = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const railsPost = {...railsHeaders, method: 'POST'}

  const railsDestroy = {...railsHeaders, method: 'DESTROY'}

  const railsPatch = {...railsHeaders, method: 'PATCH'}

  return {
    gallery: {
      fetch: () => {
        return fetch(`${API_ROOT}/galleries`)
          .then(res => res.json())
      }
    }
  }
}
