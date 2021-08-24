import pet from "@frontendmasters/pet";

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

//proxy server for adopt-me API
export const getPets = async (req, res) => {
  const location = req.params.location == "unfilled" ? "" : req.params.location;
  const breed = req.params.breed == "unfilled" ? "" : req.params.breed;
  const animal = req.params.type == "unfilled" ? "" : req.params.type;

  try {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    res.status(200).json(animals);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getPet = async (req, res) => {
  try {
    const oneAnimal = await pet.animal(req.params.id);
    res.status(200).json(oneAnimal.animal);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const petControllers = () => ({
  getPets: getPets,
  getPet: getPet,
});

export const crudControllers = (model) => ({
  getMany: getMany(model),
  getOne: getOne(model),
});
