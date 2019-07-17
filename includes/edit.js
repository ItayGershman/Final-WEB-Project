$(document).ready(function(){

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

    var queryString = new URLSearchParams(location.search);

    var title = queryString.get('Title');
    var query = "SELECT * FROM tbl_products_209 WHERE Title='" + title +"';";
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        if (res == "NULL")
            console.log('error occured2 - if there a problem in the query');
        else {
            var obj = JSON.parse(res)[0];
            if(obj.Type == 'Starters'){
                document.getElementById("inputType1").checked = true;
            }
            else if (obj.Type == 'Main Dishes'){
                document.getElementById("inputType2").checked = true;
            }
            else if (obj.Type == 'Desserts'){
                document.getElementById("inputType3").checked = true;
            }
            $.getJSON( 'includes/dynamic_data.json', function( data ) {
                var span1 = document.createElement("span");
                var span2 = document.createElement("span");
                var span3 = document.createElement("span");
                $.each(data,function(key,val){
                    if(key==1){
                        span1.innerHTML = val;
                        document.getElementById('Type1').append(span1);
                    }
                    else if(key==2){
                        span2.innerHTML = val;
                        document.getElementById('Type2').append(span2);
                    }
                    else if(key==3) {
                        span3.innerHTML = val;
                        document.getElementById('Type3').append(span3);
                    }
                })
              });
            document.getElementById("inputMeal").value = obj.Title;
            document.getElementById("inputIngredients").value = obj.Description;
            document.getElementById("imageURL").value = obj.pic;
            $('#submitUpdate').attr("onclick", "updateMeal()");
        }
    });
});

var updateMeal = function() {
    var title = $('#inputMeal').val();
    var des = $('#inputIngredients').val();
    var pic = $('#imageURL').val();
    var type1;
    var type2;
    var type3;
    var type;
    if(document.getElementById('inputType1').checked){
        type1 = $('#inputType1').val();
        type = $('#inputType1').next()[0].innerText;
    }
    if(document.getElementById('inputType2').checked){
        type2 = $('#inputType2').val();
        type = $('#inputType2').next()[0].innerText;
    }
    if(document.getElementById('inputType3').checked){
        type3 = $('#inputType3').val();
        type = $('#inputType3').next()[0].innerText;
    }
    

    var query = "UPDATE tbl_products_209 SET Description = '"+des+"',Type = '"+type+"',pic = '"+pic+"' WHERE Title = '" +title+"';";
    console.log(query);
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if (res == "NULL"){
            console.log('error occured');
        }
        else {
            console.log("Product succesfuly inserted into the Data Base");
            window.location = "./myMenu.php";
        }
    });
};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  var getImage = function(query,pl){
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        console.log(query);
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        else if (res == "NULL"){
            console.log('error occured2 - if there a problem in the query');
        }
        else {
            obj = JSON.parse(res)[0];//make res an JSON object
            console.log(obj.Image);

            document.getElementById("personImage" + pl).className = "circle";
            $("#personImage" + pl).attr("width","25px");
            $("#personImage" + pl).attr("height","25px");
            $("#personImage" + pl).attr("src", obj.Image);
        }
    });
} 