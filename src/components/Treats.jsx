import React, { Component } from 'react'
import {GiStoneSphere, GiShinyOmega, GiSproutDisc, GiSalamander} from 'react-icons/gi'
import Title from './Title'

export default class Treats extends Component {
    state={
        treats:[
            {
                icon:<GiStoneSphere/>,
                title:'Our pro network efficiency',
                info:'Lorem ipsum....'
            },
            {
                icon:<GiShinyOmega/>,
                title:'Meditation and knowledge togeather',
                info:'Lorem ipsum....'
            },
            {
                icon:<GiSalamander/>,
                title:'Our wisdom approach',
                info:'Lorem ipsum....'
            },
            {
                icon:<GiSproutDisc/>,
        title:'Action in the metropole',
                info:'Lorem ipsum....'
            }
        ]
    }
    render() {
        return (
          <section className="treats">
            <Title title="treats" />
            <div className="treats-center">
                {this.state.treats.map((item, index) => {
                    return (
                    <article key={index} className="treats">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    );
                })}
            </div>
          </section>
        );
    }
}
