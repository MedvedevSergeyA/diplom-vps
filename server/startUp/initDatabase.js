const Device = require("../modals/Device");
const deviceMock = require("../mock/devices.json");
const Category = require("../modals/Category");
const categoryMock = require("../mock/categories.json");

module.exports = async () => {
  const devices = await Device.find();
  if (devices.length !== deviceMock.length) {
    await createInitialEntity(Device, deviceMock);
  }
  const categories = await Category.find();
  if (categories.length !== categoryMock.length) {
    await createInitialEntity(Category, categoryMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item.id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
