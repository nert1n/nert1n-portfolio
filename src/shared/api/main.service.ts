import axios from "axios";

export default class MainService {
	static async getMain() {
		const res = await axios.get("/main", {
			withCredentials: true,
		});
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postMain(main: string) {
		const res = await axios.post(
			"/main",
			{ main },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
}
