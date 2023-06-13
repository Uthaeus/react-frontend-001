import { useEffect } from "react";
import { useForm } from "react-hook-form";

function ExampleFormA({ submitHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => submitHandler(data);

  function resetHandler() {
    reset();
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="example-form form-a">
      <input
        type="text"
        placeholder="First Name"
        className="form-control mb-2"
        {...register("firstName", { required: true, maxLength: 20 })}
      />
      {errors.firstName && <p className="form-error">First name is required</p>}
      <input
        type="text"
        placeholder="Last Name"
        className="form-control mb-2"
        {...register("lastName", { required: true, maxLength: 20 })}
      />
        {errors.lastName && <p className="form-error">Last name is required</p>}
      <input
        type="text"
        placeholder="Email"
        className="form-control mb-2"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
        {errors.email && <p className="form-error">Email is required</p>}
      <input
        type="tel"
        placeholder="Mobile Number"
        className="form-control mb-3"
        {...register("mobileNumber", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      {errors.mobileNumber && <p className="form-error">Mobile number is required</p>}
      <button type="submit" className="form-btn">
        Submit
      </button>

      <button onClick={resetHandler} className="form-btn reset-btn">Reset</button>
    </form>
  );
}

export default ExampleFormA;
