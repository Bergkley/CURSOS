const fs = require('fs');

fs.unlink('arquivo.txt', function(err, file) {
    if(err){
        console.log(err);
        return
    }
})