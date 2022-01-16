const fruitAPI={
fruits:[
    {id:1,title:"Apple",price:45.95,description:"A Grade Kashmiri Apple -1Kg",image:require('.//images1/apple.jpg')},
    {id:2,title:"Mango",price:565.3,description:"Alphanso Mango -6pcs",image:require('.//images1/mango.jpg')},
    {id:3,title:"Banana",price:52.0,description:"Banana Robusta/Singapuri-1Kg",image:require('.//images1/banana.jpg')},
    {id:4,title:"Guava",price:50.0,description:"Fresho Guava-500 gm",image:require('.//images1/guava.jpg')},
   
    {id:5,title:"Grapes",price:500.0,description:"Blue Grapes-1Kg",image:require('.//images1/grapes.jpg')},
    {id:6,title:"Mosambi",price:90.0,description:"Mosambi 4pcs 1Kg",image:require('.//images1/mosambi.jpg')},
    {id:7,title:"Pomegranate",price:153.9,description:"Pomegranate Small-1Kg",image:require('.//images1/pomegranate.jpg')},
    {id:8,title:"Watermelon",price:121.0,description:"Watermelon 1.5-2Kg",image:require('.//images1/watermelon1.jpg')},

    {id:9,title:"Kiwi",price:70.0,description:"Fresh Kiwi 3 pcs",image:require('.//images1/kiwi.jpg')},
    {id:10,title:"Blueberry",price:299.0,description:"125gm blueberry",image:require('.//images1/blueberry.jpg')},
    {id:11,title:"Pineapple",price:52.7,description:"1 pc 800gm pineapple",image:require('.//images1/pineapple.jpg')},
    {id:12,title:"Muskmelon",price:95.0,description:"Muskmelon small 1pc-500gm",image:require('.//.//images1/muskmelon.jpg')},

    {id:13,title:"Cherry",price:249.5,description:"Cherry imported-100gm",image:require('.//images1/cherry.jpg')},
    {id:14,title:"Sapota",price:85.0,description:"Fresh Sapota-500gm",image:require('.//images1/sapota.jpg')},
    {id:15,title:"Ber",price:28.4,description:"Fresh Ber 500 gm",image:require('.//images1/ber.jpg')},
    {id:16,title:"Strawberry",price:230.2,description:"Strawberry - 200 gm",image:require('.//images1/strawberry.jpg')},

],

all:function(){
    return this.fruits
}

}

export default fruitAPI;
