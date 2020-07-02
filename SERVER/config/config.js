//*===================== */
//* ==== Puerto ======== */
//*===================== */

port = process.env.PORT || 3000;


//*===================== */
//* ==== Puerto ======== */
//*===================== */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//*===================== */
//* ==== Puerto ======== */
//*===================== */

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = "mongodb://localhost:27017/cafe";

} else {

    urlDB = "mongodb+srv://alrobotic:Al3j4ndr0@cluster0-4ve9y.gcp.mongodb.net/cafe?retryWrites=true&w=majority";
}

process.env.URLDB = urlDB;