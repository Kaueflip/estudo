const soma = (req, res) => {
    const soma = 100 + 1 

    //res.send({ soma : soma})
    res.json(soma)
};

module.exports = { soma }