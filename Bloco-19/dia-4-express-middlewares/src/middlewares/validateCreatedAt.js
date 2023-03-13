const validateCreatedAt = (req, res, next) => {
    const { description: { createdAt } } = req.body;
    const re = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    if (!createdAt.match(re)) {
        return res.status(400)
            .json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
    }
    
    return next();
};

module.exports = validateCreatedAt;