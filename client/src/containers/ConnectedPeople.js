import PeopleTable from '../components/PeopleTable'
import FrequencyTable from '../components/FrequencyTable'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ people: state.people.people });

export const ConnectedPeopleList = connect(
  mapStateToProps
)(PeopleTable);

export const ConnectedPeopleFreq = connect(
  mapStateToProps
)(FrequencyTable);

export default [ConnectedPeopleList, ConnectedPeopleFreq]
