import React from 'react';
import Section from '../Section/Section';
import Footer from './Footer';

const Footerwrapper = () => {
	return (
		<Section
			id="footer_section"
			style={{
				// minWidth: '1200px',
				backgroundColor: '#472C1B',
				padding: ' 48px 0',
				color: '#fff',
				fontSize: '14px'
			}}
		>
			<div
				id="footer_top"
				style={{
					// width: '1180px',
					maxWidth: "100rem",
					margin: 'auto'
				}}
			>
				<Footer>
					<div className='footerdata'>
						<h3>Krishi Konnect</h3>

						<p>About</p>
						<p>Blog</p>
						<p>Careers</p>
						<p>News</p>
						<p>Contact Us</p>
					</div>
					<div className='footerdata'>
						<h3>For Farmers</h3>

						<p>Search for Experts</p>
						<p>Search for Lab</p>
						<p>Book Crop Checks</p>
						<p>Book Full Farm Checkup</p>
						<p>Krishi Konnect plus</p>
					</div>
					<div className='footerdata'>
						<h3>For Experts</h3>

						<p>Expert Details</p>
						<p>Krishi Konnect Reach</p>
						<p>Krishi Konnect Pro</p>
					</div>
					<div className='footerdata'>
						<h3>Crop Lab</h3>

						<p>Lab Location</p>
						<p>Krishi Konnect Profile</p>
						<p>Krishi Konnect Reach</p>
					</div>
					<div className='footerdata'>
						<h3>More</h3>

						<p>Help</p>
						<p>Developers</p>
						<p>Privacy Policy</p>
						<p>Terms and Conditions</p>
						<p>Database directory</p>
					</div>
					<div className='footerdata'>
						<h3>Social</h3>

						<p>Facebook</p>
						<p>Twitter</p>
						<p>Linkedin</p>
						<p>Youtube</p>
						<p>Github</p>
					</div>
				</Footer>
			</div>
			<div id="footer_img_div" style={{ textAlign: 'center' }}>
				<span>
					<img
						src={require('./logs11.png')}
						alt='practo_logo'
						style={{ margin: '50px 50px', border: '0px', maxWidth: '210px', maxHeight: '210px' }}
					/>
				</span>
				<div style={{ color: '#b8bbd9', fontWeight: 700 }}>
					<span>Copyright © 2022, Krishi Konnect. </span>
					<span>All rights reserved.</span>
				</div>
			</div>
		</Section>
	);
};

export default Footerwrapper;