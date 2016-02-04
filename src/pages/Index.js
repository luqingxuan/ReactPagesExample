import React from 'react';

import Pager from '../components/Pager.js';

export default class App extends React.Component {
    constructor() {
        
    	super();
        
        this.state = {
    		totalRecords:300,
    		visiblePages:5
        };
    }
    
    onPage(pageNo,pageSize,event){
    	
    }
    
    render() {
        return (

        	<div>
				<Pager onPage={this.onPage} totalRecords={this.state.totalRecords} visiblePages={this.state.visiblePages}></Pager>
			</div>

        );
    }
}