import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loader() {
	return (
		<div className="flex flex-col items-center justify-center mx-auto">
			<div className="animate-spin mr-2">
				<AiOutlineLoading3Quarters size={24} />
			</div>
			<p className="text-center">Loading...</p>
		</div>
	);
}