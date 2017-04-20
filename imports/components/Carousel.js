import React, { Component } from 'react';

import EncartAnnonce from './EncartAnnonce.js'
import { Button } from 'semantic-ui-react'
import 'swiper/dist/css/swiper.css';
import ReactSwiper from 'react-swiper-dy';



export default class Carousel extends Component {

	constructor() {
		super();
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
	}

	next() {
		this.refs.reactSwiper.next();
	}
	prev() {
		this.refs.reactSwiper.prev();
	}

	obj(anns){
		 const style = {
			width: '100%'
		};
		if(anns.length>2){
			return(
				<div>
					<ReactSwiper ref="reactSwiper" swipeOptions={{}}>
						<div style={style}>
						<EncartAnnonce donnees={anns[0]}></EncartAnnonce>
						</div>
						<div style={style}>
						<EncartAnnonce donnees={anns[1]}></EncartAnnonce>
						</div>
						<div style={style}>
						<EncartAnnonce donnees={anns[2]}></EncartAnnonce>
						</div>
					</ReactSwiper>
						<Button  onClick={this.prev}>Prev</Button>
						<Button  onClick={this.next}>Next</Button>
				</div>
			)
		}else{}
	}
	render() {
		obj=this.obj(this.props.liste)
		return (
			<div>
				{obj}
			</div>

		);
	}
}


