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
      height: '300px',
      width: '100%',
    };
   if( anns){
    return(
      <div>
      <ReactSwiper ref="reactSwiper" swipeOptions={{}}>
          {anns.map((annonce,i)=>{
                if(annonce){
                 return(
                <div key={i}style={style} >
                  <EncartAnnonce donnees={annonce}></EncartAnnonce>
                </div>
              )}
            })
        }
    </ReactSwiper>
          <Button  onClick={this.prev}>Prev</Button>
          <Button  onClick={this.next}>Next</Button>
          </div>
  )}
}

  render() {

      obj=this.obj( this.props.liste)

    return (
      <div>



            {
              obj
            }

      </div>
    );
  }
}


