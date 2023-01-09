// Question- "let studentRecords = [ {name: 'John', id: 123, marks : 98 },
        //   {name: 'Baba', id: 101, marks : 23 },
        //   {name: 'yaga', id: 200, marks : 45 },
        //   {name: 'Wick', id: 115, marks : 75 } ] "

    // Q.1   "We are interested in retrieving only the students' names; all the names should be in caps.

    //     ['JOHN', 'BABA', 'YAGA', 'WICK']"


    const student=studentRecords.map((a)=>console.log(a.name.toUpperCase()));

   //  Q.2   "Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

   //        [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"

   const ans=studentRecords.filter((res)=>res.marks>50);
            console.log(ans);


    // Q.3 Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.


    const ans1=studentRecords.filter((res)=>res.marks>50 && res.id>120);
            console.log(ans1);



    //Q.4  Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

    const ans2=studentRecords.reduce((sum,p)=>sum=sum+p.marks,0);
            console.log(ans2);



    //Q.5  This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

    const ans3=studentRecords.filter((res)=>res.marks>50).map((res)=>res.name);
    console.log(ans3);

    //Q.6  This time we are required to print the sum of marks of the students with id > 120.

    const ans4=studentRecords.filter((res)=>res.id>120).reduce((sum,p)=>sum=sum+p.marks,0);
            console.log(ans4);


    //Q.7  This time we are required to print the total marks of the students with marks 
    // greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.


   const ans5=studentRecords.map(function total(res){
        if(res.marks<50){
           res.marks=res.marks+15;
        }
        return res;
   }).filter((res)=>res.marks>50).reduce((sum,r)=>sum+r.marks,0);
   console.log(ans5);




    //Q.8  Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 


    function details(){
        console.log(`This is ${this.name} am in ${this.class} and My Roll no is ${this.rollno}`);
    }
    const object1={
        name:"Sujit",
        class:"B",
        rollno:1,
    }
    details.call(object1);

    const object2={
        name:"Reshma",
        class:"A",
        rollno:2,
    }
    details.call(object2);

    const object3={
        name:"Abhirup",
        class:"C",
        rollno:3,
    }
    details.call(object3);

    const object4={
        name:"Tyagi",
        class:"E",
        rollno:4,
    }
    details.call(object4);

    const object5={
        name:"Tarun",
        class:"A",
        rollno:5,
    }
    details.call(object5);
    const object6={
        name:"Janvi",
        class:"C",
        rollno:6,
    }
    details.call(object6);