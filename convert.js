"use strict"

require("get-pixels")("./terrain.png", function(err, data) {
  var buf = new Buffer(data.data)
  var obj = {
    shape: data.shape,
    offset: data.offset,
    stride: data.stride,
    data: buf.toString("base64")
  }
  console.log(JSON.stringify(obj))
})

