import { connect } from 'react-redux';
import Department, { mapStateToProps, mapDispatchToProps } from './Department.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(Department);