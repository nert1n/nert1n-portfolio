import { Suspense } from "react";

import MainLayout from "@app/layout/main-layout/main-layout.tsx";
import Providers from "@app/providers";
import { ReloadPrompt } from "@entities/reloadPrompt";
import { Loader } from "@shared/ui/loader";
import NoiseBackground from "@shared/ui/noise-background/noise-background.tsx";

const Layout = () => {
	return (
		<Providers>
			<main>
				<ReloadPrompt />
				<Suspense fallback={<Loader />}>
					<MainLayout />
					<NoiseBackground />
				</Suspense>
			</main>
		</Providers>
	);
};

export default Layout;
