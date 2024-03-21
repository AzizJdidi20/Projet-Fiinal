import React from 'react'
import { useNavigate } from 'react-router-dom'
const Regsiter = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='body'></div>
      <meta charSet="utf-8" />
      <title>Registration Form - 30DaysOfCSS3</title>
      <link
        href="https://fonts.googleapis.com/css?family=Bubblegum+Sans|Nova+Mono|Roboto+Condensed"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Parisienne&display=swap"
        rel="stylesheet"
      />
      <h1>Day #4 Registration Form.</h1>
      <div className="content">
        <section>
          <div className="register-wrapper">
            <div className="register-block">
              <h3 className="register-title" onClick={navigate('/login')}>Create an account</h3>
              <p>Create an account using the form below.</p>
              <form action="">
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <input type="submit" defaultValue="Create my account" />
              </form>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <a href="https://twitter.com/Lilykhan786" target="_blank">
          Lily.
        </a>
      </footer>
    </>

  )
}

export default Regsiter
