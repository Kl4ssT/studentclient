import { connect } from 'react-redux';
import Subscribe, { mapStateToProps, mapDispatchToProps } from './Subscribe.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);