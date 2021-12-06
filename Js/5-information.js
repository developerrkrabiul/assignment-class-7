// Create fees array and object data for a picnic where everyone will provide free basic information for everyone.


const information = [
    {
        name        : 'Rk Rabiul Islam (Razu)',
        Number      :  1626761798,
        relation    : 'Own',
        taka        : 00

    },
    {
        name        : 'Sakib Hossain',
        Number      :  1878286007,
        relation    : 'Bro',
        taka        : 500
    },
    {
        name        : 'Md Shipon Khan',
        Number      :  1673352434,
        relation    : 'Bro',
        taka        : 450

    },
    {
        name        : 'Md Hossain Al Mahmud',
        Number      :  1917805868,
        relation    : 'Bro',
        taka        : 700

    },
    {
        name        : 'Abdur Razzak',
        Number      :  1787866217,
        relation    : 'Friend',
        taka        : 1000

    },
    {
        name        : 'Afran Aisha',
        Number      :  1781467171,
        relation    : 'Apu',
        taka        : 850

    },
    {
        name        : 'Faisal Ahmed',
        Number      :  1608514801,
        relation    : 'Janina ke ata',
        taka        : 333

    },
    {
        name        : 'Faisal Ahmed',
        Number      :  1776362232,
        relation    : 'Cinina',
        taka        : 850

    },
    {
        name        : 'Tohidul Islam',
        Number      :  1710470230,
        relation    : 'Cinina',
        taka        : 888

    },
    {
        name        : 'Kota Bondu',
        Number      :  1734559700,
        relation    : 'Kota bole beshi',
        taka        : 999
    }
]

let total = 0;

console.log(`
                    My Family picnic Info
---------------------------------------------------`);

information.map( ( data ) => {

    console.log(`
    Name        : ${data.name}
    Number      : ${data.Number}
    Relation    : ${data.relation}
    Amount      : ${data.taka} taka
    ===================================================
    `);
    total = total + data.taka;
});

console.log(`My Family Picnic total amount ${total} taka.`);
