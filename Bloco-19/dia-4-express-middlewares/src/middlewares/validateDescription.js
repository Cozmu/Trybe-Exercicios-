const validateDescription = (req, res, next) => {
    const { description } = req.body;
    if (!description) {
        return res.status(400).json({ message: 'O campo description é obrigatório' });
    }
    const { rating, createdAt, difficulty } = description;
    // const arr = Object.keys(description);
    if (rating === undefined) {
        return res.status(400).json({ message: 'O campo rating é obrigatório' });
    }
    if (!createdAt) {
        return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
    } 
    if (!difficulty) {
        return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
    }
    return next();
};

module.exports = validateDescription;