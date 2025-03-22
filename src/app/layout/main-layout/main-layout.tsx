import { Outlet } from "react-router-dom";

import { Footer } from "@widgets/footer/footer.tsx";
import { Header } from "@widgets/header/header.tsx";

import styles from "./main-layout.module.scss";

const MainLayout = () => {
	return (
		<div className={styles.main}>
			<Header />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
