//import { registerRootComponent } from 'expo';
import { useColorScheme } from 'react-native';
import { auth, db, firebase} from './firebase';

const Users = db.collection("users");
const Reviews = db.collection("reviews");
const Comments = db.collection("comments");
// const Points = db.collection("points"); 
const WaitTime = db.collection("waittime"); //make an average function

/**
 * //get user info with UID
 * @date 2020-11-10
 * @param {string} id
 * @returns {object}
 */
export async function getUserWithUid(id) {
    return Users.where("id", "==", id)
		.get()
		.then((data) => {
			let user;
			data.forEach((doc) => {
				user = { ...doc.data() };
			});
			if (!user) {
				throw "No user";
			}
			return user;
		});
}

/**
 * Login Function
 * @date 2020-11-11
 * @param {any} email
 * @param {any} password
 * @returns {object} return objects of user info
 */
export async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
        .then(async (res) => {
            const uid = res.user.uid;
            const user = await getUserWithUid(uid);
            //console.log("authenticated");
            return user;
        })
        .catch((error) => {
            return error;
        });
}

/**
 * User logout
 * @date 2020-11-11
 * @returns {boolean}
 */
export async function logout() {
    return await auth.signOut()
        .then(function () {
            return true;
        })
        .catch(function (error) {
            return error;
        })
}

/**
 * Sign in
 * @date 2020-11-10
 * @param {string} email
 * @param {string} password
 * @param {string} confirmPassword
 * @param {object} data user information
 * @returns {object}
 */
export async function registerUser( email,password, confirmPassword, data) {
    if (password !== confirmPassword) {
		return "Passwords don't match.";
	}
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((response) => {
			const uid = response.user.uid;
			const currentTime = firebase.firestore.FieldValue.serverTimestamp();
			data.createdTime = currentTime;
			data.id = uid;
			Users.doc(uid)
				.set(data)
				.then(async () => {
                    const user = await getUserWithUid(uid);
					return user;
				})
				.catch((error) => {
					return error.message;
				});
		})
		.catch((error) => {
			return error.message;
		});
}

/**
 * //Add User
 * @date 2020-11-10
 * @param {string}
 * @returns {object}
 */
export function addUser(obj) {
    const userRef = Users.doc();
    return userRef
        .set({
            name: obj.name, 
            email: obj.email,
            password: obj.password,
            createdAt: obj.createdAt
        })
        .then(function(doc) {
            console.log("User successfully added!");
            return doc.data();
        })
        .catch(function(error) {
            console.error("Error: ", error);
        })
}

/**
 * Get current user info
 * @date 2020-11-11
 * @returns {object}
 */
export async function getCurrentUser() {
    const user = auth.currentUser.uid;
    return await getUserWithUid(user);
}


/**
 * 
 * @date 2020-11-15
 * @param {string} firstname
 * @returns {object}
 */
export async function getUserFirstname(firstname) {
    return await Users.where("firstname", "==", firstname)
        .get()
        .then(function(data) {
            console.log("User successfully added!");
            let user;
            data.forEach((doc) => {
                user = { ...doc.data() };
            })
            return user;
        })
        .catch(function(error) {
            console.error("Error: ", error);
        })
}

/**
 * get reviews by restaurant 
 * @date 2020-11-15
 * @param {string} restaurant
 * @returns {object}
 */
export async function getReviewsByRestaurant(restaurant) {
    return Reviews.where("restaurant", "==", restaurant)
    .get()
    .then(function(data) {
        let reviews = [];
        data.forEach((doc) => {
            reviews = [ ...reviews,doc.data() ];
        })
        return reviews;
    })
    .catch(function(error) {
        console.error("Error: ", error);
    })
}

/**
 * Add review for resturant 
 * @date 2020-11-15
 * @param {string} restaurant
 * @param {string} review
 * @returns {object}
 */
export async function addReview(restaurant,review) {
    const current = await getCurrentUser();
    const data = {
        createdBy: { name: `${current.firstname} ${current.lastname}`, id: current.id },
        restaurant,
        review,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    return Reviews.add(data).then((doc) => {
        Reviews.doc(doc.id).update({
            reviewId: doc.id,
        });
        return doc.id;
    })
    .catch((error) => {
        return error.message;
    });
}

/**
 * User add wait time
 * @date 2020-11-21
 * @param {string} restaurant
 * @param {integer} waitTime
 * @returns {object}
 */
export async function addWaitTime(restaurant, waitTime) {
    const current = await getCurrentUser();
    const data = {
        createdBy: { name: `${current.firstname} ${current.lastname}`, id: current.id },
        restaurant,
        waitTime,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    return WaitTime.add(data).then((doc) => {
        WaitTime.doc(doc.id).update({
            waitTimeId: doc.id,
        });
        return doc.id;
    })
        .catch((error) => {
            return error.message;
    })
}

/**
 * Get wait time
 * @date 2020-11-21
 * @param {string} restaurant
 * @returns {object}
 */
export async function getWaitTime(restaurant) {
    return WaitTime.where("restaurant", "==", restaurant)
    .get()
    .then(function(data) {
        let WaitTime = [];
        data.forEach((doc) => {
            WaitTime = [ ...WaitTime,doc.data() ];
        })
        return WaitTime;
    })
    .catch(function(error) {
        console.error("Error: ", error);
    })
}


/**
 * get all restaurant by wait time
 * @date 2020-11-21
 * @returns {object}
 */
export async function getAllRestaurantByWaitTime() {
    return await WaitTime.orderBy("waitTime", "asc").limit(20).get()
    .then(querySnapshot => {
        let restaurants = [];
        querySnapshot.forEach(doc => {
            restaurants.push({id:doc.id, value: doc.data()});
        })
        return restaurants;
    })
    .catch(function(error) {
        console.error("Error: ", error);
    })
}

/**
 * add comments for wait time and display image
 * @date 2020-11-21
 * @param {string} restaurant
 * @param {string} comment
 * @returns {object}
 */
export async function addComment(restaurant, comment) {
    const current = await getCurrentUser();
    const data = {
        createdBy: { name: `${current.firstname} ${current.lastname}`, id: current.id , profileUrl: current.avatarUrl},
        restaurant,
        comment,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    return Comments.add(data).then((doc) => {
        Comments.doc(doc.id).update({
            commentId: doc.id,
        });
        return doc.id;
    })
        .catch((error) => {
            return error.message;
    })
}

/**
 * get comments for wait time and display image
 * @date 2020-11-21
 * @param {string} restaurant
 * @returns {object}
 */
export async function getCommentsByRestaurant(restaurant) {
    return Comments.where("restaurant", "==", restaurant)
    .get()
    .then(function(data) {
        let comments = [];
        data.forEach((doc) => {
            comments = [ ...comments,doc.data() ];
        })
        return comments;
    })
    .catch(function(error) {
        console.error("Error: ", error);
    })
}

/**
 * Add points (based on user and review and reported wait time)
 * @date 2020-11-21
 * @param {integer} points
 * @returns {object}
 */
export async function addPoints(points) {
  //const current = await getCurrentUser();
  const user = auth.currentUser.uid;
  const data = {
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    userId: user,
    points,
  };
  return Users.doc(user).collection("points").add(data)
  .then((data) => {
      return data.id;
  });
}

/**
 * Get sum of points
 * @date 2020-11-16
 * @returns {integer}
 */
export async function getAllPoints() {
    const user = auth.currentUser.uid;
    let sumPoints = 0;
    return Users.doc(user).collection("points").get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.data().points)
            sumPoints += doc.data().points;
        })
        return sumPoints;
    })
    .catch((err) => 
        console.log("error get all points", err))

}

/**
 * Edit Profile
 * @date 2020-11-21
 * @param {string} obj
 * @param {string} userDoc
 * @returns {object}
 */
export function updateProfile(obj, userDoc) {
    db
        .collection("users")
        .doc(userDoc)
        .update(
            {
                firstname: obj.firstname,
                email: obj.email,
                password: obj.password,
                location: obj.location,
                bio: obj.bio,
                profileImg: obj.profileImg
            },
        )
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });
}

//get user amount of comments and waittimes reported


//Add rewards (based on user and amount of points)
// export function addRewards(userId) {
//     const current = await getCurrentUser();
//     return userRef
//     .then(function(doc) {
//         console.log("User successfully added!");
//         return doc.data();
//     })
//     .catch(function(error) {
//         console.error("Error: ", error);
//     })
// }

//Add user rating (based on user)
// export function addRating(restaurantId) {
//     db
//         .collection(``)
//         .add({
//             rating: obj.rating,
//             userId
//             //createdTime: fieldvalue.serverTimestamp
//         })
//         .then(function() {
//             console.log("rating successfully added!");
//         })
//         .catch(function(error) {
//             console.error("Error: ", error);
//         })
// }










