import { connect } from 'react-redux';
import Navbar from './navbar';

import { login, signup } from '../../actions/session_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
})

export default connect(msp, mdp)(Navbar);