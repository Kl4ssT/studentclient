import {connect} from 'react-redux';
import About, { mapStateToProps, mapDispatchToProps } from './About.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(About);