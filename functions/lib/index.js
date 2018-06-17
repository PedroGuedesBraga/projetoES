"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.configureProject = functions.firestore
    .document('projects/{projectId}').onCreate(snap => {
    const projectCreationRequest = snap.data();
    const defaultProjectThumbnail = 'fiery-cumbuca.appspot.com/projectThumbnails/defaultThumbnail.png';
    if (projectCreationRequest.thumbnail === '' ||
        projectCreationRequest.thumbnail.isNullOrUndefined()) {
        projectCreationRequest.thumbnail = defaultProjectThumbnail;
    }
    return admin.firestore().collection('projects')
        .doc(projectCreationRequest.Id).set(projectCreationRequest);
});
exports.configureUser = functions.firestore.document('users/{userId}')
    .onCreate(snap => {
    const userCreationRequest = snap.data();
    const defaultProfilePic = "fiery-cumbuca.appspot.com/userProfilePictures/defaultProfile.png";
    if (userCreationRequest.profilePicture.isNullorUndefined() ||
        userCreationRequest.profilePicture === '') {
        userCreationRequest.profilePicture = defaultProfilePic;
    }
    return admin.firestore().collection("users")
        .doc(userCreationRequest.id).set(userCreationRequest);
});
//# sourceMappingURL=index.js.map