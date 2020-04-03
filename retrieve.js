var db=firebase.firestore();
function login(){
var user=document.getElementById("uname");
var password=document.getElementById("pass");
    db.ref('users/').on('value',function(snapshot){
    var users=snapshot.val();
    for(var key in users)
    {
    var user=users[key];
    if(user.Username==user.value&&user.password==password.value)
    {
    console.log("success");
    }
    else
    console.log("fail");
    }
    
    });
    
    }

    /*var temp=doc.val();
    var u=temp[5];
    var p=temp[6];
    if(pass==p.password){
        console.log("success");
    }
    else
        console.log("fff");*/

