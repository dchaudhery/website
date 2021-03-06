import Close from 'public/assets/close.svg';
import Doc from 'public/assets/doc.svg';
import Download from 'public/assets/download.svg';
import Email from 'public/assets/email.svg';
import Github from 'public/assets/github.svg';
import Instagram from 'public/assets/instagram.svg';
import Linkedin from 'public/assets/linkedin.svg';
import Menu from 'public/assets/menu.svg';
import Twitter from 'public/assets/twitter.svg';

export interface IconProps {
	icon:
		| 'CLOSE'
		| 'DOWNLOAD'
		| 'GITHUB'
		| 'INSTAGRAM'
		| 'LINKEDIN'
		| 'MENU'
		| 'TWITTER'
		| 'DOC'
		| 'EMAIL';
}

const Icon = ({ icon }: IconProps) => {
	let Icon = () => <svg />;

	switch (icon) {
		case 'CLOSE':
			Icon = Close;
			break;
		case 'DOWNLOAD':
			Icon = Download;
			break;
		case 'GITHUB':
			Icon = Github;
			break;
		case 'INSTAGRAM':
			Icon = Instagram;
			break;
		case 'LINKEDIN':
			Icon = Linkedin;
			break;
		case 'MENU':
			Icon = Menu;
			break;
		case 'TWITTER':
			Icon = Twitter;
			break;
		case 'EMAIL':
			Icon = Email;
			break;
		case 'DOC':
			Icon = Doc;
			break;
		default:
			break;
	}

	return (
		<>
			<Icon />
		</>
	);
};

export { Icon };
