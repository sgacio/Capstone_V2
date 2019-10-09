import React from 'react';



export const AdminPage = () => {
  return (
    <div>
      <div className='main-card-container'>
        <main className='container-fluid'>
          <div className='card-group'>

            {/* card 1 is here */}
            <div class="card bg-secondary">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <h2 class="m-b-0"></h2>
                    <h3 class="">546 <i class="fas fa-users"></i></h3>
                    <h6 class="card-subtitle">Total Users </h6></div>
                  <div class="col-12">
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar"></div>
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
                    <h3 class="">546 <i class="fas fa-car-alt"></i></h3>
                    <h6 class="card-subtitle">All User Resources </h6></div>
                  <div class="col-12">
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar"></div>
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
                    <h3 class="">546 <i class="fas fa-wallet"></i></h3>
                    <h6 class="card-subtitle">$ in rewards </h6></div>
                  <div class="col-12">
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar" ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="card-deck d-md-block">
        <div className="card mb-4 ">
          <div className="card-body">
            <p className="card-text">Id</p>
            <p className="card-text">Email</p>
            <p className="card-text">Handle</p>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p className="card-text">Id</p>
            <p className="card-text">Email</p>
            <p className="card-text">Handle</p>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p className="card-text">Id</p>
            <p className="card-text">Email</p>
            <p className="card-text">Handle</p>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p className="card-text">Id</p>
            <p className="card-text">Email</p>
            <p className="card-text">Handle</p>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p className="card-text">Id</p>
            <p className="card-text">Email</p>
            <p className="card-text">Handle</p>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p className="card-text">Id</p>
            <p className="card-text">Email</p>
            <p className="card-text">Handle</p>
          </div>
        </div>

      </div>
    </div>

  );
}

export default AdminPage
