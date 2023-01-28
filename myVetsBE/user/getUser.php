<?php

include("../myVetsConfig.php");

$Return = array(
    "status" => 0
);


$POST = json_decode(file_get_contents('php://input'), true);

if (isset($POST["email"])) {

    $email = mysqli_real_escape_string($myVets, $POST["email"]);

    if (empty($email)) {
        $Return['responseCode'] = 400;
        $Return["message"] = "Invalid user email address";
    } else {
        $getUserQuery = "SELECT * FROM users WHERE email='$email'";
        $getUser = mysqli_query($myVets, $getUserQuery);

        if (mysqli_num_rows($getUser) == 1) {
            $userDetails = mysqli_fetch_array($getUser);
            $Return['responseCode'] = 200;
            $Return['status'] = 1;
            $Return['message'] = "User search successful";
            unset($userDetails[1]);
            unset($userDetails[2]);
            unset($userDetails[3]);
            unset($userDetails[4]);
            unset($userDetails[5]);
            unset($userDetails[6]);
            unset($userDetails[7]);
            $Return['user'] = $userDetails;
        } else {
            $Return['responseCode'] = 400;
            $Return["message"] = "Invalid user email address";
        }
    }
} else {
    $Return['responseCode'] = 422;
    $Return["message"] = "Invalid user email address";
}

echo json_encode($Return);
