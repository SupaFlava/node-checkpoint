const fs = require("fs");
const path = require("path");

module.exports = function (pathFile, ext, callback) {
  ext = "." + ext;
  fs.readdir(pathFile, function (err, list) {
    if (err) {
      return callback(err);
    }
    let filtred = [];
    list.forEach(function (file) {
      if (path.extname(file) === ext) {
        filtred.push(file);
      }
    });
    return callback(null, filtred);
  });
};
