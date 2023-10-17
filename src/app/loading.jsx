import { Loader } from "@/components/Loader";

export default function Loading() {
	return (
		<div className="flex-center">
			<Loader textClassNames="text-2xl text-center" />
		</div>
	);
}