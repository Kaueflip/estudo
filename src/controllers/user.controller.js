const create = (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;
  //const user = req.body;
  if (!name || !username || !email || !password || !avatar || !background){
    res.json("Submit all fields to registration.");
  }
  res.json("ok");
};

module.exports = { create };
