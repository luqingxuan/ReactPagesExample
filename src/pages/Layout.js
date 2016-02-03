import React from 'react';

import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Nav from '../components/Nav.js'
import Menu from '../components/Menu.js'
import Top from '../components/Top.js'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (

        		<div>
    			<Top></Top>
    			<div id="" className="g-page">
    				<Header></Header>	
    				<Nav></Nav>
    				<div id="g_main" className="g-main clearfix">
    					<div id="g_body" className='g-body pull-left'>
    						<div className='g-container clearfix'>
    					        {this.props.children}
    						</div>
    					</div>
    					<Menu></Menu>
    				</div>   			
    				<Footer></Footer>
    			</div>
    		</div>

        );
    }
}