import React, {Component} from 'react';

// Import custom components
import Dashboard from '../../components/dashboard/Dashboard';

class DashboardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open = true,
        }
    }

    toggleDrawer = function(){
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <AppBar handleDrawer={this.toggleDrawer}></AppBar>
            <Drawer open={this.state.open} />
            <Dashboard/>
        )
    }

}

export default DashboardContainer