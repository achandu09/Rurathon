
  function register()
  {
      
  var fname=document.getElementById("first").value;
  var lname=document.getElementById("last").value;
  var mailId=document.getElementById("mail").value;
  var dob=document.getElementById("dob").value;
  var mob=document.getElementById("number").value;
  var user=document.getElementById("uname").value;
  var pass=document.getElementById("pass").value;
  var db=firebase.firestore();

  const doc=db.doc("users/"+user);
      doc.set({
          Username:user,
          password:pass,
          FirstName:fname,
          LastName:lname,
          MailId:mailId,
          DOB:dob,
          Mobile:mob
      }).then(function(){
          alert("registration successful");
          window.open("login.html","_self");
      }).catch(function(error){
          console.log("error");
      });
  }