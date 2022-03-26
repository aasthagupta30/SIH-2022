import Section from '../../Section/Section';
import Cards from './Cards';
import Card from './Card';
import imageInfo from "./image.jsx";


const CardsWrapper = () => {
	return (
		<Section className='mt-60'>
			<Cards id="cards_content" className='content'>
				{imageInfo.map(({ title, desc, img, bg,href }, indx) => (
					<Card bg={bg} key={title} className={`Card`}>
						<div className='img-wrapper'>
							<a href={href}>
							<img className={`img-${indx}`} src={img} alt={title} /> </a>
							
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