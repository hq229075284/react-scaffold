module.exports = {
  '/home'(data = []) {
    data.list = data.list.filter(function (value, index) {
      return value.id > 9
    })
    return data
  }
}