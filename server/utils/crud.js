export const getOne = (model) => async (req, res) => {
  try {
    let converted = "";
    let doc = {};
    if (req.params.id.includes("-")) {
      converted = req.params.id.split("-").join(" ");
      doc = await model.findOne({ title: converted }).lean().exec();
    } else {
      doc = await model.findOne({ _id: req.params.id }).lean().exec();
    }

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getMany = (model) => async (req, res) => {
  try {
    const docs = await model.find({}).lean().exec();

    res.status(200).json(docs);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const crudControllers = (model) => ({
  getMany: getMany(model),
  getOne: getOne(model),
});
