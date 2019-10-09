import React from 'react'

export const AdminPage = () => {
  return (
    <div>
      <div className="main-card-container">
        <main className="container-fluid">
          <div className="card-group">
            {/* card 1 is here */}
            <div class="card bg-secondary">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <h2 class="m-b-0"></h2>
                    <h3 class="">
                      546 <i class="fas fa-users"></i>
                    </h3>
                    <h6 class="card-subtitle">Total Users </h6>
                  </div>
                  <div class="col-12">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 is here */}
            <div class="card bg-secondary">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <h2 class="m-b-0"></h2>
                    <h3 class="">
                      546 <i class="fas fa-car-alt"></i>
                    </h3>
                    <h6 class="card-subtitle">All User Resources </h6>
                  </div>
                  <div class="col-12">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 is here */}
            <div class="card bg-secondary">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <h2 class="m-b-0"></h2>
                    <h3 class="">
                      546 <i class="fas fa-wallet"></i>
                    </h3>
                    <h6 class="card-subtitle">$ in rewards </h6>
                  </div>
                  <div class="col-12">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
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
