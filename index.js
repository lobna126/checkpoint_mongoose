const mongoose= require("mongoose");
const uri='mongodb+srv://lobnamansouri:lobnamansouri@cluster0.ono4c.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0'

    async function connect(){
        mongoose.connect(uri)
        .then(() => console.log('Connected to MongoDB successfully'))
        .catch((err) => console.error('Error connecting to MongoDB:', err));

    }
       
        connect();

    const personSchema= new mongoose.Schema({
       name: {
        type:String,
        required:true,
       },
       age:{
        type:Number,
        required:true,

       },
       favoriteFoods:{
        type:[String],
        required:false,
       },
    });

    const person=mongoose.model('person',personSchema);

    async function newUser() {
        try{
            const newPerson= new person({
        name:"rakia",
        age:12,
        favoriteFoods:['lazania','slata mechouya'],

    })
    await newPerson.save()
       
            console.log("person saved successfully"+newPerson);


        }catch(error){ 
            console.log("error"+ error);
        }
    }
    
   /*newUser()*/
    
    async function creatPeoples(arrayOfPeople) {
        try{
            const data = await person.create(arrayOfPeople);

            console.log("people created successfully"+ data);

        }
        catch(error){
            console.log("error creating people"+ error);
        }

    };
    const arrayOfPeople=[
        {name:'lili', age:21, favoriteFoods:['pizza','humberger']},
        {name:'sarra', age:23, favoriteFoods:['salade gruillé','escalope']},
        {name:'sourour', age:27, favoriteFoods:['tacos','sbaguetti']},
    ];
    creatPeoples(arrayOfPeople);

    async function findByName(name) {
        try{
            const person=await person.find({name});
            console.log(person);

        }
        catch(error){
            console.log("not found "+error);
        }
        
    }
    findByName(sarra);


