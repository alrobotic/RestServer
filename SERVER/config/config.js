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

process.env.VENCIMENTO_TOKEN = 60 * 60 * 24 * 30;

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
