import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const AdminPage = () => {
  const [allInfo, setAllInfo] = useState()

  const grabAdminInformation = async () => {
    const resp = await axios.get(
      'https://coffee-clicker.herokuapp.com/api/PlayerStat'
    )
    console.log(resp)
    setAllInfo(resp.data)
  }

  useEffect(() => {
    grabAdminInformation()
  }, [])

  return (
    <div>
      {console.log(allInfo)}
      <div className="main-card-container">
        <main className="container-fluid">
          <div className="card-group">
            {/* card 1 is here */}
            <div className="card bg-secondary">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <h2 className="m-b-0"></h2>
                    <h3 className="">
                      546 <i className="fas fa-users"></i>
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

            {/* card 2 is here */}
            <div className="card bg-secondary">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <h2 className="m-b-0"></h2>
                    <h3 className="">
                      546 <i className="fas fa-car-alt"></i>
                    </h3>
                    <h6 className="card-subtitle">All User Resources </h6>
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
                      546 <i className="fas fa-wallet"></i>
                    </h3>
                    <h6 className="card-subtitle">$ in rewards </h6>
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
        <div class="container-fluid">
          <div class="row justify-content-center">
            {allInfo &&
              allInfo.map((e, i) => {
                return (
                  <div
                    style={{ margin: 0.2 + 'rem' }}
                    class="card-group col-xs-1"
                  >
                    <div class="card text-left">
                      <div class="card-body">
                        <p class="card-text">Id - {e.id}</p>
                        <p class="card-title">Name - {e.properName}</p>
                        <p class="card-text">Email - {e.email}</p>
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
