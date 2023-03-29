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
        <label for='from-uni'>From</label>
        <input type='date' />
      </div>

      <div>
        <label for='to-uni'>To</label>
        <input type='date' />
      </div>

      <h4>Experience</h4>

      <div>
        <label for='company'>Company</label>
        <input type='text' placeholder='Company Name' />
      </div>

       <div>
        <label for='position'>Position</label>
        <input type='text' placeholder='Position Title' />
      </div>

      <div>
        <label for='company'>Description</label>
        <textarea placeholder='List a description of your job here' />
      </div>

      <div>
        <label for='from-job-1'>From</label>
        <input type='date' />
      </div>

      <div>
        <label for='to-job-1'>To</label>
        <input type='date' />
      </div>

      <input type='submit' value='Submit' />
    </form>
  )
}

export default Form
