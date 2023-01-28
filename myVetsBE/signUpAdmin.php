<?php

include("./myVetsConfig.php");

$Return = array(
    "status" => 0
);

$POST = json_decode(file_get_contents('php://input'), true);

if (isset($POST["email"])) {

    $full_name = mysqli_real_escape_string($myVets, $POST["full_name"]);
    $email = mysqli_real_escape_string($myVets, $POST["email"]);
    $admin_type = mysqli_real_escape_string($myVets, $POST["adminRole"]);
    $password = mysqli_real_escape_string($myVets, $POST["password"]);
    $password = password_hash($password, PASSWORD_DEFAULT);

    if (empty($email) || empty($password)) {
        $Return['responseCode'] = 422;
        $Return["message"] = "Incomplete registration information";
    } else {
        $getUserQuery = "SELECT * FROM adminusers WHERE email='$email'";
        $getUser = mysqli_query($myVets, $getUserQuery);

        if (mysqli_num_rows($getUser) == 1) {
            $Return['responseCode'] = 400;
            $Return["message"] = "Email is already registered";
        } else {
            $newAdminQuery = "INSERT INTO adminusers (Full_Name, Email, Admin_Type, Password) VALUES ('$full_name', '$email', '$admin_type', '$password')";
            if (mysqli_query($myVets, $newAdminQuery)) {
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
