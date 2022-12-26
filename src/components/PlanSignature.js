import Container from './Container'

const PlanSignature = () => {
  const assignToPlan = (e) => {
    e.preventDefault()
    console.log('asdasdasdasd')
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

          <input
            type="text"
            name="secutiry-code"
            placeholder="Código de segurança"
            required
          />

          <input type="text" name="validity" placeholder="Validade" required />
        </form>
      </Container>
    </>
  )
}

export default PlanSignature
