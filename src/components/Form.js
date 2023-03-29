const Form = () => {
  return (
    <form>
      <div>
        <label for='name'>Name</label>
        <input type='text' placeholder="John Doe" />
      </div>

      <div>
        <label for='email'>Email</label>
        <input type='email' placeholder='example@this.com' />
      </div>

      <div>
        <label for='phone'>Phone</label>
        <input type='phone' placeholder='+1 (123)-456-789' />
      </div>

      <input type='submit' value='Submit' />
    </form>
  )
}

export default Form
