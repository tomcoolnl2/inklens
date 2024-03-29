import { Categories } from '../components/Categories';
import { Message } from '../components/Message';
import { Products } from '../components/Products';
import { Tags } from '../components/Tags';
import styles from './page.module.css';
import { Theme } from '@inklens/ui';

export default async function Index() {
	//
	return (
		<Theme>
			<div className={styles.page}>
				<div className="wrapper">
					<div className="container">
						<div id="welcome">
							<h1>
								<span> Hello there, </span>
								Welcome inklens-app-web 👋
							</h1>
							<br />
							<br />
							<Message />
							<br />
							<br />
							<Tags />
							<br />
							<br />
							<Categories />
							<br />
							<br />
							<Products />
						</div>
					</div>
				</div>
			</div>
		</Theme>
	);
}
