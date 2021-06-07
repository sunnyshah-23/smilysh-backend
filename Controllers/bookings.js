var db = require("../db");

exports.bookconsultation = (req, res) => {
  const { name, email, phone } = req.body;
  const sql = `insert into booknow(name,email,phone) values('${name}','${email}','${phone}') `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res
        .status(200)
        .json(
          "We have received your query, our consultant will get in touch with you soon!"
        );
    }
  });
};

exports.getOrthodontist = (req, res) => {
  const sql = "SELECT * from dentist_search";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json(result);
    }
  });
};
