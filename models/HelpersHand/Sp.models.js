import mongoose from "mongoose";

// spId:{},
// spName:{},//change
// spEmail:{},//change
// spPhoneNo:{},
// spEmailNo:{},
// photo:{},//change
// spCategory:{},
// spCharges:{},//change
// spRating:{}, //average ratings
// spPincode:{},//here change
// spReviews:{},//here too

const avaiPincodes = new mongoose.Schema({
    pins: {
        type: Number,
        required: true,
    }
});

const ReviewOfSp = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        stars: {
            type: Number,
            require: true
        },
        review: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const bookingSlots = new mongoose.Schema(
    {
        timings: {
            type: Date,
            required: true,
        }
    });

const userSchema = new mongoose.Schema(
    {
        // spId:{},

        spName: {
            type: String,
            required: true,
        },//change

        spEmail: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },//change

        spPhoneNo: {
            type: String,
            required: true,
            // match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
        },

        spPassword: {
            type: String,
            required: [true, "password is required"],
            unique: true,
            lowercase: true
        },

        // photo:{},//change

        spCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },

        spCharges: {
            type: Number,
            default: 0,
        },//change

        spRatingOA: {
            type: Number,
            default: 0,
        }, //average ratings

        spPincode: {
            type: [avaiPincodes],
        },//here change

        spBooking: {
            type: [bookingSlots],
        },

        spReviews: {
            type: [ReviewOfSp],
        }//here too

    }, { timestamps: true }
)
//timestamps is used to create logs in the database

export const User = mongoose.model("ServiceProvider", userSchema)
//convert to "users" when goes in mongo lowercase and in plural
// name of the table in Mongoose