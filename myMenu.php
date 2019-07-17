<?php 
  session_start();
  ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="includes/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Mandali&display=swap" rel="stylesheet">
    <title>Whats Inside</title>
</head>

<body class="myMenu">
    <header>
    <a href="myMenu.php"><div id="logo"></div></a>
    </header>
    <div>
      <nav class="navbar">
        <a href="myMenu.php" ><img src="https://i.imgur.com/wJpfoGk.png" class="homeHeight"></a>
        <div id="mySidenav" class="sidenav1">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <a href="#" id="personLink1"><img id="personImage1"> <span>
            <?php 
            echo $_SESSION["username"];
            ?>
          </span></a>
          <a href="#" class="category">Main Menu</a>
          <a href="myMenu.php" ><img src="images/home.png"><span class="user">Home</span></a>
          <a href="add_product.php" class="add" ><img src="images/add.png"> Add Meal</a>
          <a href="#" class="review" ><img src="images/review.png"> Check Reviews</a>
          <a href="#" class="category">Account</a>
          <a href="#" ><img src="images/profile.png">Profile</span></a>
          <a href="#"><img src="images/switch.png">Switch Mode</a>
          <a href="login.php"><img src="images/logout.png"> Logout</a>
        </div>
        <span style="cursor:pointer" onclick="openNav()"><img class="hamburger" src="https://i.imgur.com/aOSdhZR.png"></span>
        <div class="row">
          <div class="search">
              <input type="text" class="form-control input-sm" maxlength="64" placeholder="Search" />
              <button type="submit" class="btn btn-primary btn-sm">Search</button>
          </div>
        </div>
        <div class="userid">
          <a href="#" id="personLink2">
            <img id="personImage2">
            <?php 
            echo $_SESSION["username"];
            ?> 
        </div>
      </nav>
      <section class="bread">
        <ul>
          <li><a href="#">Main Menu</a></li>
          <li>//  <a href="#" class="selected">My Menu</a></li>
        </ul>
      </section>
      <nav class="sidenav">
        <ul>
          <li><a href="#" class="selected" ><img src="images/mymenu.png" alt="" > My Menu</a> </li>
          <li><a href="add_product.php" class="add" ><img src="images/add.png" alt=""> Add Meal</a>  </li>
          <li><a href="#" class="review" ><img src="images/review.png" alt=""> Check Reviews</a></li>
        </ul>
      </nav>
      <div id="wrapper">
        <main class="mainDemo">
        <h3 id="h3">Starters</h3>
            <div id="Starters"><!--id changed for all Types-->
            </div>
            <div class="clear"></div>
            <h3 class="title">Main Dishes</h3>
            <div id="Main Dishes">
            </div>
            <div class="clear"></div>
            <h3 class="title">Desserts</h3>
            <div id="Desserts">
            </div>
        </main>
      </div>
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">© 2019 Copyright WhatsInside>>
          <a>Itay Gershman & Aviel Dagan</a>
        </div>
      </footer>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
     <script src="includes/main.js"></script>
</body>
</html>