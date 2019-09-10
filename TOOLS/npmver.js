var efdir = require("efdir")
var d = efdir.rjson("./package.json")
var arr = d.version.split(".")
arr[arr.length-1] = parseInt(arr[arr.length-1])+1
var s = arr.join(".")
d.version = s
efdir.wjson("./package.json",d)
