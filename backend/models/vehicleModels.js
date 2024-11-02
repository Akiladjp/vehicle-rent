import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema ({

    vehicleName: {
        type: String,
        required: true,
    },

    transmission: {
        type: String,
        required: true,
    },

    engine: {
        type: String,
        required: true,
    },

    fuel: {
        type: String,
        required: true,
    },

    seat: {
        type: Number,
        required: true,
    },

    color: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },

    driver: {
        type: String,
        required: true,
    }
})


export default mongoose.model("vehiclInfo", vehicleSchema);