import React from 'react';
import Section from '../../Section/Section';
import Wrapper from './doc';

const Consultdoctor = () => {
	return (
		<Section style={{ marginTop: '60px' }}>
			<Wrapper>
				<div className='content'>
					<div className='head'>
						<h1>
							Various types of Farming
						</h1>
						<div style={{ marginTop: '5px', fontSize: '14px' }}>
						Procedure, Benefits and Role
						</div>
						<button className='btn'>View All Types</button>
						<div id="consult_doc" style={{ marginTop: '20px' }}>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src={require('./subsistence.jpeg')}
												alt='subsistence'
											/>
										</span>
									</div>
									<div className='speciality'>Subsistence farming</div>
									<div className='consult_now'> View More</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src={require('./extensive.jpeg')}
												alt='acne'
											/>
										</span>
									</div>
									<div className='speciality'>Extensive and Intensive Farming</div>
									<div className='consult_now'> View More</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src={require('./poultry.jpeg')}
												alt='vv'
											/>
										</span>
									</div>
									<div className='speciality'>Poultry Farming</div>
									<div className='consult_now'> View More</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src={require('./sedentry.jpeg')}
												alt='cold'
											/>
										</span>
									</div>
									<div className='speciality'>Sedentary Farming</div>
									<div className='consult_now'> View More</div>
								</div>
							</div>
							
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src={require('./dryandwetland.jpeg')}
												alt='mental illnes'
											/>
										</span>
									</div>
									<div className='speciality'>Dry and Wetland Farming</div>
									<div className='consult_now'> View More</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</Wrapper>
		</Section>
	);
};
export default Consultdoctor;
