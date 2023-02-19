import './FormComponent.css'
import { useState } from "react"

const FormComponent = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')

    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRePassword, setErrorRePassword] = useState('')

    const [userNameColor, setUserNameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [repasswordColor, setRePasswordColor] = useState('')


    const validateForm = (e) => {
        e.preventDefault()

        if (userName.length > 8) {
            setErrorUsername('')
            setUserNameColor('green')
        }else {
            setErrorUsername('Please enter a username of 8 characters.')
            setUserNameColor('red')
        }

        if (email.includes("@")) {
            setErrorEmail('')
            setEmailColor('green')
        }else {
            setErrorEmail('Type email incorrect.')
            setEmailColor('red')
        }

        if (password.length > 8) {
            setErrorPassword('')
            setPasswordColor('green')
        }else {
            setErrorPassword('Password of 8 characters.')
            setPasswordColor('red')
        }

        if (repassword !== "" && password === repassword) {
            setErrorRePassword('')
            setRePasswordColor('green')
        }else {
            setErrorRePassword('Password do not match')
            setRePasswordColor('red')
        }
    }


    return (
        <div className="container">
            <h2>Form Register</h2>
            <form className="form" onSubmit={validateForm}>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} style={{borderColor: userNameColor}}/>
                    {/* borderColor คือ สีขอบของ input */}
                    <small style={{color: userNameColor}}>{errorUsername}</small>
                </div>
                <div className="form-control">
                    <label>E-mail</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{borderColor: emailColor}}/>
                    <small style={{color: emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{borderColor: passwordColor}}/>
                    <small style={{color: passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="password" value={repassword} onChange={(e) => setRePassword(e.target.value)} style={{borderColor: repasswordColor}}/>
                    <small style={{color: repasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormComponent
