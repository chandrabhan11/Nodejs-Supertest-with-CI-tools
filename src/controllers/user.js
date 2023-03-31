const dummyDatabase = [{
  "name": "user_1",
  "email": "user_1@gmail.com",
},
{
  "name": "user_2",
  "email": "user_2@gmail.com",
},]


/* 
  Add User from in database.
*/
exports.create = async (req, res) => {
  try {
    let userData = { email: req.body.email, name: req.body.name };

    // Save User in the database
    dummyDatabase.push(userData);
    res.send({ message: "Create successfully", data: userData });
  } catch (err) {
    res.status(500).send({
      message: err.message || err || "Some error occurred",
    });
  }
};

/* 
  Retrieve filtred User from the database.
*/
exports.list = (req, res) => {
  try {
    res.send({ total: dummyDatabase.length, data: dummyDatabase });
  } catch (err) {
    res.status(500).send({
      message: err.message || err || "Some error occurred",
    });
  }
};
