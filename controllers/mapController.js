import mapModel from "../models/mapModel.js";


// add maps

const addMaps = async (req, res) => {
    const { city, mapUrl } = req.body;
    try {
        const exist = await mapModel.findOne({ city })
        if (exist) {
            return res.json({ success: false, message: "City already exist.." })
        }
        const newMap = new mapModel({
            city: city,
            mapUrl: mapUrl
        })
        await newMap.save()
        res.json({ success: true, message: "Map uploaded" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "map not uploaded" })
    }
}

// fetch maps from db
// Fetch maps from DB by city (GET request with query parameters)
const fetchAllMaps = async (req, res) => {
    const { city } = req.query;
    try {
        const maps = await mapModel.find({ city: city });
        if (maps.length === 0) {
            return res.json({ success: false, message: "No maps found" });
        }
        res.json({ success: true, data: maps });
    } catch (err) {
        console.error('Error fetching maps:', err);
        res.status(500).json({ success: false, message: "Failed to fetch maps" });
    }
};



export { addMaps,fetchAllMaps }