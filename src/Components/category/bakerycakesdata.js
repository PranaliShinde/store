const bakeryAPI={
    bakery:[
        {id:1,title:"Almond Milk",price:150,description:"Almond Milk- 1L Pack",image:require('.//images1/almondmilk.jpg')},
        {id:2,title:"Amul Cheese",price:118.2,description:"Amul Cheese-200gm Pack",image:require('.//images1/amulcheese.jpg')},
        {id:3,title:"Amul Lassi",price:20.7,description:"Amul Lassi-250ml Pack",image:require('.//images1/amullassi.jpg')},
        {id:4,title:"Amul Butter",price:236,description:"Amul Butter-500gm Carton",image:require('.//images1/amulbutter.jpg')},
       
        {id:5,title:"Amul Dahi",price:45.5,description:"Amul Dahi-400gm cup",image:require('.//images1/amuldahi.jpg')},
        {id:6,title:"Amul Brownie",price:125.0,description:"Chocolate Brownie-250gm",image:require('.//images1/amulbrownie.jpg')},
        {id:7,title:"Amul Paneer",price:24.9,description:"Amul Paneer-200gm PAck",image:require('.//images1/amulpaneer.jpg')},
        {id:8,title:"Amul Toast",price:50.0,description:"Amul Milk Toast-250gm",image:require('.//images1/amultoast.jpg')},
    
        {id:9,title:"Brown Bread",price:25.0,description:"Brown Bread - 200gm",image:require('.//images1/bread.jpg')},
        {id:10,title:"Cheese Slices",price:250.5,description:"Cheese Slices- 400gm Pack",image:require('.//images1/cheeseslices.jpg')},
        {id:11,title:"Chocolate Cake",price:10.4,description:"Chocolate Cake 45gm Pack",image:require('.//images1/chocolatecake.jpg')},
        {id:12,title:"Chocolate Roll",price:9.0,description:"Chocolate Roll-28gm Pack",image:require('.//.//images1/chocolateswissroll.jpg')},
    
        {id:13,title:"Fruit Biscuit",price:75,description:"Fresh Fruit Biscuit-200gm",image:require('.//images1/fruitbiscuit.jpg')},
        {id:14,title:"Pudding",price:50,description:"Chocolate Pudding Solid-1Pack",image:require('.//images1/pudding.jpg')},
        {id:15,title:"Slim Milk",price:84.2,description:"Fresh Slim Milk- 1L Pack",image:require('.//images1/slimmilk.jpg')},
        {id:16,title:"Strawberry Cake",price:12,description:"Strawberry Cake 45gm Pack",image:require('.//images1/strawberrycake.jpg')},
    
    ],
    
    all:function(){
        return this.bakery
    }
    
    }
    
    export default bakeryAPI;
    