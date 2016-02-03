import React from 'react';

require('./Menu.less');

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (

        	<div id="g_menu" className='pull-left g-menu'>
				<div className='g-container clearfix'>
			
					<div className="menu-toggle">
						<i className="fa fa-bars"></i>
					</div>
					
					<ul className="list-unstyled clearfix">
						<li className="pull-left menu-item">
							<a href="{path:'/dev/index'}">
								<span className="fa fa-home"></span>首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页
							</a>
						</li>
						<li className="pull-left menu-item">
							<a href="/dev/app/create">
								<span className="fa fa-home"></span>AAA
							</a>
						</li>
						<li className="pull-left menu-item">
							<a href="/dev/app/update">
								<span className="fa fa-legal"></span>BBB
							</a>
						</li>
						<li className="pull-left menu-item">
							<a href="/dev/app/search">
								<span className="fa fa-eye"></span>CCC
							</a>
						</li>
						<li className="pull-left menu-item">
							<a href="/dev/a">
								<span className="fa fa-gears"></span>DDD
							</a>
						</li><li className="pull-left menu-item">
							<a href="/dev/b">
								<span className="fa fa-paw"></span>EEE
							</a>
						</li>
					</ul>
				</div>
			</div>

        );
    }
}