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

          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Robert</td>
                <td>Frank</td>
                <td>@RobFrankJr</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Herald</td>
                <td>jones</td>
                <td>@Rhjones1234</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>howie</td>
                <td>martin</td>
                <td>@Rhman65</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>R.J</td>
                <td>Squillie</td>
                <td>@Rsquillie</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Carmen</td>
                <td>Baldauf</td>
                <td>@cbnew</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}
