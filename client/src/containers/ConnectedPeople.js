import PeoplePage from '../components/PeoplePage'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ people: state.people.people });

export const ConnectedPeople = connect(
  mapStateToProps
)(PeoplePage);

export default ConnectedPeople
