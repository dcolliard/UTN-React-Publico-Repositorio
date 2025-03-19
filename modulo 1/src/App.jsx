import React  from 'react'
import './App.css'


//Identificamos que App es un componente funcional porque retorna HTML (JSX)
function App() {
  


  return (
    <div className="container">
            <h2>Create an account</h2>
            <div className="subtitle">Enter your information to register</div>
            <form>
                <div className="row">
                    <div>
                        <label htmlFor="first_name">First name</label>
                        <input type="text" id="first_name" name="first_name" placeholder="John"/>
                    </div>
                    <div>
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id="last_name" name="last_name" placeholder="Doe" />
                    </div>
                </div>
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="john.doe@example.com" />
                
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="********" />
                
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" placeholder="********"  />
                
                <button type="submit" className="btn">Register</button>
            </form>
        </div>
  )
}





export default App
