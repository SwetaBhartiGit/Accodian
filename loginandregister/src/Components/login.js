import React, { useState } from 'react'
const Login = () => {
    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    });
    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setUserRegistration({ ...setUserRegistration, [name]: value });


    }
    const handleSumit = (e) => {
        e.preventDefault();
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        console.log(records)
        setRecords([...records, newRecord]);
        console.log(records)
        setUserRegistration({ username: "", email: "", phone: "", password: "" });


    }

    return (
        <>
            <h1 className="datacell"> THE LOGIN FORM</h1>

            <form className="id" action="" onSubmit={handleSumit}>
                <div>
                    <p htmlFor="username">Fullname</p>
                    <input className="id1" type="text" autoComplete="off"
                        value={userRegistration.username}
                        onChange={handleInput}
                        name="username" id="username" />
                </div>
                <div>
                    <p htmlFor="username">email</p>
                    <input className="id1" type="text" autoComplete="off"
                        value={userRegistration.email}
                        onChange={handleInput}



                        name="email" id="email" />
                </div>
                <div>
                    <p htmlFor="username">password</p>
                    <input className="id1" type="password" autoComplete="off"
                        value={userRegistration.password}
                        onChange={handleInput}
                        name="password" id="password" />
                </div>
                <div>
                    <p htmlFor="username">phone</p>
                    <input className="id1" type="number" autoComplete="off"
                        value={userRegistration.phone}
                        onChange={handleInput}

                        name="phone" id="phone" />
                </div>
                <button type="summit">Registration</button>
            </form>
            <div />
            <div>
                {
                    records.map((currElem) => {
                        return (
                            <div className="showdatastyle" key={currElem.id}>
                                <p>{currElem.username}</p>
                                <p>{currElem.email}</p>
                                <p>{currElem.phone}</p>
                                <p>{currElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
export default Login
