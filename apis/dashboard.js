export default axios => ({
  revenue: () => {
    return axios.get(
      "/v1/dashboard/revenue/"
    )
      .then(res => res.data)
      .catch(err => console.error(err))

  }

})
