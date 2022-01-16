const beveragesAPI={
    beverages:[
        {id:1,title:"Tata Tea Gold",price:195,description:"Tata Tea Gold-500gm",image:require('.//images1/tatateagold.jpg')},
        {id:2,title:"Coca Cola",price:32.2,description:"Cocacola -300ml Pack",image:require('.//images1/cocacola.jpg')},
        {id:3,title:"Sprite",price:83.7,description:"Sprite -2L Bottle",image:require('.//images1/sprite.jpg')},
        {id:4,title:"Nescafe Classic",price:285,description:"Coffe Classic-100gm Pack",image:require('.//images1/nescafe.jpg')},
       
        {id:5,title:"Red Label Tea",price:448.5,description:"New Red Label tea-1Kg",image:require('.//images1/redlabeltea.jpg')},
        {id:6,title:"Horlicks",price:375.0,description:"Horlicks - 1Kg Pack",image:require('.//images1/horlicks.jpg')},
        {id:7,title:"Green Tea",price:131.9,description:"Wagh Bakri Green Tea-32gm",image:require('.//images1/greentea.jpg')},
        {id:8,title:"Bourn vita",price:270.0,description:"Bourn Vita-750gm Pack",image:require('.//images1/bournvita.jpg')},
    
        {id:9,title:"Real Activ Orange",price:89.0,description:"Orange Juice-1L Multipack",image:require('.//images1/realactivorange.jpg')},
        {id:10,title:"Mineral Water",price:19.5,description:"Mineral Water - 1L Bottle",image:require('.//images1/mineralwater.jpg')},
        {id:11,title:"Real Activ Apple",price:90.4,description:"Apple Juice-1L Multipack",image:require('.//images1/realactivapple.jpg')},
        {id:12,title:"Maaza",price:39.0,description:"Mango Drink - 600ml",image:require('.//.//images1/maaza.jpg')},
    
        {id:13,title:"Pepsi Can",price:75,description:"Fresh Fruit Biscuit-200gm",image:require('.//images1/pepsi.jpg')},
        {id:14,title:"Soda Ginger Ale",price:48,description:"Soda Ginger Ale-300ml Can",image:require('.//images1/soda.jpg')},
        {id:15,title:"Hot Chocolate",price:140.2,description:"Hot Chocolate- 200gm Pack",image:require('.//images1/hotchocolate.jpg')},
        {id:16,title:"Tropicana Juice",price:100,description:"Tropicana Juice - 1L Pack",image:require('.//images1/tropicanajuice.jpg')},
    
    ],
    
    all:function(){
        return this.beverages
    }
    
    }
    
    export default beveragesAPI;
    