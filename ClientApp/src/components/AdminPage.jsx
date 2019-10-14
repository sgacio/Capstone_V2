import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const AdminPage = () => {
  const [allInfo, setAllInfo] = useState()
  const [totalUsers, setTotalUsers] = useState()
  const [allGames, setAllGames] = useState()
  const [gross, setGross] = useState()

<<<<<<< HEAD
  const grabAdminInformation = async () => {
    const resp = await axios.get('https://localhost:5001/api/PlayerStat')
=======

  const grabAdminInformation = async props => {
    const resp = await axios.get(
      'https://localhost:5001/api/PlayerStat'
    )
    console.log(resp)
    setAllInfo(resp.data)
  }

  const deleteUser = async (id) => {
    const resp = await axios.delete(
      `https://localhost:5001/api/PlayerStat/${id}`
    )
    console.log(resp)
>>>>>>> 8d4aba1f57bce966973fd628323c10c3e2dc4332
    setAllInfo(resp.data)
    setTotalUsers(resp.data.length)
  }

  const getAllUserResources = async () => {
    const resp = await axios.get('https://localhost:5001/api/Object')

    const gettingInfo = resp.data.map(e => {
      return JSON.parse(e.counter)
    })

    const mappingTheMapForTotalIncome = gettingInfo.map(e => {
      return e.totalIncome
    })

    const totalSpent = gettingInfo.map(e => {
      return e.amountSpent
    })

    const z = mappingTheMapForTotalIncome.reduce((accum, curr) => accum + curr)
    const a = totalSpent.reduce((accum, curr) => accum + curr)
    setAllGames(z)
    setGross(z + a)
  }

  useEffect(() => {
    grabAdminInformation()
    getAllUserResources()
  }, [])

  return (
    <div>
      <div className="main-card-container">
        <main className="container-fluid">
          <div className="card-group">
            <div className="card bg-secondary">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <h2 className="m-b-0"></h2>
                    <h3 className="">
                      {totalUsers}
                      <i className="fas fa-users"></i>
                    </h3>
                    <h6 className="card-subtitle">Total Users </h6>
                  </div>
                  <div className="col-12">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-secondary">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <h2 className="m-b-0"></h2>
                    <h3 className="">
                      {Math.round(allGames * 100) / 100}
                      <i className="fas fa-car-alt"></i>
                    </h3>
                    <h6 className="card-subtitle">
                      All Users Current Inventory
                    </h6>
                  </div>
                  <div className="col-12">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 is here */}
            <div className="card bg-secondary">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <h2 className="m-b-0"></h2>
                    <h3 className="">
                      {Math.round(gross * 100) / 100}
                      <i className="fas fa-wallet"></i>
                    </h3>
                    <h6 className="card-subtitle">All Users Gross Income</h6>
                  </div>
                  <div className="col-12">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {allInfo &&
              allInfo.map((e, i) => {
                return (
                  <div
                    style={{ margin: 0.2 + 'rem' }}
                    className="card-group col-xs-1"
                  >
<<<<<<< HEAD
                    <div className="card text-left">
                      <div className="card-body">
                        <p className="card-text">Id - {e.id}</p>
                        <p className="card-title">Name - {e.properName}</p>
                        <p className="card-text">Email - {e.email}</p>
=======
                    <div class="card text-left">
                      <div class="card-body">
                        <p class="card-text">Id - {e.id}</p>
                        <p class="card-title">Name - {e.properName}</p>
                        <p class="card-text">Email - {e.email}</p>

                        <button class="btn btn-primary mt-auto" onClick={() => deleteUser(e.id)}>Delete</button>
>>>>>>> 8d4aba1f57bce966973fd628323c10c3e2dc4332
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
