import { credential } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

// Define the service account key path
const serviceAccountPath = path.resolve(__dirname, "./serviceAccountKey.json");

// Check if the file exists
if (!fs.existsSync(serviceAccountPath)) {
  console.error("Service account key file not found:", serviceAccountPath);
  process.exit(1);
}

// Read the JSON file and parse it
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

// Initialize the app with the service account
initializeApp({
  credential: credential.cert(serviceAccount),
});

// Export Firestore instance
export const db = getFirestore();
