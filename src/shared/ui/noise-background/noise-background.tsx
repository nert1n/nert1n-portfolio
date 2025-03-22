import { useEffect, useRef } from "react";

const NoiseBackground = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const width = window.innerWidth;
		const height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;

		const imageData = ctx.createImageData(width, height);
		const data = imageData.data;

		for (let i = 0; i < data.length; i += 4) {
			const getRandomByte = () => {
				const array = new Uint8Array(1);
				window.crypto.getRandomValues(array);
				return array[0];
			};

			const value = getRandomByte();

			data[i] = data[i + 1] = data[i + 2] = value;
			data[i + 3] = 15;
		}

		ctx.putImageData(imageData, 0, 0);
		document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;
	}, []);

	return <canvas ref={canvasRef} style={{ display: "none" }} />;
};

export default NoiseBackground;
