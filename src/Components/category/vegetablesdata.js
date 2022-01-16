const vegetablesAPI={
    vegetables:[
        {id:1,title:"Beetroot",price:25.95,description:"Fresh Beetroot- 500gm",image:'https://www.jiomart.com/images/product/600x600/590003540/beetroot-500-g-0-20200710.jpg'},
        {id:2,title:"Bitter Gourd",price:110.3,description:"Bitter Gourd-1 Kg",image:require('.//images1/bitterGourd.jpg')},
        {id:3,title:"Brinjal",price:45.7,description:"Brinjal-Purple-500 gm",image:require('.//images1/brinjal.jpg')},
        {id:4,title:"Cabbage",price:21,description:"Fresh Cabbage-1pc 400gm",image:require('.//images1/cabbage.jpg')},
       
        {id:5,title:"Capsicum",price:65,description:"Capsicum-Green-500gm",image:require('.//images1/capsicum.jpg')},
        {id:6,title:"Coriander",price:10.0,description:"Coriander Leaves-100gm",image:require('.//images1/coriander.jpg')},
        {id:7,title:"French Beans",price:24.9,description:"Fresh French Beans-500gm",image:require('.//images1/frenchBeans.jpg')},
        {id:8,title:"Green Peas",price:58.0,description:"Green Peas- 1Kg",image:require('.//images1/greenPeas.jpg')},
    
        {id:9,title:"Methi",price:38.0,description:"Fresh Methi- 500gm",image:require('.//images1/methi.jpg')},
        {id:10,title:"Mint",price:65.5,description:"Fresh Mint/Pudina- 250gm",image:require('.//images1/mint.jpg')},
        {id:11,title:"Onion",price:280.4,description:"Onion Organic-5 kg",image:require('.//images1/onion.jpg')},
        {id:12,title:"Potato",price:24.0,description:"Fresh Potato - 1 Kg",image:require('.//.//images1/potato.jpg')},
    
        {id:13,title:"Radish",price:416.5,description:"Fresh Radish-500 gm",image:require('.//images1/radish.jpg')},
        {id:14,title:"Spinach",price:16.2,description:"Fresh Spinach-250gm",image:require('.//images1/spinach.jpg')},
        {id:15,title:"Tomato",price:24.2,description:"Fresh Tomato- 500 gm",image:require('.//images1/tomato.jpg')},
        {id:16,title:"Mushroom",price:58,description:"Mushroom 1 Pack-180gm",image:require('.//images1/mushroom.jpg')},
    
    ],
    
    all:function(){
        return this.vegetables
    }
    
    }
    
    export default vegetablesAPI;
    