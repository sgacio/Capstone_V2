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


      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">ID</h5>
            <p class="card-text">Email</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

    </div>

  );
}

export default AdminPage
