
const firebaseConfig = {
    apiKey: "AIzaSyBpp3n1rKQIdZq_oSJl6ZLq1ncMGLKkot0",
    authDomain: "eduhelpform.firebaseapp.com",
    projectId: "eduhelpform",
    storageBucket: "eduhelpform.appspot.com",
    messagingSenderId: "703671587334",
    appId: "1:703671587334:web:1f8287d8996022d8dde987",
    measurementId: "G-9W5X24STG8"
  };  

firebase.initializeApp(firebaseConfig);


var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;
var img = document.querySelector(".img");

function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
         
}


function uploadImage(){
    let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);


    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        
        uploadPercentage.innerHTML = percentVal+"%";
        progress.style.width = percentVal+"%";
    },(error)=>{
        console.log("Error is",error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL",url);

            if(url != ""){
                img.setAttribute("src",url);
                img.style.display="block";
            }
        })
    }
    )

}