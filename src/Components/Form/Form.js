import React from "react";
import { useForm } from "react-hook-form";
import { createPost } from "../../services/services";

const Form = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    createPost(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Enter title"
            ref={register({
              required: {
                value: true,
                message: "Title required",
              },
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>Title required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            className="form-control"
            name="body"
            rows="3"
            placeholder="Enter content"
            ref={register({
              required: {
                value: true,
                message: "Body required",
              },
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>Body required</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
