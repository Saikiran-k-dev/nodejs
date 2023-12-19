// Please do not change the prewritten code
import axios from 'axios';

const Solution = async () => {
  axios.get('https://api.codingninjas.com/api/v3/event_tags')
    .then(response => {
        // Handle response
        console.log(response.data);
    })
};
Solution();
// module.exports = Solution;
