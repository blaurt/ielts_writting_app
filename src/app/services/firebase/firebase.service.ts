import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor() {}

  static loginUser() {
    // firebase.auth()
  }

  static registerUser(uid: string, additionalInfo = {}) {
    firebase
      .database()
      .ref(`user/${uid}`)
      .push({ additionalInfo });
  }

  static pushDataToTable(tableName: string, data: any = {}) {}
}
