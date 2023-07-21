var siteName = document.getElementById('siteName');
var siteURL = document.getElementById('siteURL');
// siteName.addEventListener
// var expression =
//     /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
//     var regex = new RegExp(expression);
//     var url = document.getElementById('siteURL');
//         if (url.match(regex)) {
//             var siteURL = url ;
//         } else {
//             document.getElementById('valid').innerHTML = "invalid";
//         }

var siteConatainer;
if (localStorage.getItem('mySite') != null){
    siteConatainer = JSON.parse(localStorage.getItem('mySite'))
    display();
}
else {
    siteConatainer = [];
}


function addSite(){
    var site = {
        name: siteName.value,
        url: siteURL.value
    }
    siteConatainer.push(site);
    localStorage.setItem('mySite' , JSON.stringify(siteConatainer))
    display();
    clearSite ();

}

function display(){
    var siteList= ``;
    for(var i=0 ; i<siteConatainer.length; i++){
        siteList+=`
        <tr>
                    <td>${i+1}</td>
                    <td>${siteConatainer[i].name}</td>
                    <td><button onclick=" window.open('http://${siteConatainer[i].url}','_blank')" class="btn btn-visit"> <i class="fa-solid fa-eye"></i> Visit</button></td>
                    <td><button onclick="deleteSite(${i})" class="btn btn-delete"> <i class="fa-solid fa-trash"></i> Delete</button></td>
    
                </tr>
        `
    }
    document.getElementById('list').innerHTML = siteList;
}

function deleteSite (index){
    siteConatainer.splice(index , 1);
    localStorage.setItem('mySite' , JSON.stringify(siteConatainer))

    display();
}

function clearSite (){
    siteName.value = "";
    siteURL.value = "";
}

// var siteURL;
// function isVslid (str){
//     var regex = /^(www.)[a-zA-z0-9!@#\$%\^&*()_+\-?\/<>.,:;'"]{3,}(.com)$ /;
//     if (regex.test(str) = true){
//         var siteURL = document.getElementById('siteURL');

//     }
// }

// var regex = /^(www.)[a-zA-z0-9!@#\$%\^&*()_+\-?\/<>.,:;'"]{3,}(.com)$ /;

// console.log(regex.test(siteURL.value));