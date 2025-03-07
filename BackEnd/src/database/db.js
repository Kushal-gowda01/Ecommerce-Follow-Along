const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL) // ✅ No need for options
        .then(() => console.log("Database connected successfully!"))
        .catch((err) => {
            console.error("Database connection failed:", err.message);
            process.exit(1);
        });
};

module.exports = connectDatabase;
