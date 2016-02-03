import React from 'react';

require('./Pager.less');

// es6属性propTypes/defaultProps不能写在class内,class.defaultProps={}
// es6属性propTypes/defaultProps 可以标识static定义在class内，也可以定义在class外)
export default class Pager extends React.Component {
	
	constructor(props) {
	    
		super(props);
	    
	    this.state = {
    		pageNo:props.pageNo || 1,
    		pageSize:props.pageSize || 1,
    		totalRecords:props.totalRecords || 0,
    		visiblePages:props.visiblePages || 5
    	};
	}

    // 计算出来总共多少页
	getTotalPages() {

		var totalPages = this.state.totalRecords
				/ this.state.pageSize;

		if (this.state.totalRecords % this.state.pageSize != 0)
			totalPages = parseInt(totalPages) + 1;

		return totalPages;
	}
    
	// 渲染页码开始号
	getStartPage() {

		var totalPages=this.getTotalPages();
		
		if (totalPages < this.state.visiblePages)
			return 1;

		var half = this.state.visiblePages / 2;
		if (this.state.visiblePages % 2 != 0)
			half = parseInt(half);

		// 页码显示范围
		var range = [ this.state.pageNo - half,
				this.state.pageNo + half ];

		var delta = range[0] > 0 ? 0 : 1 - range[0];

		range[0] = range[0] + delta;

		range[1] = range[1] + delta;

		if (range[1] > totalPages)
			range[0] = range[0]
					- (range[1] - totalPages);

		return Math.max(range[0], 1);

	}
	
	// 渲染页码结束号
	getEndPage() {
		
		var totalPages=this.getTotalPages();
		
		if (totalPages < this.state.visiblePages)
			return totalPages;

		var half = this.state.visiblePages / 2;
		if (this.state.visiblePages % 2 != 0)
			half = parseInt(half);
		
		// 页码显示范围
		var range = [ this.state.pageNo - half,
				this.state.pageNo + half ];

		if (this.state.visiblePages % 2 == 0)
			range[1]-=1;
		
		var delta = range[0] > 0 ? 0 : 1 - range[0];

		range[1] = range[1] + delta;

		return Math.min(range[1], totalPages);
	}
	
	// 显示记录开始号
	getStartRecord() {

		return (this.state.pageNo - 1) * this.state.pageSize + 1;
	}
	
	// 显示记录结束号
	getEndRecord() {

		return Math.min(this.state.pageNo * this.state.pageSize,
				this.state.totalRecords);
	}
	
	page(pageNo,event) {
		
		// 禁用
		// if (/disabled/
		// .test(event.target.parentNode.className))
		// return;

		this.setState({pageNo:pageNo});

		var onPage=this.props.onPage;
		
		if(onPage && typeof onPage =='function')
			onPage.call(this,pageNo,this.state.pageSize,event);
		
		// this.$dispatch('page', page);

		// this.pageChange.call(this, event,page);
	}
	
    render() {

    	var totalRecords=this.state.totalRecords;
    	
    	if(totalRecords < 1)
    		return (<div></div>);

    	var pageNo=this.state.pageNo;
    	var pageSize=this.state.pageSize;
    	var visiblePages=this.state.visiblePages;
    	
    	var totalPages=this.getTotalPages();
    	var startPage=this.getStartPage();
    	var endPage=this.getEndPage();
    	var startRecord=this.getStartRecord();
    	var endRecord=this.getEndRecord();

    	var firstCls=pageNo==1 ? "first disabled" : "first";
    	var prevCls=pageNo==1 ? "prev disabled" : "prev";
    	
    	var lastCls=pageNo==totalPages ? "last disabled" : "last";
    	var nextCls=pageNo==totalPages ? "next disabled" : "next";
    
    	var items=[];
    	for(var index=startPage;index<=endPage;index++)
			items.push(<li key={index} className={index==pageNo ? "page active" : "page"}><a href="javascript:void(0);" onClick={this.page.bind(this,index)}>{index}</a></li>);
    	
        return (

    		<div className="pagination-bar clearfix">
        		<div className="pull-left pagination-summary">
        			第 {startRecord}到 {endRecord} 条，共 {totalRecords} 条记录
        		</div>
        		<ul className="pull-right pagination">
        			<li className={firstCls}>
        				<a href="javascript:void(0);" onClick={this.page.bind(this,1)}>&lt;&lt;</a>
        			</li>
        			<li className={prevCls}>
        				<a href="javascript:void(0);" onClick={this.page.bind(this,pageNo-1)}>&lt;</a>
        			</li>
        			
        			{items}
        			
        			<li className={nextCls}>
        				<a href="javascript:void(0);" onClick={this.page.bind(this,pageNo+1)}>&gt;</a>
        			</li>
        			<li className={lastCls}>
        				<a href="javascript:void(0);" onClick={this.page.bind(this,totalPages)}>&gt;&gt;</a>
        			</li>
        		</ul>
        	</div>
       	);
   	}
};

