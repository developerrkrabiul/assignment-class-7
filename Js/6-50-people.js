// - Create data in a student array and object  where there will be data of about 50 people and print data of Mirpur and Banani residents starting from there



const students = [

    {
        id          : 01,
        name        : 'rk',
        location    : 'Cumilla',
    },
    {
        id          : 02,
        name        : 'Arifull',
        location    : 'sirajganj',
    },
    {
        id          : 03,
        name        : 'Raju',
        location    : 'Cumilla',
    },
    {
        id          : 04,
        name        : 'shakil',
        location    : 'sherpur',
    },
    {
        id          : 05,
        name        : 'Ridoy',
        location    : 'Chittagong',
    },
    {
        id          : 06,
        name        : 'Rabiul',
        location    : 'Cumilla',
    },
    {
        id          : 07,
        name        : 'Megh Bristi Nusrat',
        location    : 'Mirpur',
    },
    {
        id          : 08,
        name        : 'New Babla Sarkar Bokul',
        location    : 'Banani',
    },
    {
        id          : 09,
        name        : 'New Babla Sarkar Bokul',
        location    : 'chittagong',
    },
    {
        id          : 10,
        name        : 'SD Sanjoy',
        location    : 'Chittagong',
    },
    {
        id          : 11,
        name        : 'Sujon Kumar Mohont',
        location    : 'Cumilla',
    },
    {
        id          : 12,
        name        : 'Ema Akter',
        location    : 'Mirpur',
    },
    {
        id          : 13,
        name        : 'ইবনে জামান',
        location    : 'Banani',
    },
    {
        id          : 14,
        name        : 'ÑìRòß Shàñ        ',
        location    : 'chittagong',
    },
    {
        id          : 15,
        name        : 'Reduan Ahmad',
        location    : 'Chittagong',
    },
    {
        id          : 16,
        name        : 'Md shariful islam',
        location    : 'Cumilla',
    },
    {
        id          : 17,
        name        : 'Bayojid Shekh',
        location    : 'Mirpur',
    },
    {
        id          : 18,
        name        : 'ProsenJit Kumar',
        location    : 'Banani',
    },
    {
        id          : 19,
        name        : 'Frustration Frustration',
        location    : 'chittagong',
    },
    {
        id          : 20,
        name        : 'Mohammad Nayon Mia',
        location    : 'Chittagong',
    },
    {
        id          : 21,
        name        : 'Shohel Rana Prodhan',
        location    : 'Cumilla',
    },
    {
        id          : 22,
        name        : 'Rimon Sowdagor',
        location    : 'Mirpur',
    },
    {
        id          : 23,
        name        : 'Mehedi Hasan Khan',
        location    : 'Banani',
    },
    {
        id          : 24,
        name        : 'Shahinur Rahman',
        location    : 'chittagong',
    },
    {
        id          : 25,
        name        : 'Shaker Ahmed',
        location    : 'Chittagong',
    },
    {
        id          : 26,
        name        : 'Mehidi Hasan',
        location    : 'Cumilla',
    },
    {
        id          : 27,
        name        : 'Tarikul Tonmoy',
        location    : 'Mirpur',
    },
    {
        id          : 28,
        name        : 'Muslim Mohammad Isha',
        location    : 'Banani',
    },
    {
        id          : 29,
        name        : 'Genaril Parvej Mosarof',
        location    : 'chittagong',
    },
    {
        id          : 30,
        name        : 'Asad Shagor',
        location    : 'Chittagong',
    },
    {
        id          : 31,
        name        : 'Chandan dutta',
        location    : 'Cumilla',
    },
    {
        id          : 32,
        name        : 'Mukondo Nissan',
        location    : 'Mirpur',
    },
    {
        id          : 33,
        name        : 'তামান্না জাহান',
        location    : 'Banani',
    },
    {
        id          : 34,
        name        : 'Ashik Ahmed Suvo',
        location    : 'chittagong',
    },
    {
        id          : 35,
        name        : 'রফিকুল ইসলাম রাসেল',
        location    : 'Uttora',
    },
    {
        id          : 36,
        name        : 'Mahfuzur Rahman',
        location    : 'Cumilla',
    },
    {
        id          : 37,
        name        : 'Mukondo Nissan',
        location    : 'Mirpur',
    },
    {
        id          : 38,
        name        : 'Faisal Ahmed',
        location    : 'Banani',
    },
    {
        id          : 39,
        name        : 'Nizum',
        location    : 'chittagong',
    },
    {
        id          : 40,
        name        : 'A J Sakib Hasan',
        location    : 'Uttora',
    },
    {
        id          : 41,
        name        : 'RS Solaiman',
        location    : 'Cumilla',
    },
    {
        id          : 42,
        name        : 'সাদমান সাকিব',
        location    : 'Mirpur',
    },
    {
        id          : 43,
        name        : 'Maria Maria',
        location    : 'Banani',
    },
    {
        id          : 44,
        name        : 'Rabiul',
        location    : 'chittagong',
    },
    {
        id          : 45,
        name        : 'Shaker Ahmed',
        location    : 'Mirpur',
    },
    {
        id          : 46,
        name        : 'Shaker Ahmed',
        location    : 'Banani',
    },
    {
        id          : 47,
        name        : 'tipu',
        location    : 'Mirpur',
    },
    {
        id          : 48,
        name        : 'rabiya',
        location    : 'Banani',
    },
    {
        id          : 49,
        name        : 'rukiya',
        location    : 'chittagong',
    },
    {
        id          : 50,
        name        : 'saika',
        location    : 'Mirpur',
    },

];


students.map( ( data ) => {

    if(data.location == 'Mirpur'){

        console.log(`
        
            Student Id      : ${data.id}
            Student Name    : ${data.name}
            Location        : ${data.location}
        
        `);
    }

});
students.map( ( data2 ) => {

    if( data2.location == 'Banani'){

        console.log(`
        
            Student Id      : ${data2.id}
            Student Name    : ${data2.name}
            Location        : ${data2.location}
        
        `);
    }

});




