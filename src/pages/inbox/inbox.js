import Icon from "components/Icon";
import Button from "components/Button";

export default function Inbox() {
	return (
		<div className="w-full h-full flex items-center gap-y-1 justify-center flex-col">
			<Icon name="direct-empty" size={96} />
			<h2 className="text-[22px] font-light">Your Messages</h2>
			<p className="text-sm text-[#8e8e8e]">
				Send private photos and messages to a friend or group.
			</p>
			<div className="mt-3">
				<Button>Send Message</Button>
			</div>
		</div>
	)
}
