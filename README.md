# password-authentication
This project checks how data come from frontend (form) are handled and stored in database (mongodb). During the time I work at this project app.use(express.urlencoded) worked and if it throws an error consider replacing it with app.use(bodyparses.urlencoded({extended:true}) after installing body-parser with "npm install body-parser".
