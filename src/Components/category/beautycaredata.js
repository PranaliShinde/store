const beautycareAPI={
    beautycare:[
        {id:1,title:"Rose Water",price:50,description:"Dabour Gulab Jal -  100ml",image:require('.//images1/gulabjal.jpg')},
        {id:2,title:"Nivea Soft Cream",price:279.2,description:"Nivea Soft Cream -  300ml",image:require('.//images1/niveasoftcream.jpg')},
        {id:3,title:"Men Deodrant",price:168.7,description:"Nivea Men Deodrant -150ml",image:require('.//images1/niveamendeodrant.jpg')},
        {id:4,title:"Gillette Mach 3",price:700,description:"Gillette Mach 3 - 1pc",image:require('.//images1/gillettemach3.jpg')},
       
        {id:5,title:"Colossal kajal",price:270.5,description:"Colossal Kajal - 0.35gm",image:require('.//images1/kajal.jpg')},
        {id:6,title:"Face Wash",price:189.0,description:"Himalaya Neem Face wash - 300ml",image:require('.//images1/neemfacewash.jpg')},
        {id:7,title:"Body Lotion",price:258.9,description:"Nivea Body Lotion - 400ml",image:require('.//images1/niveabodylotion.jpg')},
        {id:8,title:"Women Deodrant",price:170.0,description:"Nivea Women Deodrant - 150ml",image:require('.//images1/niveawomendeodrant.jpg')},
    
        {id:9,title:"Dove Soap",price:54.0,description:"Dove Soap Bar - 100gm",image:require('.//images1/dovesoap.jpg')},
        {id:10,title:"Hand Wash",price:75.5,description:"Lifebuoy Handwash - 725ml",image:require('.//images1/lifebuoy.jpg')},
        {id:11,title:"HairFall Shampoo",price:434.4,description:"Hair Fall Shampoo - 650ml",image:require('.//images1/hairfallshampoo.jpg')},
        {id:12,title:"Toothpaste",price:47.5,description:"Closeup Toothpaste - 80gm",image:require('.//.//images1/closeup.jpg')},
    
        {id:13,title:"Lakme Moisturizer",price:244,description:"Lakme Face Moisturizer - 200ml",image:require('.//images1/lakmefacemoisturizer.jpg')},
        {id:14,title:"Garnier Hair Color",price:30,description:"Garnier Hair Color - 1pc",image:require('.//images1/garnier.jpg')},
        {id:15,title:"Lakme Foundation",price:122.2,description:"Lakme Foundation - 27ml",image:require('.//images1/lakmefoundation.jpg')},
        {id:16,title:"Vitamin C Cream",price:349,description:"Lakme Vitamin C Cream - 50gm",image:require('.//images1/lakmevitamincream.jpg')},
    
    ],
    
    all:function(){
        return this.beautycare
    }
    
    }
    
    export default beautycareAPI;
    