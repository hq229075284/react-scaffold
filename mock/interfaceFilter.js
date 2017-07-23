module.exports = {
  '/home'(data=[]){
    data.list=data.list.filter(function(value,index){
      console.log(value)
      return value.id>9
    })
    return data
  }
}