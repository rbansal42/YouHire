const Footer = () => {
	return (
		<footer className="p-4 bg-background md:p-8 lg:p-10 dark:bg-background">
			<div className="mx-auto max-w-screen-xl text-center">
				<a
					href="#"
					className="flex justify-center items-center text-2xl font-semibold text-text dark:text-white">
					<img src="src/assets/images/logo.png" alt="" className="h-12 w56"/>
				</a>
				<p className="my-6 text-text dark:text-gray-400">
					Get hired... Fast!
				</p>
				<ul className="flex flex-wrap justify-center items-center mb-6 text-text dark:text-white">
					<li>
						<a
							href="#"
							className="mr-4 hover:underline md:mr-6 ">
							About
						</a>
					</li>
					<li>
						<a
							href="#"
							className="mr-4 hover:underline md:mr-6">
							Premium
						</a>
					</li>
					<li>
						<a
							href="#"
							className="mr-4 hover:underline md:mr-6 ">
							Campaigns
						</a>
					</li>
					<li>
						<a
							href="#"
							className="mr-4 hover:underline md:mr-6">
							Blog
						</a>
					</li>
					<li>
						<a
							href="#"
							className="mr-4 hover:underline md:mr-6">
							Affiliate Program
						</a>
					</li>
					<li>
						<a
							href="#"
							className="mr-4 hover:underline md:mr-6">
							FAQs
						</a>
					</li>
					<li>
						<a
							href="#"
							className="mr-4 hover:underline md:mr-6">
							Contact
						</a>
					</li>
				</ul>
				<span className="text-sm text-text sm:text-center dark:text-gray-400">
					© 2023{" "}
					<a
						href="#"
						className="hover:underline">
						YouHire
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
