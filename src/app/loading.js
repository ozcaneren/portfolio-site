import { Loader } from "@/components/Loader";

export default function Loading() {
	return (
		<div className="w-full max-w-5xl mx-auto flex items-center justify-center">
			<Loader textClassNames="text-2xl text-center" />
		</div>
	);
}