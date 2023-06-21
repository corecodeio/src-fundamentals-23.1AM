const validatorData = (request, response, next) => {
  if (request.body.name === undefined || request.body.age === undefined) {
    return response.status(400).json({ message: "faltan datos" });
  }
  if (request.body.name.length < 4) {
    return response.status(400).json({ message: "el nombre es muy corto" });
  }
  if (request.body.age < 18) {
    return response.status(400).json({ message: "debe ser mayor de edad" });
  }
  next();
};

module.exports = validatorData;
