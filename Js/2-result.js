

 const studentdata = [
    {
        roll        : 01,
        name        : 'Rk',
        fatherName : 'kk',
        bn          : 80,
        en          : 80,
        math        : 80,
        s           : 80
    },
    {
        roll        : 02,
        name        : 'Rasel',
        fatherName  : 'Ronjon ali',
        bn          : 80,
        en          : 50,
        math        : 60,
        s           : 45
    },
    {
        roll        : 03,
        name        : 'Arifull',
        fatherName  : 'Habibur Rohman',
        bn          : 80,
        en          : 70,
        math        : 60,
        s           : 55
    },
 ];



function FullResult(){


    //grade calculation

    this. grade = function (marks){

        this.grade;
        
        if(marks < 33){
            grade = `F`;
        }else if(marks >= 33 && marks < 40){
            grade = `D`;
        }else if(marks >= 40 && marks < 50){
            grade =`C`;
        }else if(marks >= 50 && marks < 60){
            grade = `B`;
        }else if(marks >= 60 && marks < 70){
            grade = `A-`;
        }else if(marks >= 70 && marks < 80){
            grade = `A`;
        }else if(marks >= 80 && marks <= 100){
            grade = `A+`;
        }else{
            grade = `Please Type Again Something is missing in (Grade).`;
        }
        return grade;

    }


    //gpa calculation


    this. gpa = function (marks){

        this.gpa;
        
        if(marks < 33){
            gpa = `0`;
        }else if(marks >= 33 && marks < 40){
            gpa = `1`;
        }else if(marks >= 40 && marks < 50){
            gpa =`2`;
        }else if(marks >= 50 && marks < 60){
            gpa = `3`;
        }else if(marks >= 60 && marks < 70){
            gpa = `3.50`;
        }else if(marks >= 70 && marks < 80){
            gpa = `4`;
        }else if(marks >= 80 && marks <= 100){
            gpa = `5`;
        }else{
            gpa = `Please Type Again Something is missing in (gpa).`;
        }
        return gpa;

    }

    //total Grade calculation

    this.totalgrade = function (cgpa){
      
        if(cgpa < 1){
            return  `F`;
        }else if(cgpa >= 1 && cgpa < 2){
            return  `D`;
        }else if(cgpa >= 2 && cgpa < 3){
            return `C`;
        }else if(cgpa >= 3 && cgpa < 3.50){
            return  `B`;
        }else if(cgpa >= 3.50 && cgpa < 4){
            return  `A-`;
        }else if(cgpa >= 4 && cgpa < 5){
            return  `A`;
        }else if(cgpa >= 5){
            return  `A+`;
        }else{
            return `Please Type Again Something is missing in (Grade).`;
        }
    }

    // Cgpa calculation

    this.cgpaa = function(bn, en, math, s){
        
        if( bn == 0 || en == 0 || math == 0 || s == 0){

            return `You are Failed`;
        }else{
            return `Main cgpa = ${cgpa.toFixed(2)} & Grade = ${result.totalgrade(cgpa)}`;
        }
    }
}



let result = new FullResult();
let cgpa;

studentdata.map( (data) => {

    let totalcgpa = Number(result.gpa(data.bn))  + Number(result.gpa(data.en)) + Number(result.gpa(data.math)) + Number(result.gpa(data.s));
    cgpa = totalcgpa / 4 ;

    console.log(`


    Student Roll : ${data.roll}
    Student Name : ${data.name}
    Father Name : ${data.fatherName}


    Subject Name                Marks               GPA             GREAD
...........................................................................................
    Bangla                  ${data.bn}                   ${result.gpa(data.bn)}                  ${result.grade(data.bn)}
    English                 ${data.en}                   ${result.gpa(data.en)}               ${result.grade(data.en)}
    Math                    ${data.math}                   ${result.gpa(data.math)}                  ${result.grade(data.math)}
    Science                 ${data.s}                   ${result.gpa(data.s)}                  ${result.grade(data.s)}

...........................................................................................
           Total CGPA = ${result.cgpaa(result.gpa(data.bn), result.gpa(data.en), result.gpa(data.math), result.gpa(data.s))}
===================================================================         
`);
});

