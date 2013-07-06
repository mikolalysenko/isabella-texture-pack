var terrain = require("./terrain.json")
var decodeBase64 = require("base64-js").toByteArray
var ndarray = require("ndarray")

module.exports = ndarray(
  new Uint8Array(decodeBase64(terrain.data)),
  terrain.shape,
  terrain.stride,
  terrain.offset)

