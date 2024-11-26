import { connect } from "react-redux";

import ResumeModel from "./resume"


const MainPage = (props) => {

    
    return (
        <div>

            <ResumeModel />
        </div>
    )
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(MainPage);
