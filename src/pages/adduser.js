// for notification
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {UserAddOutlined} from "@ant-design/icons/lib/icons";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {PhoneRegex} from "@/constant";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  phone: z.string().refine(val => PhoneRegex.test(val), {
    message: "Invalid phone number",
  }),
});

function Adduser() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    shouldUseNativeValidation: false,
  });
  // action after form submission
  function handleForm(formdata) {
    const list = JSON.parse(window.localStorage.getItem("allUsers"));
    const newUser = {
      id: list.length + 1,
      name: formdata.name,
      phone: formdata.phone,
      email: formdata.email,
    };
    list.push(newUser);
    window.localStorage.setItem("allUsers", JSON.stringify(list));
    toast.success("New User added successfully");
    reset();
    router.push("/");
  }

  return (
    <div className="container py-5">
      <div className="row ">
        <div className="col-md-6 offset-md-3 box-shadow-blur ">
          <h3 className="text-dark py-2 pt-4 d-flex font-weight-dark align-items-center justify-content-center">
            <span>User Details</span>{" "}
            <UserAddOutlined className="d-flex mx-1 fs-4" />
          </h3>
          <form
            className="form-group px-3 py-1"
            onSubmit={handleSubmit(handleForm)}
          >
            <div className="my-4 mb-2">
              <input
                {...register("name")}
                className="form-control"
                placeholder="Name"
              />
            </div>
            {errors?.name?.message && (
              <p className="font-size-13 text-danger m-0 px-2">
                {errors?.name?.message}
              </p>
            )}
            <div className="my-4 mb-2">
              <input
                {...register("phone")}
                className="form-control"
                placeholder="Phone"
              />
            </div>
            {errors?.phone?.message && (
              <p className="font-size-13 text-danger m-0 px-2">
                {errors?.phone?.message}
              </p>
            )}
            <div className="my-4 mb-2">
              <input
                {...register("email")}
                className="form-control"
                placeholder="Email"
              />
            </div>
            {errors?.email?.message && (
              <p className="font-size-13 text-danger m-0 px-2">
                {errors?.email?.message}
              </p>
            )}
            <div className="my-4 mb-2">
              <button className="my-4 btn btn-secondary w-100">
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Adduser;
