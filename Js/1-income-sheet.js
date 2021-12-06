// - Create a MERN stack, Laravel, Django, Golan, WordPress, java deves students data structure and make their total income sheet with per developer data, Find specific students. 



const deves = [

    {
        id          : 01,
        name        : 'rk',
        location    : 'Cumilla',
        skill       : 'mern stack',
        salary      : 500
    },
    {
        id          : 02,
        name        : 'Arifull',
        location    : 'sirajganj',
        skill       : 'Laravel',
        salary      : 700
    },
    {
        id          : 03,
        name        : 'Raju',
        location    : 'Cumilla',
        skill       : 'java',
        salary      : 1000
    },
    {
        id          : 04,
        name        : 'shakil',
        location    : 'sherpur',
        skill       : 'Django',
        salary      : 800
    },
    {
        id          : 05,
        name        : 'Ridoy',
        location    : 'Chittagong',
        skill       : 'Golan',
        salary      : 1200
    },
    {
        id          : 06,
        name        : 'Rabiul',
        location    : 'Cumilla',
        skill       : 'WordPress',
        salary      : 600
    },

];


let total = 0;
deves.map((data) => {
    console.log(`
    =====================================
        Id          : ${data.id}
        Name        : ${data.name}
        Location    : ${data.location}
        Skill       : ${data.skill}
        Salary      : $${data.salary}
    =====================================        
    `);
    total = total + data.salary;
});
console.log(`Our Company Total Cost Every month $${total}`);