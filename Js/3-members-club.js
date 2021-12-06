// - Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive


const members = [
    {
        name     :   "rk",
        age      :   50,
        location : 'Cumilla'
    },
    {
        name     :   "Md Sajjad Hossen Sohag",
        age      :   15,
        location : 'Dhaka'
    },
    {
        name     :   "MD Minhazul Islam",
        age      :   45,
        location : 'Mirpur'
    },
    {
        name     :   "Robi",
        age      :   17,
        location : 'Cumilla'
    },
    {
        name     :   "Sohag",
        age      :   50,
        location : 'Dhaka'
    },
    {
        name     :   "Minhazul",
        age      :   35,
        location : 'Mirpur'
    }

]



let agever = function ( age ) {

    if(age < 18 ){

        return `Tumi এখনো বাচ্চা আমাদের অনুষ্ঠানে Tumi আসতে পারবে না।`;

    }else if(age >= 18 && age <= 40){

        return `আপনাকে সাগতম আমাদের অনুষ্ঠানে।`;

    }else if(age > 40){

        return `আপনাকে সাগতম আমাদের অনুষ্ঠানে আপনিত আমাদের এখানের প্রধান অথিতি। `;

    }else {
        return `Please try Again Something is missing`;
    }
}


members.map( ( data ) => {

console.log(`

    Name        : ${data.name}
    Age         : ${data.age}
    Location    : ${data.location}
    massage     : ${data.name} ${agever(data.age)}

`);

});
