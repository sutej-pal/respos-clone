const cmd = require('node-cmd');
const axios = require('axios');

let userName = 'sutej-pal';
let cloneUrls = [];

cmd.run('mkdir repos');

axios.get('https://api.github.com/users/' + userName + '/repos')
    .then(res => {
        res.data.forEach((data) => {
            cmd.get(
                `cd repos && git clone ${data.clone_url}`,
                function (err, res, stderr) {
                    console.log('Repo cloned: ', data.clone_url)
                }
            );
        });
    }).catch(err => {
    console.log('err', err);
});
