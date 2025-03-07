const app = require("./app");
const connectDatabase = require("./src/database/db"); // Ensure this file exists

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`);
    console.log("Shutting down the server due to an uncaught exception.");
    process.exit(1);
});

// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./src/config/.env" }); // Corrected path
}


// Connect to the database
connectDatabase();

// Start the server
const PORT = process.env.PORT || 3000; // Default to 3000 if not in .env
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    console.log("Shutting down the server due to an unhandled promise rejection.");
    server.close(() => {
        process.exit(1);
    });
});
