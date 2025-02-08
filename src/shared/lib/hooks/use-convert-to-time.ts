const useConvertToTime = (milliseconds: number) => {
	const minutes = Math.floor(milliseconds / 60000);
	const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
	const time = minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds;
	return { time };
};

export default useConvertToTime;
