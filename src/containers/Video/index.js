import { connect } from 'react-redux';
import Video, { mapStateToProps, mapDispatchToProps } from './Video.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(Video);