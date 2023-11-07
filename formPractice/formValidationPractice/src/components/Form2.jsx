import React, { useState } from "react";
import FormInput2 from "./FormInput2";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const schemaInput = yup.object().shape({
  firstName: yup
    .string()
    .required("Please give the name yours folks have given to you")
    .min(4, "small name,your parent mustn't love you"),
  lastName: yup.string().required("Please enter your family name"),
  email: yup
    .string()
    .email()
    .required(
      "Hey old Timer ,email account is a must have to avail our services"
    ),

  password: yup.string().min(4).max(15).required("please !!!!!!!!!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), "Get yourself checked for dimentia"]),
});

const inputValuesData = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "first name",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "last name",
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "password",
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",

    placeholder: "confrom password",
  },
];

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaInput),
  });

  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const submitForm = (data) => {
    console.log("it");
  };

  return (
    <div className="app">
      <div className="form2">
        <form onSubmit={handleSubmit(submitForm)} style={{ width: "100%" }}>
          {inputValuesData.map((item) => (
            <FormInput2
              {...item}
              key={item.id}
              reg={register(item.name)}
              error={errors?.[item.name]?.message}
            />
          ))}
          <input type="submit" name="submit" style={{ width: "100%" }} />
        </form>
      </div>
    </div>
  );
};

export default Form2;
