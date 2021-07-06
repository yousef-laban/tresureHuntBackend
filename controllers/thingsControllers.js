let { Thing } = require("../db/models");

// exports.categoryFetch = async (categoryId) => {
//   const myCategory = await Category.findByPk(categoryId);
//   return myCategory;
// };

exports.treasureList = async (req, res, next) => {
  try {
    const things = await Thing.findAll({
      where: {
        isTreasure: true,
      },
    });
    res.json(things);
  } catch (erroe) {
    next(erroe);
  }
};

exports.garbageList = async (req, res, next) => {
  try {
    const things = await Thing.findAll({
      where: {
        isTreasure: false,
      },
    });
    res.json(things);
  } catch (erroe) {
    next(erroe);
  }
};

exports.thingCreat = async (req, res, next) => {
  try {
    if (req.file) req.body.image = `http://localhost:8000/${req.file.path}`;

    const newThing = await Thing.create(req.body);
    res.status(201).json(newThing);
  } catch (erroe) {
    next(erroe);
  }
};
