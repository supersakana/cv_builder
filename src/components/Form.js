const Form = () => {
  return (
    <form>
      <h4>General</h4>

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

      <h4>Education</h4>

      <div>
        <label for='university'>University</label>
        <input type='text' placeholder='University of Example' />
      </div>

      <div>
        <label for='degree'>Degree</label>
        <input type='text' placeholder='Degree Title' />
      </div>

      <div>
        <label for='from'>From</label>
        <input type='date' />
      </div>

      <div>
        <label for='to'>To</label>
        <input type='date' />
      </div>

      <input type='submit' value='Submit' />
    </form>
  )
}

export default Form
