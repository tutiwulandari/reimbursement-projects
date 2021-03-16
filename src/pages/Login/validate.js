export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'enter your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'enter your password';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    }
    return errors;
}