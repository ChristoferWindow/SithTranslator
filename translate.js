const translate = require('@vitalets/google-translate-api')
const {query} = require('express-validator')

exports.translate = function (req, res, next) {

  const {text, from, to} = req.query;

  translate(req.query.text, {from: req.query.from, to: req.query.to}).then(resTranslate => {
    console.log(resTranslate);

    res.send({
      'text': resTranslate.text,
      'fromLanguage': resTranslate.from.language.iso,
    })
    console.log(resTranslate.from.language.iso);

      //=> nl
  }).catch(err => {
      next(err.message);
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
