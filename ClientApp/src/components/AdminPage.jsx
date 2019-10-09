import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const AdminPage = () => {
  const [allInfo, setAllInfo] = useState()

  const grabAdminInformation = async () => {
    const resp = await axios.get(
      'https://coffee-clicker.herokuapp.com/api/PlayerStat'
    )
    // console.log(resp)
    setAllInfo(resp.data)
  }

  useEffect(() => {
    grabAdminInformation()
  }, [])

  return (
    <div>
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

      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">ID</h5>
            <p class="card-text">Email</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
