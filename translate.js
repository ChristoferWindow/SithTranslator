const translate = require('@vitalets/google-translate-api');

exports.translate = function (req, res) {
  translate(req.quer.text, {from: req.query.from, to: req.query.to}).then(resTranslate => {
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
