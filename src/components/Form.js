const Form = ({ updateDoc }) => {

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(e)
  }

  return (
    <form onSubmit={onSubmit}>
      <h4 className="section-title">General</h4>

      <div className="form-control">
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' placeholder="John Doe" onChange={updateDoc} />
      </div>

      <div className="form-control">
        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='example@this.com' />
      </div>

      <div className="form-control">
        <label htmlFor='phone'>Phone</label>
        <input type='phone' placeholder='+1 (123)-456-789' />
      </div>

      <h4 className="section-title">Education</h4>

      <div className="form-control">
        <label htmlFor='university'>University</label>
        <input type='text' placeholder='University of Example' />
      </div>

      <div className="form-control">
        <label htmlFor='degree'>Degree</label>
        <input type='text' placeholder='Degree Title' />
      </div>

      <div className="form-control">
        <label htmlFor='from-uni'>From</label>
        <input type='date' />
      </div>

      <div className="form-control">
        <label htmlFor='to-uni'>To</label>
        <input type='date' />
      </div>

      <h4 className="section-title">Experience</h4>

      <div className="form-control">
        <label htmlFor='company'>Company</label>
        <input type='text' placeholder='Company Name' />
      </div>

       <div className="form-control">
        <label htmlFor='position'>Position</label>
        <input type='text' placeholder='Position Title' />
      </div>

      <div className="form-control">
        <label htmlFor='company'>Description</label>
        <textarea placeholder='A description of your job here' />
      </div>

      <div className="form-control">
        <label htmlFor='from-job-1'>From</label>
        <input type='date' />
      </div>

      <div className="form-control">
        <label htmlFor='to-job-1'>To</label>
        <input type='date' />
      </div>

      <input type='submit' value='Submit' className="bg-green-500 text-white rounded-md py-1 px-2 hover:bg-green-400 duration-500" />
    </form>
  )
}

export default Form
