<?php

include("./myVetsConfig.php");

$Return = array(
    "status" => 0
);


$POST = json_decode(file_get_contents('php://input'), true);

if (isset($POST["email"])) {

    $email = mysqli_real_escape_string($myVets, $POST["email"]);
    $password = mysqli_real_escape_string($myVets, $POST["password"]);

    if (empty($email) || empty($password)) {
        $Return['responseCode'] = 400;
        $Return["message"] = "Invalid username or password";
    } else {

        $getUserQuery = "SELECT * FROM adminusers WHERE email='$email'";
        $getUser = mysqli_query($myVets, $getUserQuery);

        if (mysqli_num_rows($getUser) == 1) {
            $userDetails = mysqli_fetch_array($getUser);
            if (password_verify($password, $userDetails['Password'])) {
                $Return['responseCode'] = 200;
                $Return['status'] = 1;
                $Return['message'] = "User Signed in successfully";
                unset($userDetails['Password']);
                unset($userDetails[1]);
                unset($userDetails[2]);
                unset($userDetails[3]);
                unset($userDetails[4]);
                unset($userDetails[5]);
                $Return['user'] = $userDetails;
            } else {
                $Return['responseCode'] = 400;
                $Return["message"] = "Invalid username or password1";
            }
        } else {
            $Return['responseCode'] = 400;
            $Return["message"] = "Invalid username or password";
        }
    }
} else {
    $Return['responseCode'] = 422;
    $Return["message"] = "Invalid username or password";
}

echo json_encode($Return);
