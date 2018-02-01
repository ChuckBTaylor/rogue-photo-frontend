export default function(){

  // const userID = () => {
  //   const decoder = require('jwt-decode')
  //   const decoded = decoder(localStorage.getItem('jwtToken'))
  // }
  const { API_ROOT } = require('./api-config')

  const railsHeaders = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const railsPost = {...railsHeaders, method: 'POST'}

  // const railsDestroy = {...railsHeaders, method: 'DESTROY'}

  // const railsPatch = {...railsHeaders, method: 'PATCH'}

  return {
    galleries: {
      fetch: () => {
        return fetch(`${API_ROOT}/galleries`)
          .then(res => res.json())
      },

      show: name => {
        // const gallery = {gallery: {name}}
        return fetch(`${API_ROOT}/cloudinary_galleries?name=${name}`)
          .then(res => res.json())
      },

      postNew: (name, tags) => {
        const user_id = 1
        const body = JSON.stringify({name, tags, user_id})
        return fetch(`${API_ROOT}/galleries`, {
          ...railsPost,
          body
        })
        .then(res => res.json())
      }
    },

    photographers: {
      fetch: () => {
        return fetch(`${API_ROOT}/users`)
          .then(res => res.json())
      }
    }
  }
}
