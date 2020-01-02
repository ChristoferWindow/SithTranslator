const translate = require('@vitalets/google-translate-api')
const {query} = require('express-validator')

exports.translate = function (req, res, next) {

  const {text, from, to} = req.query;


  translate(req.body.text, {from: req.body.from, to: req.body.to}).then(resTranslate => {
    console.log(resTranslate);

    res.send({
      'text': resTranslate.text,
      'from': req.body.from,
      'fromDetected': resTranslate.from.language.iso,
      'to': req.body.to
    })
    console.log(resTranslate.from.language.iso);

      //=> nl
  }).catch(err => {
      next(err.message);
  });
}
