const Doc = ({ content }) => {
  return (
    <div className="font-bold">
      <p>{content.name}</p>
      <p>{content.email}</p>
      <p>{content.phone}</p>

      <br></br>

      <p>{content.university}</p>
      <p>{content.degree}</p>
      <p>{content.from_uni}</p>
      <p>{content.to_uni}</p>

      <br></br>

      <p>{content.company}</p>
      <p>{content.position}</p>
      <p>{content.description}</p>
      <p>{content.from_comp}</p>
      <p>{content.to_comp}</p>
    </div>
  )
}

export default Doc
