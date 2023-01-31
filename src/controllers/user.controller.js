const create = (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;
  //const user = req.body;
  if (!name || !username || !email || !password || !avatar || !background){
    //res.json("Submit all fields to registration.");
    res.status(400).send({message :"Please fill all fields"})
  };
  res.status(201).send({
    message:"User created successfuly",
    user:{
        name,
        username,
        email,
        avatar,
        background,
    },
  });
};

module.exports = { create };
