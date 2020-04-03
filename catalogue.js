var products=[];
var cartItems=[];

//divisions



//products

var fruits=[
    {name:"apple",price:90},
    {name:"mango",price:150},
    {name:"pomogranate",price:100},
    {name:"grapes",price:60},
    {name:"strawberry",price:200},
    {name:"papaya",price:20}
];


var vegetables=[
    {name:"tomato",price:30},
    {name:"potato",price:10},
    {name:"cabbage",price:35},
    {name:"french beans",price:40},
    {name:"onion",price:100},
    {name:"couli flower",price:50}
];
var grains=[
    {name:"rice",price:32},
    {name:"wheat",price:80},
    {name:"bajra",price:22},
    {name:"maize",price:48},
    {name:"millets",price:12},
    {name:"dal",price:53}
];

function Htmlfruitsproduct(con){
    let url=`img/fruit/fruit${con}.jpg`;
    return `
    <div class="card p-4 m-3"style="width: 18rem;">
        <img class="card-img-top" src="${url}" width=350px height=280px alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">name:${fruits[con-1].name}</h5>
            <h5 class="card-title">price:${fruits[con-1].price}</h5>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" onclick="wishlist('${fruits[con-1]}.name','${fruits[con-1]}.price','${con}')">wish-list</button>
                <button type="button" class="btn btn-success" onclick="cart('${fruits[con-1]}.name','${fruits[con-1]}.price','${con}')">addToCart</button>
            </div>
        </div>
    </div>
`    
}

function HtmlVegetableproduct(con){
    let url=`img/vegetable/vegetable${con}.jpg`;
    return `
    <div class="card p-4 m-3"style="width: 18rem;">
        <img class="card-img-top" src="${url}" width=350px height=280px alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">name:${vegetables[con-1].name}</h5>
            <h5 class="card-title">price:${vegetables[con-1].price}</h5>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" onclick="wishlist('${vegetables[con-1]}.name','${vegetables[con-1]}.price','${con}')">wish-list</button>
                <button type="button" class="btn btn-success" onclick="cart('${vegetables[con-1]}.name','${vegetables[con-1]}.price','${con}')">addToCart</button>
            </div>
        </div>
    </div>
`    
}
function HtmlGrainproduct(con){
    let url=`img/grain/grain${con}.jpg`;
    return `
    <div class="card p-4 m-3"style="width: 18rem;">
        <img class="card-img-top" src="${url}" width=350px height=280px alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">name:${grains[con-1].name}</h5>
            <h5 class="card-title">price:${grains[con-1].price}</h5>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" onclick="wishlist('${grains[con-1]}.name','${grains[con-1]}.price','${con}')">wish-list</button>
                <button type="button" class="btn btn-success" onclick="cart('${grains[con-1]}.name','${grains[con-1]}.price','${con}')">addToCart</button>
            </div>
        </div>
    </div>
`    
}

function render(){
    var fruitdiv=document.getElementById("fruitsdiv");
    var vegetablediv=document.getElementById("vegetablesdiv");
    var graindiv=document.getElementById("grainsdiv");
    for(let i=1;i<=fruits.length;i++){
        fruitdiv.innerHTML+=`${Htmlfruitsproduct(i)}`;
        vegetablesdiv.innerHTML+=`${HtmlVegetableproduct(i)}`;
        grainsdiv.innerHTML+=`${HtmlGrainproduct(i)}`;
    }
}
