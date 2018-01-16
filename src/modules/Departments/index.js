import { connect } from 'react-redux';
import Departments, { mapStateToProps, mapDispatchToProps } from './Departments.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(Departments);