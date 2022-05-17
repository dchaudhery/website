import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import { SocialIcons } from 'Molecules/SocialIcons';
import Typed from 'react-typed';

const IndexPage = () => {
	const talkAbout = [
		'Flutter',
		'C++',
		'React',
		'JavaScript',
		'TypeScript',
		'Python',
		'GraphQL',
		'Redux',
		'Next.js',
		'RESTful APIs',
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Dea Chaudhery"
				description=""
				keywords={[
					'Software Engineer',
					'Dea Chaudhery',
					'Software Consulting',
					'Front-End',
					'Full-Stack',
					'React',
					'TypeScript',
					'JavaScript',
					'GraphQL',
				]}
			/>
			<Container>
				<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
					Hi there, I&apos;m Dea Chaudhery 👋
				</h1>
				<p className="my-8 text-lg">
					I am a third year Computer Science student at the Univeristy of Waterloo
					and a passionate Software Developer, hoping to make the world a better place with my work. My other hobbies include hiking,
					playing basketball, and reading! I&apos;m currently also learning to play the guitar. You can talk to me about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>.
				</p>
				<SocialIcons
				profiles={[
					{
						name: 'Github',
						url: 'https://www.github.com/dchaudhery',
						icon: 'GITHUB',
					},
					{
						name: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dchaudhery',
						icon: 'LINKEDIN',
					},
					{
						name: 'Email',
						url: 'mailto: dchaudhe@uwaterloo.ca',
						icon: 'EMAIL',
					},
					{
						name: 'Resume',
						url: 'https://drive.google.com/file/d/1AULzXN8PdpccaJWqL6zKm9nUaT3mQQsT/view?usp=sharing',
						icon: 'DOC',
					},
				]}
			/>
			</Container>
		</AnimatePage>
	);
};

export default IndexPage;
