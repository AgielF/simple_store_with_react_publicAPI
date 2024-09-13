import FormRegister from "../components/fragments/FormRegister"
import AuthLayout from "../components/layouts/AuthLayout"

const RegisterPage=()=>{
    return(<AuthLayout title="register" type="Register">
        <FormRegister></FormRegister>
    </AuthLayout>)
}
export default RegisterPage