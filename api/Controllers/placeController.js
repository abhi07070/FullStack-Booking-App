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
        addedPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
      });
      res.json(placeDoc);
    });
  } catch (error) {
    console.error("Error creating place:", error);
    res.status(500).json({ message: "Error creating place", error });
  }
};
