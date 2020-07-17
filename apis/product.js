export default axios => ({
  new: (payload) => {
    return axios.post(
      "/v1/product/new", payload

    )
      .then(res => res.data)
      .catch(err => console.error(err))

  },
  all: () => {
    return axios.get(
      "/v1/product/all"

    )
      .then(res => res.data)
      .catch(err => console.error(err))

  }

})
