

function deleteProduct(){
    var txt;
    var r = confirm("Do you want to delete '" +this.id+"' from the menu?");
    if (r == true) {    
        var query = "DELETE FROM tbl_products_209 WHERE Title='"+this.id +"';";
        $.post('query.php', { query: query }, function (res) {//switch to query.php
            if(res == '[]'){
                console.log('error occured1 - username or password are invalid');
            }
            else if (res == "NULL" || res == "null")
                console.log('error occured2 - if there a problem in the query');
            else {
                console.log("success");
                window.location = "./myMenu.php";
            }
        });
    } 
}

$(document).ready(function(){

    //user image
    var pl = 1;
    var imagePerson = document.getElementById("personLink" +pl);
    var person = imagePerson.innerText.substring(1, imagePerson.innerText.length);
    var query = "SELECT Image FROM tb_users_209_1 WHERE username='"+person+"';";
    getImage(query,pl);
    pl++;

    var imagePerson = document.getElementById("personLink" +pl);
    var person = imagePerson.innerText.substring(1, imagePerson.innerText.length);

    var query = "SELECT Image FROM tb_users_209_1 WHERE username='"+person+"';";
    getImage(query,pl);
    pl++;

    //Starters
    var query = "SELECT Title,pic,Description,Type FROM tbl_products_209 WHERE Type='Starters';";
    addProducts(query);
    //Main Dishes
    query = "SELECT Title,pic,Description,Type FROM tbl_products_209 WHERE Type='Main Dishes';";
    addProducts(query);
    //Desserts
    query = "SELECT Title,pic,Description,Type FROM tbl_products_209 WHERE Type='Desserts';";
    addProducts(query);


});

var getImage = function(query,pl){
    $.post('query.php', { query: query }, function (res) {//switch to query.php

        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        else if (res == "NULL"){
            console.log('error occured2 - if there a problem in the query');
        }
        else {
            obj = JSON.parse(res)[0];//make res an JSON object
            document.getElementById("personImage" + pl).className = "circle";
            $("#personImage" + pl).attr("width","25px");
            $("#personImage" + pl).attr("height","25px");
            $("#personImage" + pl).attr("src", obj.Image);
            //
        }
    });
} 


var addProducts = function (query){
    $.post('query.php', { query: query }, function (res) {//switch to query.php

        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        else if (res == "NULL")
            console.log('error occured2 - if there a problem in the query');
        else {
            obj = JSON.parse(res);//make res an JSON object
            var main = document.getElementsByClassName("mainDemo")[0];
            for(i=0;i<obj.length;++i){
                var container = document.createElement("div");
                container.className = "container";
                var h3 = document.createElement("h3");
                h3.className = "h3";
                var row = document.createElement("div");

                var column = document.createElement("div");
                column.className = "col-md-3";

                var product = document.createElement("div");
                product.className = "product-grid3";

                var imgProduct = document.createElement("div");
                imgProduct.className = "product-image3";


                var img = document.createElement("img");
                img.className = "img-thumbnail";
                img.src = obj[i].pic;

                var ul = document.createElement("ul");
                ul.className = "social";
                var li1 = document.createElement("li");
                var linkIn1 = document.createElement("a");
                linkIn1.id = obj[i].Title;
                linkIn1.addEventListener("click",deleteProduct);

                var i1 = document.createElement("i");
                i1.className = "fa fa-trash";

                linkIn1.append(i1);
                li1.append(linkIn1);
                ul.append(li1);

                var li2 = document.createElement("li");
                var linkIn2 = document.createElement("a");
                linkIn2.href = "./edit_product.php?Title="+ obj[i].Title+"";
                
                var i2 = document.createElement("i");
                i2.className = "fa fa-wrench";
                linkIn2.append(i2);
                li2.append(linkIn2);
                ul.append(li2);
                var newProduct = document.createElement("span");
                newProduct.className = "product-new-label";


                imgProduct.append(img);
                imgProduct.append(ul);
                
                product.append(imgProduct);
                var content = document.createElement("div");
                content.className = "product-content";
                var newh3 = document.createElement("h3");
                newh3.className = "title";
                newh3.innerHTML = obj[i].Title;
                // var newLink = document.createElement("a");
                // newLink.href = "#";
                // newLink.innerHTML = obj[i].Title;

                // newh3.append(newLink);
                content.append(newh3);

                product.append(content);

                column.append(product);

                row.append(column);

                container.append(h3);
                container.append(row);
                var type = obj[0].Type;
                var typeLocation = document.getElementById(type);
                typeLocation.append(container);
                //Basically i created several divs inside each other 
                //in order to create thehirearchy in the right way
            }
        }
    });
    
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

