<?php
$con = mysqli_connect("localhost","root","root","test","8889");
if(!$con){
    trigger_error(mysqli_connect_error());
}
?>