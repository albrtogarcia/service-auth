import Button from 'core/Button'
import Input from 'core/Input'
import './Login.scss'

const Home = () => {
  return (
    <div class="login">
      <h2>Sign In</h2>
      <div class="form">
        <Input label="Username" type="text" />
        <Input label="Password" type="password" />
        <div class="form-links">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <div class="form-actions">
          <Button>Send</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
