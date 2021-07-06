const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Thing = sequelize.define("Thing", {
    slug: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING },
    isTreasure: { type: DataTypes.BOOLEAN },
  });
  SequelizeSlugify.slugifyModel(Thing, {
    source: ["name"],
  });
  return Thing;
};
