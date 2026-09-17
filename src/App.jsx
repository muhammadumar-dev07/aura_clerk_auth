import './App.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { SignIn } from '@clerk/react'

function App() {
  return (
    <>
    <h1>The AURA Store Authentication</h1>
      <header>
        <Show when="signed-out">
          <SignIn fallbackRedirectUrl="/dashboard" forceRedirectUrl="/dashboard"/>
          {/* You're not Signed In
          <SignInButton /> <br />
          <SignUpButton /> */}
        </Show>

        <Show when="signed-in">
          You're Signed in
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App