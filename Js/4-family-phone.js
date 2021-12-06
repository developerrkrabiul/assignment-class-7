// Arrange a data sheet for a family phone book and publish it



const phoneBook = [
    {
        name        : 'Rk Rabiul Islam (Razu)',
        Number      :  1626761798,
        relation    : 'Own'

    },
    {
        name        : 'Sakib Hossain',
        Number      :  1878286007,
        relation    : 'Bro'

    },
    {
        name        : 'Md Shipon Khan',
        Number      :  1673352434,
        relation    : 'Bro'
    },
    {
        name        : 'Md Hossain Al Mahmud',
        Number      :  1917805868,
        relation    : 'Bro'
    },
    {
        name        : 'Abdur Razzak',
        Number      :  1787866217,
        relation    : 'Friend'
    },
    {
        name        : 'Afran Aisha',
        Number      :  1781467171,
        relation    : 'Apu'
    },
    {
        name        : 'Faisal Ahmed',
        Number      :  1608514801,
        relation    : 'Janina ke ata'
    },
    {
        name        : 'Faisal Ahmed',
        Number      :  1776362232,
        relation    : 'Cinina'
    },
    {
        name        : 'Tohidul Islam',
        Number      :  1710470230,
        relation    : 'Cinina'
    },
    {
        name        : 'Kota Bondu',
        Number      :  1734559700,
        relation    : 'Kota bole beshi'
    }
]


phoneBook.map( ( data ) => {

    console.log(`

                    My Family Phone Book
    ---------------------------------------------------
    Name        : ${data.name}
    Number      : ${data.Number}
    Relation    : ${data.relation}
    ===================================================

    `);
});