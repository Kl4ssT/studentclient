import {connect} from 'react-redux';
import Contacts, { mapStateToProps, mapDispatchToProps } from './Contacts.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);