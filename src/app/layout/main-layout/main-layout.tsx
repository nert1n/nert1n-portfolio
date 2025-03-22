import { Outlet } from "react-router-dom";

import styles from "./main-layout.module.scss";

const MainLayout = () => {
	return (
		<div className={styles.main}>
			<Outlet />
		</div>
	);
};

export default MainLayout;
