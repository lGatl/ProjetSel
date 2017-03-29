import React, { Component } from 'react';

import EncartAnnonce from './EncartAnnonce.js'
import { Button } from 'semantic-ui-react'
import 'swiper/dist/css/swiper.css';
import ReactSwiper from 'react-swiper-dy';



export default class Carousel extends Component {

  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }
  next() {
    this.refs.reactSwiper.next();
  }
  prev() {
    this.refs.reactSwiper.prev();
  }
  render() {
      const style = {
      height: '300px',
      width: '100%',
    };
    return (
      <div>

        <ReactSwiper ref="reactSwiper" swipeOptions={{}}>

            {

              this.props.liste.map((annonce,i)=>{
                if(annonce){
                 return(

                <div key={i}style={style} >
                  <EncartAnnonce donnees={annonce}></EncartAnnonce>
                </div>

              )}

            })

            }
        </ReactSwiper>

        <div>
          <Button  onClick={this.prev}>Prev</Button>
          <Button  onClick={this.next}>Next</Button>
        </div>
      </div>
    );
  }
}


