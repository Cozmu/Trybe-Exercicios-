const validatesignup = (req, res, next) => {
    const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
    return next();
};

module.exports = validatesignup;