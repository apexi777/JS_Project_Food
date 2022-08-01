<?php
$_POST = json_decode(file_get_contents("php://input"), true);  //если нужно получить json обьект
echo var_dump($_POST);