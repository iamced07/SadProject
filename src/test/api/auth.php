<?php
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST)&& !empty($_POST)){
    $email = $_POST['email'];
    $password = $_POST['password'];

    if($email == 'admin' && $password == 'admin'){
        ?>
        {
            "success":true,
            "secret": "Only admin can access this"
        }
        <?php
    }else{
        ?>{
            "success":false,
            "message":"Invalid credentials"
        }
        <?php
    }
}else{
   // var_dump($_POST)
    ?>{
        "success":false,
        "message":"Only POST access accepted"
    }<?php

}
?>