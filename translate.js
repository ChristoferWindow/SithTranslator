const translate = require('@vitalets/google-translate-api')
const {query} = require('express-validator/check')

exports.translate = function (req, res) {

  const {text, from, to} = req.query;

  if()
  translate(req.query.text, {from: req.query.from, to: req.query.to}).then(resTranslate => {
    console.log(req);

    res.send({
      'text': resTranslate.text,
      'fromLanguage': resTranslate.from.language.iso,
    })
    console.log(resTranslate.from.language.iso);

      //=> nl
  }).catch(err => {
      console.error(err);
  });
}

exports.validate = (method) => {
  switch (method) {
    case 'translate' : {
      return [
        query('text', 'Text to translate not specified').exists(),
        query('from', 'From language not specified').exists(),
        query('to', 'To language not specified').exists()
      ]
    }
  }
}
