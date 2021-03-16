// import {useEffect, useState} from "react";
//
// const UseForm = (callback, validate) => {
//     const [values, setValues] = useState( {
//         email: "",
//         password:"",
//         showPassword:false,
//     });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false)
//
//     const handleChange = (event) => {
//         const {name, value} = event.target;
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setErrors(validate(values));
//         setIsSubmitting(true)
//     }
//
//
//
//     useEffect(() => {
//         if (Object.keys(errors).length === 0 && isSubmitting) {
//             callback();
//         }
//     }, [errors]);
//     return {handleChange, values, handleSubmit, errors}
// }
//
// export default UseForm;