import Section from '../../Section/Section';
import Cards from './Cards';
import Card from './Card';

const CardsWrapper = () => {
	const info = [
		{
			title: 'Instant Video Consultation',
			desc: 'Connect within 60 secs',
			img:
				'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png',
			bg: '#afcfed'
		},
		{
			title: 'Find Experts Near You',
			desc: 'Confirmed Appointments',
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png',
			bg: '#98cbd6'
		},
		{
			title: 'Government Schemes',
			desc: 'Schemes related to Agriculture',
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png',
			bg: '#ccd0db'
		},
		{
			title: 'Crop Tests',
			desc: 'Sample pickup at your home',
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png',
			bg: '#a2cae7'
		},
		{
			title: 'Agro Updates',
			desc: 'Daily Updates',
			img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png',
			bg: '#d5d8fc'
		}
	];

	return (
		<Section className='mt-60'>
			<Cards id="cards_content" className='content'>
				{info.map(({ title, desc, img, bg }, indx) => (
					<Card bg={bg} key={title} className={`Card`}>
						<div className='img-wrapper'>
							<img className={`img-${indx}`} src={img} alt={title} /> 
						</div>
						<div className='info'>
							<h3>{title}</h3>
							<p>{desc}</p>
						</div>
					</Card>
				))}
			</Cards>
		</Section>
	);
};

export default CardsWrapper;
