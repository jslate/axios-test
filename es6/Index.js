import axios from 'axios';

document.getElementById('button-good').onclick = () => {
  axios.post('/do_good_post')
    .then((response) => console.log(`Success, response: ${JSON.stringify(response)}`))
    .catch((error) => console.log(`Error occurred: ${error}`));
};

document.getElementById('button-bad').onclick = () => {
  axios.post('/do_bad_post')
    .then((response) => console.log(`Success, response: ${JSON.stringify(response)}`))
    .catch((error) => console.log(`Error occurred: ${error}`));
};
