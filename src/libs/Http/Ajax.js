export default class Ajax {
  constructor (/* Object */o) {
    // this.url = o.url,
    // this.method = o.methid || 'GET',
    // this.async = o.async || true
    // this.onSuccess = o.onSuccess || function () {},
    // this.onError = o.onError || function () {},
    // this.dataType = o.dataType || 'json'
    this.url = null,
    this.method = 'GET',
    this.async =  true
    this.onSuccess = function () {},
    this.onError = function () {},
    this.dataType = 'json'
  }

  request () {
    this.temp()
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
  temp () {
    // console.log('in')
    // let $this = this
    // setTimeout(function() {
    //  $this.onSuccess({isMember: true})
    // }, 1500);
    this.onSuccess({isMember: false})
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
