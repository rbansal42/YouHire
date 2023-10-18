const Header = () => {
	return (
		<>
			<div className="flex flex-row justify-between py-3 border-b-[0.5px] border-secondary px-8">
				<div>
					<img
						src="/public/assets/images/logo.png"
						alt="YouHire Logo"
						width={90}
						// height={10}
					/>
				</div>
				<div>
					<span>Get Hired!</span>
				</div>
				<div>
					<span>Time</span>
				</div>
			</div>
		</>
	);
};

export default Header;
