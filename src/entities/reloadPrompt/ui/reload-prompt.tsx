// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from "virtual:pwa-register/react";

import styles from "./reload-prompt.module.scss";

export const ReloadPrompt = () => {
	const {
		needRefresh: [needRefresh, setNeedRefresh],
		offlineReady: [offlineReady, setOfflineReady],
		updateServiceWorker,
	} = useRegisterSW({
		onRegisteredSW(r) {
			console.log("SW Registered: " + r);
		},
		onRegisterError(error) {
			console.log("SW registration error", error);
		},
	});

	const close = () => {
		setOfflineReady(false);
		setNeedRefresh(false);
	};

	return (
		<div className={styles["reload-prompt__container"]}>
			{(offlineReady || needRefresh) && (
				<div className={styles["reload-prompt__toast"]}>
					<div className={styles["reload-prompt__toast-message"]}>
						{offlineReady ? (
							<span>App ready to work offline</span>
						) : (
							<span>
								New content available, click on reload button to update.
							</span>
						)}
					</div>
					{needRefresh && (
						<button
							className={styles["reload-prompt__toast-button"]}
							onClick={() => updateServiceWorker(true)}>
							Reload
						</button>
					)}
					<button
						className={styles["reload-prompt__toast-button"]}
						onClick={() => close()}>
						Close
					</button>
				</div>
			)}
		</div>
	);
};
