import { AuthContext } from '../components/AuthContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const Home = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const changePlan = () => {
    navigate('/subscriptions')
  }

  const cancelPlan = async () => {
    try {
      const resp = await axios.delete(`${BASE_URL}/subscriptions`, {
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
      })

      if (resp.status === 204) {
        navigate('/subscriptions')
      } else {
        // Nothing todo
      }
    } catch (err) {}
  }

  useEffect(() => {
    if (user === null || user?.membership === undefined) {
      navigate('/')
    }
  }, [navigate, user])

  if (user === null || user?.membership === undefined) return <></>

  return (
    <>
      {user.membership.perks.map((perk) => {
        return <div key={perk.id}>{perk.title}</div>
      })}

      <button onClick={changePlan}>Mudar plano</button>
      <button onClick={cancelPlan}>Cancelar plano</button>
    </>
  )
}

export default Home
