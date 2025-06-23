'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

const COOKIE_STORAGE_KEY = "cookie-consent";

const CookieConsentBar = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [consent, setConsent] = useState({
		enessential: true,
		analytics: false,
		marketing: false,
	});

	useEffect(() => {
		const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
		if (!stored) {
			setIsVisible(true);
		} else {
			try {
				const parsed = JSON.parse(stored);
				applyCookiePreferences(parsed);
			} catch (e) {
				console.error("Invalid cookie settings");
			}
		}
	}, []);

	const applyCookiePreferences = (prefs) => {
		// Here you would enable/disable third-party tools
		// For example:
		// if (prefs.analytics) enableGoogleAnalytics(); else disableGoogleAnalytics();
		// if (prefs.marketing) enableFacebookPixel();
		console.log("Applying preferences:", prefs);
	};

	const handleAcceptAll = () => {
		const all = { essential: true, analytics: true, marketing: true };
		localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(all));
		applyCookiePreferences(all);
		setIsVisible(false);
	};

	const handleRejectAll = () => {
		const onlyEssential = { essential: true, analytics: false, marketing: false };
		localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(onlyEssential));
		applyCookiePreferences(onlyEssential);
		setIsVisible(false);
	};

	const handleSavePreferences = () => {
		localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(consent));
		applyCookiePreferences(consent);
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md p-4 z-50">
			<div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div className="text-sm text-gray-700">
					<p className="font-semibold">Používáme cookies</p>
					<p>
						Tento web používá cookies k zajištění správného fungování,
						personalizaci obsahu a analýze návštěvnosti.
					</p>
					<Link href="/zasady-ochrany-osobnich-udaju" className="underline text-cyan-700 text-sm">
						Zásady ochrany soukromí
					</Link>
				</div>
				<div className="flex flex-col sm:flex-row gap-2">
					<button
						onClick={handleAcceptAll}
						className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
					>
						Přijmout vše
					</button>
					<button
						onClick={handleRejectAll}
						className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
					>
						Odmítnout
					</button>
				</div>
			</div>
			<div className="mt-4 max-w-4xl mx-auto">
				<p className="text-sm font-semibold text-gray-700 mb-2">Nastavení souhlasu:</p>
				<div className="flex gap-4">
					<label className="text-sm">
						<input
							type="checkbox"
							checked
							disabled
							className="mr-2"
						/>
						Nezbytné
					</label>
					<label className="text-sm">
						<input
							type="checkbox"
							checked={consent.analytics}
							onChange={(e) =>
								setConsent((prev) => ({ ...prev, analytics: e.target.checked }))
							}
							className="mr-2"
						/>
						Analytické
					</label>
					<label className="text-sm">
						<input
							type="checkbox"
							checked={consent.marketing}
							onChange={(e) =>
								setConsent((prev) => ({ ...prev, marketing: e.target.checked }))
							}
							className="mr-2"
						/>
						Marketingové
					</label>
					<button
						onClick={handleSavePreferences}
						className="ml-auto px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 text-sm"
					>
						Uložit nastavení
					</button>
				</div>
			</div>
		</div>
	);
};

export default CookieConsentBar;
