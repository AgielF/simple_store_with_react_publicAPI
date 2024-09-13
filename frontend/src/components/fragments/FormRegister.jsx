import InputForm from "../elements/input/Index"
import Button from "../elements/button"

const FormRegister=()=>{
    return( <form action="">
        <InputForm label="FullName" placeholder="agiel fernanda" type="text" name="FullName" ></InputForm>
        <InputForm label="Email" placeholder="example@gmail.com" type="email" name="email" ></InputForm>
        <InputForm label="Password" placeholder="********" type="password" name="password" ></InputForm>
        <Button variant="bg-blue-500" text="Register" />
        </form>)
}
export default FormRegister