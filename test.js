const http = require('http');

http
  .get('http://192.168.100.50:5000/screenlocked/status', (resp) => {
    const {statusCode} = resp;
    console.log(resp);
    // if (statusCode == 500 && this.allowOffline) {
    // }
    //   let data = '';
    //   resp.on('data', (chunk) => {
    //     data += chunk;
    //   });
    //   resp.on('end', () => {
    //     callback(parseInt(data));
    //   });
    // })
    // .on('error', (err) => {
    //   console.error('Error: ' + err.message);
    //   callback();
  })
  .on('error', (err) => {
    console.error(err.code);
  });
