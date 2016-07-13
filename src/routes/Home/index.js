import HomeView from './components/HomeView'

import request from 'superagent'
import utils from 'utils'

request
  .get(utils.uriSearch().youtube)
  .query({
    part: 'snippet',
    key: utils.apiKey().youtube,
  })
  .end((err, res) => {
    console.log(err)
    console.log(res)
  })

// Sync route definition
export default {
  component: HomeView
}
