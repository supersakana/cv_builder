const Form = () => {
  return (
    <form>
      <h4 className="section-title">General</h4>

      <div className="form-control">
        <label for='name'>Name</label>
        <input type='text' placeholder="John Doe" />
      </div>

      <div className="form-control">
        <label for='email'>Email</label>
        <input type='email' placeholder='example@this.com' />
      </div>

      <div className="form-control">
        <label for='phone'>Phone</label>
        <input type='phone' placeholder='+1 (123)-456-789' />
      </div>

      <h4 className="section-title">Education</h4>

      <div className="form-control">
        <label for='university'>University</label>
        <input type='text' placeholder='University of Example' />
      </div>

      <div className="form-control">
        <label for='degree'>Degree</label>
        <input type='text' placeholder='Degree Title' />
      </div>

      <div className="form-control">
        <label for='from-uni'>From</label>
        <input type='date' />
      </div>

      <div className="form-control">
        <label for='to-uni'>To</label>
        <input type='date' />
      </div>

      <h4 className="section-title">Experience</h4>

      <div className="form-control">
        <label for='company'>Company</label>
        <input type='text' placeholder='Company Name' />
      </div>

       <div className="form-control">
        <label for='position'>Position</label>
        <input type='text' placeholder='Position Title' />
      </div>

      <div className="form-control">
        <label for='company'>Description</label>
        <textarea placeholder='A description of your job here' />
      </div>

      <div className="form-control">
        <label for='from-job-1'>From</label>
        <input type='date' />
      </div>

      <div className="form-control">
        <label for='to-job-1'>To</label>
        <input type='date' />
      </div>

      <input type='submit' value='Submit' className="bg-green-500 text-white rounded-md py-1 px-2 hover:bg-green-400 duration-500" />
    </form>
  )
}

export default Form
