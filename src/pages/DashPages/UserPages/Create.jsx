import React, { useState } from "react";
import { createUser } from "../../../components/apis/userApi";

const Create = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setResponseData({});

    const createData = {
      full_name: fullName,
      email: email,
      address: address,
      age: age,
      gender: gender,
    };
    const createRes = await createUser(createData);
    setResponseData({
      status: createRes.status,
      message: createRes.message,
    });

    setIsLoading(false);
  };

  return (
    <>
      <div className="dashPageMain">
        <div className="authFormContain">
          <h4> Create User </h4>
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
              type={"text"}
              placeholder={"Email"}
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
            <label> Address </label>
            <input
              type={"text"}
              placeholder={"Address"}
              value={address}
              onInput={(e) => setAddress(e.target.value)}
            />
            <label> Age </label>
            <input
              type={"number"}
              placeholder={"Age"}
              value={age}
              onInput={(e) => setAge(e.target.value)}
            />
            <label> Gender </label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option disabled value={""}>
                Select A Gender
              </option>
              <option value={"Male"}> Male </option>
              <option value={"Female"}> Female </option>
              <option value={"Prefer Not To Say"}> Prefer Not To Say </option>
            </select>

            <button type={"submit"} disabled={isLoading}>
              {isLoading ? `Please Wait...` : `Create User`}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
