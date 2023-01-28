<?php

include("../myVetsConfig.php");

$Return = array(
    "status" => 0
);

$POST = json_decode(file_get_contents('php://input'), true);

if (isset($POST["email"])) {

    $full_name = mysqli_real_escape_string($myVets, $POST["full_name"]);
    $email = mysqli_real_escape_string($myVets, $POST["email"]);
    $address = mysqli_real_escape_string($myVets, $POST["address"]);
    $age = mysqli_real_escape_string($myVets, $POST["age"]);
    $gender = mysqli_real_escape_string($myVets, $POST["gender"]);

    if (empty($email) || empty($full_name)) {
        $Return['responseCode'] = 422;
        $Return["message"] = "Incomplete registration information";
    } else {
        $getUserQuery = "SELECT * FROM users WHERE email='$email'";
        $getUser = mysqli_query($myVets, $getUserQuery);

        if (mysqli_num_rows($getUser) == 1) {
            $Return['responseCode'] = 400;
            $Return["message"] = "Email is already registered";
        } else {
            $newUserQuery = "INSERT INTO users (Full_Name, Email, Address, Gender, Age) VALUES ('$full_name', '$email', '$address', '$gender', '$age')";
            if (mysqli_query($myVets, $newUserQuery)) {
                $Return['responseCode'] = 200;
                $Return["status"] = 1;
                $Return["message"] = "Successfully registered";
            } else {
                $Return['responseCode'] = 500;
                $Return["message"] = "Something went wrong. Please try again";
            }
        }
    }
} else {
    $Return['responseCode'] = 422;
    $Return["message"] = "Incomplete registration information";
}

echo json_encode($Return);
