//*===================== */
//* ==== Puerto ======== */
//*===================== */

port = process.env.PORT || 3000;

//*====================================== */
//* ==== Entorno ======== */
//*====================================== */

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//*================================ */
//* ==== Vencimiento Token ======== */
//*================================ */
//* 60 segundos
//* 60 minutos
//* 24 horas
//* 30 dias

process.env.VENCIMIENTO_TOKEN = 60 * 60 * 24 * 30;

//*==================================== */
//* ==== SEED de autenticación ======== */
//*==================================== */

process.env.SEED = process.env.SEED || "secret";

//*============================ */
//* ==== Base de datos ======== */
//*============================ */

let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cafe";
} else {
  urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//*============================ */
//* ==== Google Sign-In ======== */
//*============================ */
process.env.CLIENT_ID =
  process.env.CLIENT_ID ||
  "1015535957815-ff54c5rel1bjcbrdf2bbeenjjmc0nm6r.apps.googleusercontent.com";
