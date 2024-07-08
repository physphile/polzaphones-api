import {
	Vendor,
	CameraMark,
	DisplayAspectRatio,
	DisplayType,
	FingerprintPosition,
	FingerprintType,
	Material,
	UsbType,
	RamType,
	Resistance,
	RomType,
	SimSize,
	Sound,
	UsbVersion,
	WiFi,
	VideoResolution,
	CameraPosition,
	Stabilization,
	CameraType,
} from "@prisma/client";
import { t } from "elysia";
import { HEX_PATTERN, URL_PATTERN, DATE_PATTERN } from "../../constants";
import type { ToSchema } from "../../types";

export const smartphoneSchema = t.Object({
	vendor: t.Enum(Vendor),
	name: t.String(),
	series: t.String(),
	version: t.String(),
	ltpo: t.Boolean(),
	android: t.Integer(),
	antutu: t.Integer(),
	aod: t.Boolean(),
	batteryCapacity: t.Integer(),
	bluetooth: t.Number(),
	brightnessMax: t.Integer(),
	callRecording: t.Boolean(),
	cameraMark: t.Enum(CameraMark),
	codecAac: t.Boolean(),
	codecAptx: t.Boolean(),
	codecAptxAdaptive: t.Boolean(),
	codecAptxHd: t.Boolean(),
	codecLc3: t.Boolean(),
	codecLdac: t.Boolean(),
	codecLhdc: t.Boolean(),
	codecSbc: t.Boolean(),
	colorName: t.String(),
	colorHex: t.String({ pattern: HEX_PATTERN }),
	devdb: t.String({ pattern: URL_PATTERN }),
	displayAspectRatio: t.Enum(DisplayAspectRatio),
	displayBodyRatio: t.Number(),
	displayCurved: t.Boolean(),
	displayDciP3: t.Integer(),
	displayDiagonal: t.Number(),
	displayMaxFps: t.Integer(),
	displayMinFps: t.Integer(),
	displayResolutionX: t.Integer(),
	displayResolutionY: t.Integer(),
	displaySrgb: t.Number(),
	displayType: t.Enum(DisplayType),
	esim: t.Boolean(),
	facaUnlock: t.Boolean(),
	faceUnlockMaxNumber: t.Integer(),
	fingerprintMaxNumber: t.Integer(),
	fingerprintPosition: t.Enum(FingerprintPosition),
	fingerprintRepeat: t.Boolean(),
	fingerprintType: t.Enum(FingerprintType),
	firmware: t.String(),
	fourpda: t.String({ pattern: URL_PATTERN }),
	frameMaterial: t.Enum(Material),
	geekbenchGpu: t.Integer(),
	geekbenchMulti: t.Integer(),
	geekbenchSingle: t.Integer(),
	googleServices: t.Boolean(),
	hapticEngine: t.Boolean(),
	harmony: t.Number(),
	hdr10Plus: t.Boolean(),
	height: t.Integer(),
	ios: t.Number(),
	ir: t.Boolean(),
	jack: t.Boolean(),
	kimovil: t.String({ pattern: URL_PATTERN }),
	multitouch: t.Integer(),
	nfc: t.Boolean(),
	packAdapterPower: t.Integer(),
	packAdapterUsb: t.Enum(UsbType),
	packCase: t.Boolean(),
	packFilm: t.Boolean(),
	pcmark: t.Integer(),
	polza: t.String({ pattern: URL_PATTERN }),
	ppi: t.Integer(),
	preinstalledAppsRemovable: t.Boolean(),
	proximity: t.Boolean(),
	pwmFrequency: t.Integer(),
	pwmMaxRatio: t.Integer(),
	ramSize: t.Integer(),
	ramType: t.Enum(RamType),
	rearMaterial: t.Enum(Material),
	resistance: t.Enum(Resistance),
	chargePower: t.Integer(),
	reverseChargePower: t.Integer(),
	romSize: t.Integer(),
	romType: t.Enum(RomType),
	russian: t.Boolean(),
	simNumber: t.Integer(),
	simSize: t.Enum(SimSize),
	sound: t.Enum(Sound),
	thickness: t.Number(),
	throttlingAvg: t.Integer(),
	throttlingMax: t.Integer(),
	throttlingMin: t.Integer(),
	usbType: t.Enum(UsbType),
	usbVersion: t.Enum(UsbVersion),
	volumeOnTheLeft: t.Boolean(),
	website: t.String({ pattern: URL_PATTERN }),
	weight: t.Integer(),
	width: t.Integer(),
	wifi: t.Enum(WiFi),
	wirelessChargePower: t.Integer(),
	workbench: t.Integer(),
	releaseDate: t.String({ pattern: DATE_PATTERN }),
	cameras: t.Array(
		t.Object({
			id: t.Integer(),
			autofocus: t.Boolean(),
			focal: t.Integer(),
			fov: t.Integer(),
			laf: t.Boolean(),
			maxAperture: t.Number(),
			maxVideoFramerate: t.Integer(),
			maxVideoResolution: t.Enum(VideoResolution),
			minAperture: t.Integer(),
			minFocusDistance: t.Integer(),
			position: t.Enum(CameraPosition),
			stabilization: t.Enum(Stabilization),
			type: t.Enum(CameraType),
		})
	),
	soc: t.Integer(),
	features: t.Array(t.String()),
	stores: t.Array(
		t.Object({
			name: t.String(),
			link: t.String({ pattern: URL_PATTERN }),
		})
	),
});
