import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title'
export default class Services extends
Component {
	state={
		services:[
		{
			icon:<FaCocktail/>,
			title:"Free cocktails",
			info: 'Nice nice nice! We got the best Cocktails. Wohoo.'
		},
		{
			icon:<FaHiking/>,
			title:"Free hiking",
			info: 'Hiking is the sport to do. Really great. Got to love it.'
		},
		{
			icon:<FaShuttleVan/>,
			title:"Free van",
			info: 'Come take a ride with our precious Van. Best Van. Ever.'
		},
		{
			icon:<FaBeer/>,
			title:"Best beer",
			info: 'To beer or not to beer. That is not the questions. Only beer, beerling.'
		}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title='services'/>
				<div className="services-center">
				{this.state.services.map((item, index) => {
					return <article key={index} className="service">
					<span>{item.icon}</span>
					<h6>{item.title}</h6>
					<p>{item.info}</p>
				</article>
				})}
				</div>
			</section>
			)
	}
}