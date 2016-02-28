/**
 * Created by akito on 10/11/15.
 */

import fetch from 'isomorphic-fetch';
import $ from 'jquery-browserify';

fetch('/api').then((res) => {
  return res.json()
}).then((res) => {
  $('#port').text(res.port);
});
