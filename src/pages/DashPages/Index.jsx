import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { viewUser } from "../../components/apis/userApi";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState({});

  const { Admin_Type } = useSelector((state) => state.user.userDetails);
  const myNavigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setResponseData({});

    const searchData = {
      email: email,
    };
    const searchRes = await viewUser(searchData);
    setResponseData({
      status: searchRes.status,
      message: searchRes.message,
    });

    setIsLoading(false);
  };

  return (
    <>
      <div className="dashPageMain">
        <div className="authFormContain">
          <h4> Search User </h4>
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
            <label> Enter User Email </label>
            <input
              type={"text"}
              placeholder={"User Email"}
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
            <button type={"submit"}>
              {isLoading ? `Searching...` : `Search`}
            </button>
            {Admin_Type === "2" && (
              <button type={"button"} onClick={() => myNavigate("user/create")}>
                Create User
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
