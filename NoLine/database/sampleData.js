

export function addUsersToFirestore() {
    var users = [{
            name: "Raja",
            email: "raja.tamil@email.com",
            createdAt: new Date("2019-01-01 12:08:00")
        },
        {
            name: "Arivu",
            email: "arivu.selvan@email.com",
            createdAt: new Date("2018-01-23 09:13:00")
        }, {
            name: "Mike",
            email: "mike.author@email.com",
            createdAt: new Date("2018-08-08 06:37:00")
        }, {
            name: "Praba",
            email: "praba.karan@email.com",
            createdAt: new Date("2018-10-09 18:26:00")
        },
        {
            name: "Muhammad",
            email: "muhammad.ali@email.com",
            createdAt: new Date("2018-03-13 12:13:00")
        }

    ];
    const db = firebase.firestore();
    users.forEach(user => {
        db.collection("users").doc().set(user);
    });
}
