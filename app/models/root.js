var AV = require('leancloud-storage');
exports.root = function (req,res) {
  res.sendfile('./public/index.html');
}
