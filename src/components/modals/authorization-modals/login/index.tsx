import { Form, Input } from "antd";
import type { FieldType } from "../../../../@types";
// import img
import google from "../../../../assets/icons/google.svg";
import facebook from "../../../../assets/icons/facebook.svg";
import { useAxios } from "../../../../hooks/useAxios";
import { LoadingOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../../../redux/modal-slice";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { signInWithGoogle } from "../../../../config";
const Login = () => {
  const { authorizationModalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );

  const signIn = useSignIn();

  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const onFinish = (e: FieldType) => {
    dispatch(setAuthorizationModalVisibility({ open: true, isLoadnig: true }));
    axios({ url: "/user/sign-in", body: e, method: "POST" })
      .then((data) => {
        console.log(data);
        dispatch(
          setAuthorizationModalVisibility({ open: false, isLoadnig: false })
        );
        const { token, user } = data.data;
        localStorage.setItem("token", token);
        signIn({
          auth: {
            token,
            type: "Bearer",
          },
          userState: user,
        });
      })
      .catch(() => {
        dispatch(
          setAuthorizationModalVisibility({ open: true, isLoadnig: false })
        );
      });
  };

  const signInGoogle = async () => {
    const response = await signInWithGoogle();
    axios({
      url: "/user/sign-in/google",
      method: "POST",
      body: { email: response.user.email },
    }).then(data  => console.log(data))
    console.log(response);
  };

  //   raimjonov05@mail.ru
  // 12345678
  return (
    <div className="w-[65%] m-auto mt-[5.3rem]">
      <div className="login-top flex flex-col gap-[1.4rem] ">
        <p className="font-medium text-[1.3rem] text-[#545353]">
          Enter your username and password to login.
        </p>
        <Form
          name="basic"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          autoComplete="off"
          className="w-[100%]"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className="border-[#EAEAEA] h-[4rem] hover:border-[#46A358] focus:border-[#46A358]"
              placeholder="almamun_uxui@outlook.com"
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            className="flex flex-col gap-[14px]"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="border-[#EAEAEA] h-[4rem] hover:border-[#46A358] focus:border-[#46A358]"
              placeholder="***********"
            />
          </Form.Item>
          <p className="text-end text-[#46A358] text-[1.4rem] cursor-pointer hover:underline">
            Forgot password ?
          </p>
          <button
            disabled={authorizationModalVisibility.isLoadnig}
            className={`mt-[2.7rem] flex items-center justify-center gap-[0.5rem] w-[100%] bg-[#46A358] h-[4.5rem] rounded-[0.5rem] text-[1.6rem] font-bold text-[#fff] ${
              authorizationModalVisibility.isLoadnig && "opacity-70"
            }`}
            type="submit"
          >
            {authorizationModalVisibility.isLoadnig ? (
              <LoadingOutlined />
            ) : (
              "Login"
            )}
          </button>
        </Form>
      </div>

      <div className="flex pb-[2.2rem] items-center justify-center mt-[4.6rem] mb-5 gap-4">
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
        <p className="w-[40%]text-[#3D3D3D] text-[13px]">Or login with</p>
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
      </div>

      <div className="login-bottom flex flex-col gap-[1.5rem]">
        <button
          onClick={signInGoogle}
          className="font-bold text-[#727272] text-[1.3rem] w-full h-[4rem] rounded-[0.5rem] border-[#EAEAEA] border flex items-center justify-center gap-[1rem]"
        >
          <img src={google} alt="google" />
          Login with Google
        </button>
        <button className="font-bold text-[#727272] text-[1.3rem]  w-full h-[4rem] rounded-[0.5rem] border-[#EAEAEA] border flex items-center justify-center gap-[1rem]">
          <img src={facebook} alt="facebook" />
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
