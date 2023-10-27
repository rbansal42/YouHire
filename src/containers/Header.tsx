import {Link} from "react-router-dom";
import { logo } from "../assets/images";

const Header = () => {
	return (
		<>
			<div className="flex flex-row justify-between py-3 border-b-[0.5px] border-secondary px-8 max-sm:items-center max-sm:justify-center transition-all">
				<Link to={"/"}>
					<div>
						<img
							src={logo}
							alt="YouHire Logo"
							width={90}
							// height={10}
						/>
					</div>
				</Link>
				<div className="max-sm:hidden">
					<span>
						Placements made
						easy!
					</span>
				</div>
				<div className="max-sm:hidden">
					<span>Time</span>
				</div>
			</div>
		</>
	);
};

export default Header;
