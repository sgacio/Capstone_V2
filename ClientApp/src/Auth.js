import auth0 from "auth0-js"
import history from './History'

const DOMAIN = 'dev-a3avdr6y.auth0.com'
const CLIENT_ID = 'RVzD91hKyrrY7dVuklR8K9swQLtdSxYY'


class Auth {
  userProfile

  auth0 = new auth0.WebAuth({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    redirectUri: `${window.location.protocol}//${
      window.location.host
      }/callback`,
    responseType: 'token id_token',
    scope: 'openid email profile'
  })

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login() {
    this.auth0.authorize()
  }
  logout() {
    //clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem("id_token")
    localStorage.removeItem('expires_at')
    //navigate to the home route
    history.replace('/')
  }
  handleAuthentication(callback) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        if (callback) {
          callback()
        }
        history.replace('/')
      } else if (err) {
        history.replace('/')
        console.log(err)
      }
    })
  }


  setSession(authResult) {
    //set the time the token will expire
    let expireAt = JSON.stringify(
      authResult.expiresIn * 1000 * new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', authResult.expireAt)
  }

  isAuthenticated() {
    //check wether the current time is past the access tokens expiry date
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  getIdToken() {
    const idToken = localStorage.getItem('id_token')
    if (!idToken) {
      throw new Error('no ID Token found')
    }
    return idToken
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No Access Token foud')
    }
    return accessToken
  }

  getProfile() {
    let accessToken = this.getAccessToken()
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile
      }
      cb(err, profile)
    })
  }


  authorizationHeader() {
    return `Bearer${this.getIdToken()}`
  }
}

const auth = new Auth()

export default auth