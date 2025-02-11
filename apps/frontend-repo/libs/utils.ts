import { FirebaseError } from "@firebase/app";

export function isErrorFirebaseError(error: unknown): error is FirebaseError {
  return Object.prototype.hasOwnProperty.call(error, "error");
}
