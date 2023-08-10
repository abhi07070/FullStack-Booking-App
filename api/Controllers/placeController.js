import Place from "../Models/placeModel.js";
import JWT from "jsonwebtoken";

export const placeController = async (req, res) => {
  const { token } = req.cookies;
  const {
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  } = req.body;

  try {
    JWT.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
      if (err) throw err;

      const placeDoc = await Place.create({
        owner: userData.id,
        title,
        address,
        photos: addedPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
      });
      res.status(200).send({
        success: true,
        placeDoc,
        message: "Place added successfully",
      });
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating place", success: false, error });
  }
};

export const getPlacesController = async (req, res) => {
  try {
    const { token } = req.cookies;
    JWT.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
      const { id } = userData;
      const places = await Place.find({ owner: id });
      res.status(200).send({
        places,
        success: true,
        message: "Places fetched successfully",
      });
    });
  } catch (error) {
    res.status(500).send({
      error,
      success: false,
      message: "Errro while getting place",
    });
  }
};

export const getPlacesByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);
    res.status(200).send({
      success: true,
      message: "Places fetched successfully",
      place,
    });
  } catch (error) {
    res.status(500).send({
      error,
      success: false,
      message: "Errro while getting place",
    });
  }
};

export const updatePlaceController = async (req, res) => {
  try {
    const { token } = req.cookies;
    const {
      id,
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    } = req.body;

    JWT.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
      const placeDoc = await Place.findById(id);

      if (userData.id === placeDoc.owner.toString()) {
        placeDoc.set({
          title,
          address,
          photos: addedPhotos,
          description,
          perks,
          extraInfo,
          checkIn,
          checkOut,
          maxGuests,
        });
        await placeDoc.save();
        res.status(200).send({
          message: "Place updated successfully",
          success: true,
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      error,
      success: false,
      message: "Errro while updating place",
    });
  }
};
