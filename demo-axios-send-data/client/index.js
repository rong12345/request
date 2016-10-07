var axios = require('axios');
var data = {
  title: 'myTitle',
  content: 'my Content'
}

axios.post('http://localhost:3000/posts',data)
