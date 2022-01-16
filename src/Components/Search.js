
const productAPI={
    products:[
    {
        "product_name":"Orange",
        "product_link":"https://i1.wp.com/www.fruitlinkco.com/home/wp-content/uploads/2020/11/1.jpg"
    },
    {
        "product_name":"Apple",
        "product_link":"https://tse1.mm.bing.net/th/id/OIP.DCmuHojrytnYl0KVUhvXhgHaIQ?w=160&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    
    }
],

    all:function()
    {
        return this.products
    }
}

export default productAPI;