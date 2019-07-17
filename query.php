
<?php
   include "config.php";

  $query = $_POST['query'];
  $model = mysqli_query($connection, $query);
  if(!$model){
      echo "NULL";
  }
  else{
    $result = [];
    while ($row = mysqli_fetch_assoc($model)) {
        $result[] = $row;
    }

    $res = json_encode($result);
    echo $res;

  }
  mysqli_close($connection);
?>