<?php

include("../myVetsConfig.php");

$Return = array(
    "status" => 0
);

$POST = json_decode(file_get_contents('php://input'), true);

if (isset($POST["age"])) {

    $full_name = mysqli_real_escape_string($myVets, $POST["full_name"]);
    $type = mysqli_real_escape_string($myVets, $POST["age"]);
    $breed = mysqli_real_escape_string($myVets, $POST["breed"]);
    $age = mysqli_real_escape_string($myVets, $POST["age"]);
    $gender = mysqli_real_escape_string($myVets, $POST["gender"]);
    $user_id = mysqli_real_escape_string($myVets, $POST["user_id"]);

    if (empty($type) || empty($full_name)) {
        $Return['responseCode'] = 422;
        $Return["message"] = "Incomplete registration information";
    } else {
        $newUserQuery = "INSERT INTO pets (Pet_Name, Pet_Type, Pet_Breed, Pet_Gender, Pet_Age, User_Id) VALUES ('$full_name', '$type', '$breed', '$gender', '$age', '$user_id')";
        if (mysqli_query($myVets, $newUserQuery)) {
            $Return['responseCode'] = 200;
            $Return["status"] = 1;
            $Return["message"] = "Successfully registered";
        } else {
            $Return['responseCode'] = 500;
            $Return["message"] = "Something went wrong. Please try again";
        }
    }
} else {
    $Return['responseCode'] = 422;
    $Return["message"] = "Incomplete registration information";
}

echo json_encode($Return);
