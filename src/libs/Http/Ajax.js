export default class Ajax {
  constructor (/* Object */o = {}) {
    this.url = o.url || null,
    this.method = o.method || 'GET',
    this.async =  o.async || true
    this.onSuccess = o.onSuccess || function () {},
    this.onError = o.onError || function () {},
    this.dataType = o.dataType || 'json'
  }

  request (/* Object */ data) {
    this.temp(data)
    // this.method = this.method.toUpperCase()
    // var req = new XMLHttpRequest()
    // req.open(this.method, this.url, this.async)
    // req.setRequestHeader("Access-Control-Allow-Origin", "*");
    //   req.onload = function (e) {
    //     if (req.readyState == 4) {
    //       if (req.status == 200 || req.status == 0) {
    //         if (this.dataType === "json") {
    //           this.onSuccess(JSON.parse(req.responseText))
    //         }
    //       } else {
    //         this.onError(req)
    //       }
    //     }
    //   }
    // req.request = function () {
    //   req.send(null)
    // }
  }
  temp (data) {
    setTimeout(() => {
      if (data.id === '1' && data.password === '1') {
        this.onSuccess({isMember: true, id: 'Yamada', name: 'Daisuke'})
      } else {
        this.onSuccess({isMember: false})
      }
    }, 550)
  }

  setUrl (url) {
    this.url = url
    return this
  }
  setMethod (method) {
    this.method = method
    return this
  }
  setAsync (async) {
    this.async = async
    return this
  }
  setOnSuccess (onSuccess) {
    this.onSuccess = onSuccess
    return this
  }
  setOnError (onError) {
    this.onError = onError
    return this
  }
  setDataType (dataType) {
    this.dataType = dataType
    return this
  }

}
