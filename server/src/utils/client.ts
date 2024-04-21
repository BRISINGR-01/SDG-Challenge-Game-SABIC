import { useEffect } from "react";
import io from "socket.io-client";

export interface User {
	gender: string;
	name: {
		title: string;
		first: string;
		last: string;
	};
	location: {
		street: {
			number: number;
			name: string;
		};
		city: string;
		state: string;
		country: string;
		postcode: number;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		timezone: {
			offset: string;
			description: string;
		};
	};
	email: string;
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
		sha1: string;
		sha256: string;
	};
	dob: {
		date: string;
		age: number;
	};
	registered: {
		date: string;
		age: number;
	};
	phone: string;
	cell: string;
	id: {
		name: string;
		value: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	nat: string;
}

export function getBadge(user: User) {
	return user.dob.age > 66
		? ["Sustainability Champion", "1.jpeg"]
		: user.dob.age > 60
		? ["Recycling Guru", "2.webp"]
		: user.dob.age > 45
		? ["Green Innovator", "3.jpeg"]
		: ["Environmental Steward", "4.png"];
}

export const EVENTS = {
	SCAN: "scan",
};

export function useSocket(cb: (data: {}) => void) {
	useEffect(() => {
		const socket = io();

		socket.on("connect", () => {
			console.log("connected");
		});

		console.log(socket);
		socket.onAny(console.log);

		socket.on(EVENTS.SCAN, (message) => {
			cb({ message });
		});

		return () => {
			socket.disconnect();
		};
	}, []);
}

export function useWS() {
	useEffect(() => {
		const socket = new WebSocket("ws://" + window.location.host + "/api/websocket");
		console.log(socket);

		socket.addEventListener("open", (event) => {
			console.log("WebSocket connection opened");
		});

		socket.addEventListener("message", (event) => {
			const message = event.data;
			console.log(message);

			// Handle incoming messages from the server
		});

		socket.addEventListener("close", (event) => {
			if (event.wasClean) {
				console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
			} else {
				console.error("WebSocket connection abruptly closed");
			}
		});

		socket.addEventListener("error", (error) => {
			console.error("WebSocket error:", error);
		});
	}, []);
}