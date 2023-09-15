export default function About() {
	return (
		<>
			<div id="about" className="lg:grid-cols-2 sm:grid-cols-1 grid py-14">
				<div>
					<h2 className="flex font-bold text-lg justify-center text-slate-800 mb-3">Sobre mi 😁</h2>
					<p className="px-20 sm:px-3 font-semibold text-gray-700">
						Soy un desarrollador FullStack apasionado por crear soluciones web de calidad. Con experiencia en proyectos diversos, me especializo en tecnologías front-end, así como en back-end. Mi enfoque es convertir requisitos comerciales en soluciones técnicas sólidas. Siempre busco desafíos emocionantes y oportunidades para seguir aprendiendo y creciendo en este campo dinámico. En un futuro no muy lejano quiero especializarme en la parte back-end.
					</p>
				</div>
				<div>
					<h2 className="flex font-bold text-lg justify-center text-slate-800 mb-3">Mis habilidades 🎯</h2>
					<div className="flex flex-row">
						<div className="flex flex-col w-1/3 items-center">
							<div className="ms-5">
								<h3 className="text-slate-800 font-bold mb-3">Frontend</h3>
								<ul className="italic font-semibold text-gray-700 list-disc">
									<li>HTML</li>
									<li>CSS</li>
									<li>JavaScript</li>
									<li>TypeScript</li>
									<li>Bootstrap</li>
									<li>Tailwind</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-col w-1/3 items-center">
							<div className="">
								<h3 className="text-slate-800 font-bold mb-3">Backend</h3>
								<ul className="italic font-semibold text-gray-700 list-disc">
									<li>NodeJS</li>
									<li>Express</li>
									<li>MongoDB</li>
									<li>SQL</li>
									<li>Go</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-col w-1/3 items-center">
							<div >
								<h3 className="text-slate-800 font-bold mb-3">Herramientas</h3>
								<ul className="italic font-semibold text-gray-700 list-disc">
									<li>Slack</li>
									<li>Git, GitHub</li>
									<li>GitLab</li>
									<li>Discord</li>
									<li>Trello</li>
									<li>Jira</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="my-5"></hr>
		</>
	)
}