const registeredHomes=[];


module.exports=class Home{
    constructor(houseName,price, location,rating,photourl){
        this.houseName=houseName;
        this.price=price;
        this.location=location;
        this.rating=rating;
        this.photourl=photourl
    }

 save(){
    registeredHomes.push(this);
 }
static fetchAll(){
    console.log(registeredHomes);
return registeredHomes;
}

}


