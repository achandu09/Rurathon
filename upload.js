function object(cname,price,quantity,category){
    this.cname=cname;
    this.price=price;
    this.quantity=quantity;
    this.category=category;
}
  function upload()
  {
      
  var cname=document.getElementById("cname").value;
  var price=document.getElementById("price").value;
  var quantity=document.getElementById("quantity").value;
  var category=document.getElementById("category").value;
  
  var db=firebase.firestore();

  const doc=db.doc("Crops/"+cname);
      doc.set({
          cropName:cname,
          price:price,
          quantity:quantity,
          category:category
      }).then(function(){
          alert("uploaded successful");
          //window.open("index.html","_self");
      }).catch(function(error){
          console.log("error");
      });
    var obj=new object(cname,price,quantity,category);   
      localStorage.setItem(cname,JSON.stringify(obj));
  }