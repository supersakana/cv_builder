const Doc = ({ content }) => {
  return (
    <div className="font-bold">
      <p>{content.name}</p>
      <p>Email</p>
      <p>Phone</p>

      <br></br>

      <p>University</p>
      <p>Degree</p>
      <p>From</p>
      <p>To</p>

      <br></br>

      <p>Company</p>
      <p>Position</p>
      <p>Description</p>
      <p>From</p>
      <p>To</p>
    </div>
  )
}

export default Doc
