import styles from './Appointment.module.css';
import SliderWrapper from '../../SliderWrapper/SliderWrapper';
import Category from '../../Videoconsult/Category';
import img1 from "./agronomy.jpeg"
import img2 from "./livestock.jpeg"
import img3 from "./nutrition.jpeg"
import img4 from "./conservation.jpeg"
import img5 from "./waste management.jpeg"
import img6 from "./technology.jpeg"

const AppointmentCard = ({ img, title, desc }) => <div className={styles.appointment_card}>
	<div className={styles.appointment_card_img}>
		<img src={img} alt={title} />
	</div>
	<h3 className={styles.appointment_card_title}>{title}</h3>
	<p className={styles.appointment_card_desc}>{desc}</p>
</div>;

const Appointment = () => {
	const appointments = [
		{
			img: img1,
			title: 'Agronomy',
			desc: 'Want to  increase farm produce?'
		},
		{
			img: img2,
			title: 'Livestock',
			desc: 'Want to plan crop production throughout year?'
		},
		{
			img: img3,
			title:'Nutrition',
			desc: 'Want to increase the nutrition value of crop?'
		},
		{
			img: img4,
			title: 'Environment Conservation',
			desc: 'Want to get right tips for conservation'
		},
		{
			img: img5,
			title: 'Waste Management',
			desc: 'Need to get policy maked? Find the right expert'
		},
		{
			img: img6,
			title: 'Technical applications',
			desc: 'Want to get services realted to environment sciences and technology?'
		},
		
		
	];

	const arr = appointments.map((el) => <AppointmentCard {...el} />);

	return (
		<Category
			heading='Types of agricultural consultant'

			description='As an agricultural consultant, youll usually consult on either technical or business matters.
			Technical consultants provide specialist advice on:'
		>
			<SliderWrapper arr={arr} limit={4.60} />
		</Category>
	);
};

export default Appointment;