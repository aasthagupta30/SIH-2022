import React from 'react';
import Download from './Download';
import Section from '../../Section/Section';

const DownloadWrapper = () => {
	return (
		<Section className='mt-60 DownloadWrapper'>
			<Download className='download content'>
				<div id="download_left" className='left'>
					<img
						src={require('./video consultance.jpeg')}
						alt='download practo app'
					/>
				</div>
				<div id="download_right" className='right'> 
					<h3>Download the Krishi Konnect app </h3>
					<p className='app_info'>
						Access video consultation with India’s top agricultural experts on the Krishi Konnect app. Connect with experts
						online, available 24/7, from the comfort of your home.
					</p>
					<p className='get_link'>Get the link to download the app</p>
					<div className="app_link_form">
						<div className="app_link_input">
							<span className="country_code">+91</span>
							<input type="number" name="number" placeholder="Enter your number"/>
						</div>
						<button>Send SMS</button>
					</div>
					<div className='downloads'>
						<img
							className='play_store_button'
							src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png'
							alt='google play store'
						/>
						<img
							className='app_store_button'
							src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png'
							alt='apple store'
						/>
					</div>
				</div>
			</Download>
		</Section>
	);
};

export default DownloadWrapper;
