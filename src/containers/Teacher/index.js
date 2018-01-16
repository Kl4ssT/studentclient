import { connect } from 'react-redux';
import Teacher, { mapStateToProps, mapDispatchToProps } from './Teacher.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);