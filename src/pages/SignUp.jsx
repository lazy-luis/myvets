import React, { useState } from "react";
import { createAdmin } from "../components/apis/adminApi";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminRole, setAdminRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setResponseData({});

    const createData = {
      full_name: fullName,
      email: email,
      adminRole: adminRole,
      password: password,
    };
    const createRes = await createAdmin(createData);
    setResponseData({
      status: createRes.status,
      message: createRes.message,
    });

    setIsLoading(false);
  };

  return (
    <>
      <div className="fullScreenDiv">
        <div className="authFormContain">
          <h4> Create Admin </h4>
          <form onSubmit={handleSubmit}>
            {responseData?.status !== "" &&
              responseData?.status !== undefined && (
                <div
                  className={
                    responseData?.status
                      ? "responseBlock success"
                      : "responseBlock error"
                  }
                >
                  {responseData?.message}
                </div>
              )}
            <label> Full Name </label>
            <input
              type={"text"}
              placeholder={"Full Name"}
              value={fullName}
              onInput={(e) => setFullName(e.target.value)}
            />
            <label> Email </label>
            <input
              type={"email"}
              placeholder={"Email"}
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
            <label> Password </label>
            <input
              type={"password"}
              placeholder={"Password"}
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
            <label> Admin Role </label>
            <select
              onChange={(e) => setAdminRole(e.target.value)}
              value={adminRole}
            >
              <option value={""} disabled>
                Select An Admin Role
              </option>
              <option value={3}> Pharmacist </option>
              <option value={2}> Receptionist </option>
              <option value={1}> Vet </option>
              <option value={0}> Super Admin </option>
            </select>
            <button type={"submit"} disabled={isLoading}>
              {isLoading ? `Please Wait...` : `Create Account`}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
