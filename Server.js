// importing app
const path = require('path');
const app = require(path.join(__dirname, 'MainApp.js'));
const https = require('https');
const fs = require('fs');

// Keep the original server on port 3000
// app.listen(88, () => {
//     console.log("Original server started on port 88");
// });
const PORT = process.env.PORT || 88;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
