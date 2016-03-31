var mongoose = require('mongoose');

module.exports = {
  url: 'mongodb://admin:password@ds023108.mlab.com:23108/testmongodb',
  connect: function(){
      mongoose.connect(this.url);
  }
};
