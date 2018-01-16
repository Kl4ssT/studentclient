import { connect } from 'react-redux';
import CurrentStreams, { mapStateToProps, mapDispatchToProps } from './CurrentStreams.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStreams);