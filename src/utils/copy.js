import { toast } from "sonner";

/**
 * Copies a given text to the clipboard with fallback support for mobile.
 * @param {string} text - The text you want to copy.
 * @param {string} [successMessage="Copied to clipboard"] - Optional success message.
 */
export const copyToClipboard = async (
	text,
	successMessage = "Copied to clipboard"
) => {
	try {
		if (navigator.clipboard && window.isSecureContext) {
			await navigator.clipboard.writeText(text);
		} else {
			// Fallback for insecure or older environments
			const textarea = document.createElement("textarea");
			textarea.value = text;
			textarea.setAttribute("readonly", "");
			textarea.style.position = "absolute";
			textarea.style.left = "-9999px";
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
		}
		toast.success(successMessage);
	} catch (error) {
		console.error("Copy failed:", error);
		toast.error("Failed to copy. Try manually.");
	}
};
