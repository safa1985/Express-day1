const notFound = (req, res, next) => {
  return res.status(400).json({ meg: "this path is not found!" });
};
module.exports = notFound;
