import { Loader } from "@/components/Loader";

export default function Loading() {
	return (
		<div className="w-full max-w-5xl h-screen mx-auto flex items-center justify-center">
			<Loader textClassNames="" />
		</div>
	);
}