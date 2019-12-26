import axios from "axios";

function translate(toTranslate, from, to){
  console.log('he');
  return
    axios.post('/translate', {
      text: toTranslate,
      from: from,
      to: to
    })
    .then(function (response) {
      console.log( response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default translate;
