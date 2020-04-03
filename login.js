
var firestore=firebase.firestore();

function verify()
{
    var docRef=firestore.collection("users").doc(document.getElementById("uname").value);
    var getOptions={

    };
    docRef.get(getOptions).then(function(doc){
        var n=doc.data().Username;
        var p=doc.data().password;
        var user=document.getElementById("uname").value;
        var pass=document.getElementById("pass").value;
        if(n==user&&p==pass)
        {
            console.log("valid user");
            alert("valid user");
            window.open("home.html","_self");
        }
        else
        {
            console.log("invalid user");
            window.open("Register.html","_self");
        }
    })

    }
