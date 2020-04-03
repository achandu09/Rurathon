function render()
{
    var docRef=firestore.collections("crops");
    var getOptions=
    {

    };
    
}





































var products1=[
    "apple","mango","pomegranate","grapes","strawberry","papaya","tomato","potato","cabbage","onion","rice","wheat","bajra"
];
var cards=[];
var products=[];

for(var i=0;i<20;i++){
    var a=localStorage.getItem(products1[i]);
    var ob=JSON.parse(a);

    if(a!=null){
        products.push(ob);
       // console.log(products[i]);

    }
}


function Htmlfruitsproduct(con){
    let url=`img/fruit/fruit${con}.jpg`;
    return `
    <div class="card p-4 m-3"style="width: 18rem;">
        
        <div class="card-body">
            <h4 class="card-title">${products[con-1].category}</h4>
            <hr><br>
            <h5 class="card-title">name:${products[con-1].cname}</h5>
            <h5 class="card-title">price:${products[con-1].price}</h5>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" onclick="wishlist('${products[con-1]}.name','${products[con-1]}.price','${con}')">wish-list</button>
                <button type="button" class="btn btn-success" onclick="cart('${products[con-1].cname}','${products[con-1].price}','${con}')">addToCart</button>
            </div>
        </div>
    </div>
`    
}

function render(){
    var fruitdiv=document.getElementById("productdiv");
    
    for(let i=1;i<=products.length;i++){
        fruitdiv.innerHTML+=`${Htmlfruitsproduct(i)}`;
        
    }
    

}
function cart(name,price){
    var table=document.getElementById("cart");
    var str= `
        <tr>
        <td>${name}</td>
        <td>${price}</td>
        </tr>
        
    `
    table.innerHTML+=str;
}