import {
	Header,
	Hero,
	Stats,
	Partners,
	Collabs,
	Testimonials,
	Footer,
} from "../containers";

export default function Home() {
	return (
		<div className="bg-background text-text">
			<Header></Header>
			<Hero></Hero>
			<Stats></Stats>
			<Partners></Partners>
			<Collabs></Collabs>
			<Testimonials></Testimonials>
			<Footer></Footer>
		</div>
	);
}
