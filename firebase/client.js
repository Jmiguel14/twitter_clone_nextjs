import firebase from "firebase";
import { useEffect } from "react";

console.log("DataFirebase", firebase);
const firebaseConfig = {
	apiKey: "AIzaSyC4ukxfywHSdCS8fHYm2nQ3SsWSoN-QDaU",
	authDomain: "devter-4ad73.firebaseapp.com",
	projectId: "devter-4ad73",
	storageBucket: "devter-4ad73.appspot.com",
	messagingSenderId: "301472107702",
	appId: "1:301472107702:web:699173ad6155acc7cf2a17",
	measurementId: "G-3CG0QGSFV2",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const mapUserFromFireabseAuthToUser = (user) => {
	const { displayName, email, photoURL, uid } = user;
	//const {username, profile} = additionalUserInfo
	//const {avatar_url, blog} = profile

	return {
		avatar: photoURL,
		userName: displayName,
		email,
		uid,
	};
};

export const onAuthStateChanged = (onChange) => {
	return firebase.auth().onAuthStateChanged((user) => {
		const normalizedUser = user ? 
        mapUserFromFireabseAuthToUser(user) : null
		console.log('normalizedUser', normalizedUser)
		onChange(normalizedUser);
	});
};

export const loginWithGitHub = () => {
	console.log("functionToMap", mapUserFromFireabseAuthToUser);
	const githubProvider = new firebase.auth.GithubAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(githubProvider)
};

export const addDevit = ({ avatar, content, image, userId, userName }) => {
	return db.collection('devits').add({
		avatar,
		content,
		userId,
		userName,
		createAt: firebase.firestore.Timestamp.fromDate(new Date()),
		likesCount: 0,
		sharedCount: 0,
		image,
	})
}

const mapDevitFromFirebaseToDevitObject = (doc) => {
	//console.log('DateFormatJs', DateFormatJs)
	//console.log('DateFormatJsWithUnary', +DateFormatJs)
//
	//const date = new Date(createAt.seconds * 1000)
	//const normalizedCreateAt = new Intl.DateTimeFormat('es-EC').format(date)
	const data = doc.data()
	const id = doc.id
	const { createAt } = data
	console.log('createAt', createAt)
	const DateFormatJs = +createAt.toDate()

	return {
		...data,
		id,
		createAt: DateFormatJs,
	}
}

export const listtenLatestDevits  = (callback) => {
	//.onSnapshot((snapshot) => {
	//	snapshot.docs
	//})
	return db.collection('devits')
		.orderBy('createAt', 'desc')
		.limit(20)
		.onSnapshot(({docs}) => {
			const newDevits = docs.map(mapDevitFromFirebaseToDevitObject)
			callback(newDevits)
		})
}

 export const fetchLatestDevits = () => {
 	return db.collection('devits')
 		.orderBy('createAt', 'desc')
 		.get()
 		.then((snapshot) => {
 			//console.log('snapshot', snapshot)
 			return snapshot.docs.map(mapDevitFromFirebaseToDevitObject)
 		})
 }

export const uploadImage = (file) => {
	const ref = firebase.storage().ref(`images/${file.name}`)
	const task = ref.put(file)
	console.log('task', task)
	return task
}