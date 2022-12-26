import Container from './Container'

const PlanSignature = () => {
  const assignToPlan = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Container>
        <form onSubmit={assignToPlan}>
          <input
            type="text"
            name="name-printed-on-credit-card"
            placeholder="Nome impresso no cartão"
            required
          />

          <input
            type="text"
            name="card-digits"
            placeholder="Dígitos do cartão"
            required
          />

          <div className="custom-row">
            <input
              className="custom-input"
              type="text"
              name="secutiry-code"
              placeholder="Código de segurança"
              required
            />

            <input
              className="custom-input"
              type="text"
              name="validity"
              placeholder="Validade"
              required
            />
          </div>

          <button type="submit">ASSINAR</button>
        </form>
      </Container>
    </>
  )
}

export default PlanSignature
