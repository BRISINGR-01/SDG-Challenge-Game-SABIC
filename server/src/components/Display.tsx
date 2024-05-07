import { Divider } from "@nextui-org/react";
import type { Tables } from "../utils/supabase/types";

export default function Display(props: { user: Tables<"user"> }) {
	return (
		<div
			style={{
				display: "flex",
				backgroundColor: "#EBF8FE",
				justifyContent: "space-around",
				alignItems: "center",
				padding: "4em",
				gap: "1em",
				width: "max-content",
			}}
		>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<span style={{ fontSize: "3em" }}>Hi, {props.user.name}</span>
				{[
					["+1", "Good job! another plastic recycled by you!"],
					["↑7", "places up! Your ranking has advanced!"],
					["Σ13", "pieces of plastic have been recycled so far!"],
					["G390", "CO2 emissions are reduced!"],
					["%12", "of the team's scores has been contributed!"],
				].map(([t1, t2]) => (
					<>
						<div style={{ display: "flex", gap: "1em" }}>
							<span style={{ fontWeight: 1000, color: "#009FE3", fontSize: "2.5em", width: "3em", textAlign: "right" }}>
								{t1}
							</span>
							<span style={{ fontSize: "1.5em", textAlign: "left", alignContent: "center", width: "20em" }}>{t2}</span>
						</div>
						<Divider />
					</>
				))}
			</div>
			<img src="/Group 32.png" alt="" style={{ height: "25em" }} />
			{/* <div style={{ display: "flex", flexDirection: "column" }}>
				<Chip style={{ backgroundColor: "#009FE3" }}>
					<span style={{ color: "white", fontWeight: 1000, textTransform: "uppercase" }}>Company Progress</span>
				</Chip>
				<div style={{ backgroundColor: "white", borderRadius: "10px" }}>
					{[["GHG emissions", ""]].map(([text, img]) => (
						<div>
							<span>{text}</span>
						</div>
					))}
				</div>
			</div>
			<div style={{ display: "flex" }}>
				<Chip style={{ backgroundColor: "#009FE3" }}>
					<span style={{ color: "white", fontWeight: 1000, textTransform: "uppercase" }}>Team Rank</span>
					<div style={{ backgroundColor: "white", borderRadius: "10px" }}></div>
				</Chip>
			</div> */}
		</div>
	);
}
