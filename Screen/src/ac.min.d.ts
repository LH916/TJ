// Type definitions for ./ac.min.js

import {
	$a,
	ab,
	bb,
	cb,
	db,
	eb,
	fb,
	gb,
	hb,
	ib,
	jb,
	kb,
	lb,
	mb,
	nb,
	ob,
	pb,
	Qa,
	qb,
	Ra,
	rb,
	Sa,
	sb,
	Ta,
	tb,
	Ua,
	ub,
	Va,
	vb,
	Wa,
	wb,
	Xa,
	xb,
	Ya,
	Za,
} from "@/apiClasses";

/**
 *
 */
declare namespace acapi {
	/**
	 *
	 */
	interface APIErrorCode {
		OK: 0;
		InvalidParameters: 1;
		InternalError: 2;
		ResourceNotFound?: 3;
		AcpProjWKTNotSet: 4;
		CoordinateConversionFailed?: 5;
		IDExists: 6;
		InvalidRequestType?: 7;
		InvalidRequestString?: 8;
		NoCommand?: 9;
		DataTypeNotSupport: 10;
		InvalidOperation: 11;
		ProjectNotOpened?: 12;
		CodeMax: 65535;
	}

	/**
	 *
	 */
	interface AirCityAPI {
		/**
		 *
		 * @param a
		 * @param b
		 * @param c
		 */
		new(a?: any, b?: any, c?: Array<number>);

		/**
		 *
		 * @param a
		 * @param b
		 */
		setHost(ip?: any, port: any): void;

		/**
		 *
		 */
		reconnect(): void;

		/**
		 *
		 * @return
		 */
		_getCBIndex(): number;

		/**
		 *
		 * @param a
		 * @param b
		 * @return
		 */
		call0(a?: any, b?: W): (executor: () => void) => void;

		/**
		 *
		 */
		call0();

		/**
		 *
		 * @param a
		 * @param b
		 * @return
		 */
		call(a?: any, b?: boolean | W): (executor: () => void) => void;

		/**
		 *
		 */
		call();

		/**
		 *
		 * @param a
		 */
		onEvent(a?: any): void;

		/**
		 *
		 */
		onReady(): void;

		/**
		 *
		 * @param a
		 */
		setEventCallback(a?: any): void;

		/**
		 *
		 * @param a
		 * @param b
		 * @param c
		 */
		log(a?: string, b?: boolean, c?: any): void;

		/**
		 *
		 * @param a
		 * @param b
		 * @param c
		 */
		logWithColor(a?: string, b?: string, c?: boolean): void;

		/**
		 *
		 */
		onConnectionOpen(): void;

		/**
		 *
		 * @param a
		 */
		onConnectionClose(a?: any): void;

		/**
		 *
		 * @param a
		 */
		onConnectionMessage(a?: string): void;

		/**
		 *
		 * @param a
		 */
		onConnectionError(a?: any): void;

		/**
		 *
		 */
		initWebSocket(): void;

		/**
		 *
		 */
		initInterface(): void;

		/**
		 *
		 */
		destroy(): void;

		/**
		 *
		 * @param a
		 * @return
		 */
		reset(a?: any): (executor: () => void) => void;

		/**
		 *
		 */
		reset();

		/**
		 *
		 * @return
		 */
		quit(): (executor: () => void) => void;

		/**
		 *
		 */
		quit();

		/**
		 *
		 */
		callbackMap: Map;

		/**
		 *
		 */
		isFirstReady: boolean;

		/**
		 *
		 */
		callbackIndex: number;

		/**
		 *
		 */
		isConnected: boolean;

		/**
		 *
		 */
		fnLog: Array<number>;

		/**
		 *
		 */
		url: string;

		/**
		 *
		 */
		camera: pb;

		/**
		 *
		 */
		coord: qb;

		/**
		 *
		 */
		infoTree: sb;

		/**
		 *
		 */
		cameraTour: Ra;

		/**
		 *
		 */
		tileLayer: lb;

		/**
		 *
		 */
		tag: kb;

		/**
		 *
		 */
		marker: bb;

		/**
		 *
		 */
		marker3d: cb;

		/**
		 *
		 */
		customTag: Va;

		/**
		 *
		 */
		radiationPoint: ib;

		/**
		 *
		 */
		customMesh: Ta;

		/**
		 *
		 */
		waterMesh: ob;

		/**
		 *
		 */
		waterFlowField: nb;

		/**
		 *
		 */
		polyline: hb;

		/**
		 *
		 */
		odline: db;

		/**
		 *
		 */
		polygon3d: gb;

		/**
		 *
		 */
		polygon: fb;

		/**
		 *
		 */
		heatmap: Za;

		/**
		 *
		 */
		beam: Qa;

		/**
		 *
		 */
		highlightArea: $a;

		/**
		 *
		 */
		customObject: Ua;

		/**
		 *
		 */
		videoProjection: mb;

		/**
		 *
		 */
		panorama: eb;

		/**
		 *
		 */
		decal: Wa;

		/**
		 *
		 */
		dynamicWater: Xa;

		/**
		 *
		 */
		floodFill: Ya;

		/**
		 *
		 */
		cesium3DTileset: Sa;

		/**
		 *
		 */
		shapeFile: jb;

		/**
		 *
		 */
		misc: tb;

		/**
		 *
		 */
		tools: wb;

		/**
		 *
		 */
		settings: ub;

		/**
		 *
		 */
		weather: xb;

		/**
		 *
		 */
		light: ab;

		/**
		 *
		 */
		editHelper: rb;

		/**
		 *
		 */
		settingsPanel: vb;

		/**
		 *
		 */
		isDestroyed: boolean;
	}

	/**
	 *
	 */
	interface AirCityPlayer {
		/**
		 *
		 * @param a
		 * @param b
		 */
		new(a?: any, b?: /* acapi.AirCityPlayer.!1 */ any);

		/**
		 *
		 */
		construct(): void;

		/**
		 *
		 * @return
		 */
		getHost(): /* !this.host */ any;

		/**
		 *
		 * @return
		 */
		getAPI(): /* !this.aircityApi */ any;

		/**
		 *
		 * @return
		 */
		getInstanceInfo(): /* !this.paramInfo */ any;

		/**
		 *
		 * @return
		 */
		getVideoSize(): acapi.AirCityPlayer.prototype.GetVideoSizeRet;

		/**
		 *
		 * @param a
		 * @param b
		 */
		setResolution(a?: number | {}, b?: number): void;

		/**
		 *
		 * @param a
		 */
		setBitrate(a?: any): void;

		/**
		 *
		 * @param a
		 */
		destroy(a?: string): void;

		/**
		 *
		 * @param a
		 */
		setKeyEventReceiver(a?: any): void;

		/**
		 *
		 */
		resize(): void;

		/**
		 *
		 * @param a
		 * @return
		 */
		setInstanceOptions(
				a?: acapi.AirCityPlayer.prototype.SetInstanceOptions0
		): boolean;

		/**
		 *
		 */
		onApiReady(): void;

		/**
		 *
		 */
		onUserInteraction(): void;

		/**
		 *
		 */
		registerKeyboardEvents(): void;

		/**
		 *
		 */
		unregisterKeyboardEvents(): void;

		/**
		 *
		 */
		registerMouseEvents(): void;

		/**
		 *
		 */
		registerTouchEvents(): void;

		/**
		 *
		 * @param a
		 */
		receiveParamInfo(a?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_send(a?: ArrayBuffer): void;

		/**
		 *
		 * @param a
		 */
		rtc_lock_datachannel(a?: any): void;

		/**
		 *
		 */
		rtc_unlock_datachannel(): void;

		/**
		 *
		 */
		rtc_send_requestInitialSettings(): void;

		/**
		 *
		 */
		rtc_send_requestQualityControl(): void;

		/**
		 *
		 * @param a
		 */
		rtc_send_api(a?: acapi.AirCityPlayer.prototype.Rtc_send_api0): void;

		/**
		 *
		 * @param a
		 * @param b
		 */
		rtc_send_descriptor(a?: number, b?: string): void;

		/**
		 *
		 * @param a
		 */
		rtc_send_keydown(a?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_send_keyup(a?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_send_keypress(
				a?: acapi.AirCityPlayer.prototype.Rtc_send_keypress0
		): void;

		/**
		 *
		 */
		rtc_send_mouseenter(): void;

		/**
		 *
		 */
		rtc_send_mouseleave(): void;

		/**
		 *
		 * @param a
		 * @param b
		 * @param c
		 * @param e
		 */
		rtc_send_mousemove(
				a?: number | {},
				b?: number,
				c?: number | {},
				e?: DataView
		): void;

		/**
		 *
		 * @param a
		 * @param b
		 * @param c
		 */
		rtc_send_mousedown(a?: number, b?: number | {}, c?: DataView): void;

		/**
		 *
		 * @param a
		 * @param b
		 * @param c
		 */
		rtc_send_mouseup(a?: number, b?: number | {}, c?: DataView): void;

		/**
		 *
		 * @param a
		 * @param b
		 * @param c
		 */
		rtc_send_mousewheel(
				a?: number,
				b?: acapi.AirCityPlayer.prototype.Rtc_send_mousewheel1,
				c?: DataView
		): void;

		/**
		 *
		 * @param a
		 * @param b
		 */
		rtc_send_touch(a?: number, b?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_states(a?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_initVars(a?: any): void;

		/**
		 *
		 */
		rtc_close(): void;

		/**
		 *
		 */
		rtc_states_clearTimer(): void;

		/**
		 *
		 */
		rtc_onStateChanged(): void;

		/**
		 *
		 */
		rtc_setup(): void;

		/**
		 *
		 * @param a
		 */
		rtc_ice(a?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_config(a?: acapi.AirCityPlayer.prototype.Rtc_config0): void;

		/**
		 *
		 * @param a
		 */
		rtc_receiveAnswer(a?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_datachannel_onopen(a?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_datachannel_onclose(a?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_datachannel_onerror(a?: any): void;

		/**
		 *
		 * @param a
		 */
		rtc_datachannel_onmessage(a?: any): void;

		/**
		 *
		 */
		rtc_startLatencyTest(): void;

		/**
		 *
		 */
		rtc_latencyTimingsReady(): void;

		/**
		 *
		 * @return
		 */
		ws_checkOpen(): /* !this.ws */ any;

		/**
		 *
		 * @param a
		 */
		ws_send(a?: {} | {} | Ws_send0): void;

		/**
		 *
		 */
		ws_onOpen(): void;

		/**
		 *
		 * @param a
		 */
		ws_onClose(a?: any): void;

		/**
		 *
		 * @param a
		 */
		ws_onError(a?: string): void;

		/**
		 *
		 * @param a
		 */
		ws_onMessage(a?: any): void;

		/**
		 *
		 */
		ws_connect(): void;
	}

	/**
	 *
	 */

	/**
	 *
	 */
	interface BPFuncParamType {
		Bool: 0;
		UInt8: 1;
		Int32: 2;
		Float: 3;
		Double?: 4;
		String?: 5;
		Color: 6;
		Vector2D?: 7;
		Vector: 8;
		Rotator: 9;
		IntArray: 10;
		StringArray: 11;
		VectorArray: 12;
		Coordinate?: 13;
		CoordinateArray: 14;
	}

	/**
	 *
	 */
	interface Color {
		LightPink: "RGB(255,182,193)";
		Pink: "RGB(255,192,203)";
		Crimson: "RGB(220,20,60)";
		LavenderBlush: "RGB(255,240,245)";
		PaleVioletRed: "RGB(219,112,147)";
		HotPink: "RGB(255,105,180)";
		DeepPink: "RGB(255,20,147)";
		MediumVioletRed: "RGB(199,21,133)";
		Orchid: "RGB(218,112,214)";
		Thistle: "RGB(216,191,216)";
		plum: "RGB(221,160,221)";
		Violet: "RGB(238,130,238)";
		Magenta: "RGB(255,0,255)";
		Fuchsia: "RGB(255,0,255)";
		DarkMagenta: "RGB(139,0,139)";
		Purple: "RGB(128,0,128)";
		MediumOrchid: "RGB(186,85,211)";
		DarkVoilet: "RGB(148,0,211)";
		DarkOrchid: "RGB(153,50,204)";
		Indigo: "RGB(75,0,130)";
		BlueViolet: "RGB(138,43,226)";
		MediumPurple: "RGB(147,112,219)";
		MediumSlateBlue: "RGB(123,104,238)";
		SlateBlue: "RGB(106,90,205)";
		DarkSlateBlue: "RGB(72,61,139)";
		Lavender: "RGB(230,230,250)";
		GhostWhite: "RGB(248,248,255)";
		Blue: "RGB(0,0,255)";
		MediumBlue: "RGB(0,0,205)";
		MidnightBlue: "RGB(25,25,112)";
		DarkBlue: "RGB(0,0,139)";
		Navy: "RGB(0,0,128)";
		RoyalBlue: "RGB(65,105,225)";
		CornflowerBlue: "RGB(100,149,237)";
		LightSteelBlue: "RGB(176,196,222)";
		LightSlateGray: "RGB(119,136,153)";
		SlateGray: "RGB(112,128,144)";
		DoderBlue: "RGB(30,144,255)";
		AliceBlue: "RGB(240,248,255)";
		SteelBlue: "RGB(70,130,180)";
		LightSkyBlue: "RGB(135,206,250)";
		SkyBlue: "RGB(135,206,235)";
		DeepSkyBlue: "RGB(0,191,255)";
		LightBLue: "RGB(173,216,230)";
		PowDerBlue: "RGB(176,224,230)";
		CadetBlue: "RGB(95,158,160)";
		Azure: "RGB(240,255,255)";
		LightCyan: "RGB(225,255,255)";
		PaleTurquoise: "RGB(175,238,238)";
		Cyan: "RGB(0,255,255)";
		Aqua: "RGB(212,242,231)";
		DarkTurquoise: "RGB(0,206,209)";
		DarkSlateGray: "RGB(47,79,79)";
		DarkCyan: "RGB(0,139,139)";
		Teal: "RGB(0,128,128)";
		MediumTurquoise: "RGB(72,209,204)";
		LightSeaGreen: "RGB(32,178,170)";
		Turquoise: "RGB(64,224,208)";
		Auqamarin: "RGB(127,255,170)";
		MediumAquamarine: "RGB(0,250,154)";
		MediumSpringGreen: "RGB(0,255,127)";
		MintCream: "RGB(245,255,250)";
		SpringGreen: "RGB(60,179,113)";
		SeaGreen: "RGB(46,139,87)";
		Honeydew: "RGB(240,255,240)";
		LightGreen: "RGB(144,238,144)";
		PaleGreen: "RGB(152,251,152)";
		DarkSeaGreen: "RGB(143,188,143)";
		LimeGreen: "RGB(50,205,50)";
		Lime: "RGB(0,255,0)";
		ForestGreen: "RGB(34,139,34)";
		Green: "RGB(0,128,0)";
		DarkGreen: "RGB(0,100,0)";
		Chartreuse: "RGB(127,255,0)";
		LawnGreen: "RGB(124,252,0)";
		GreenYellow: "RGB(173,255,47)";
		OliveDrab: "RGB(85,107,47)";
		Beige: "RGB(245,245,220)";
		LightGoldenrodYellow: "RGB(250,250,210)";
		Ivory: "RGB(255,255,240)";
		LightYellow: "RGB(255,255,224)";
		Yellow: "RGB(255,255,0)";
		Olive: "RGB(128,128,0)";
		DarkKhaki: "RGB(189,183,107)";
		LemonChiffon: "RGB(255,250,205)";
		PaleGodenrod: "RGB(238,232,170)";
		Khaki: "RGB(240,230,140)";
		Gold: "RGB(255,215,0)";
		Cornislk: "RGB(255,248,220)";
		GoldEnrod: "RGB(218,165,32)";
		FloralWhite: "RGB(255,250,240)";
		OldLace: "RGB(253,245,230)";
		Wheat: "RGB(245,222,179)";
		Moccasin: "RGB(255,228,181)";
		Orange: "RGB(255,165,0)";
		PapayaWhip: "RGB(255,239,213)";
		BlanchedAlmond: "RGB(255,235,205)";
		NavajoWhite: "RGB(255,222,173)";
		AntiqueWhite: "RGB(250,235,215)";
		Tan: "RGB(210,180,140)";
		BrulyWood: "RGB(222,184,135)";
		Bisque: "RGB(255,228,196)";
		DarkOrange: "RGB(255,140,0)";
		Linen: "RGB(250,240,230)";
		Peru: "RGB(205,133,63)";
		PeachPuff: "RGB(255,218,185)";
		SandyBrown: "RGB(244,164,96)";
		Chocolate: "RGB(210,105,30)";
		SaddleBrown: "RGB(139,69,19)";
		SeaShell: "RGB(255,245,238)";
		Sienna: "RGB(160,82,45)";
		LightSalmon: "RGB(255,160,122)";
		Coral: "RGB(255,127,80)";
		OrangeRed: "RGB(255,69,0)";
		DarkSalmon: "RGB(233,150,122)";
		Tomato: "RGB(255,99,71)";
		MistyRose: "RGB(255,228,225)";
		Salmon: "RGB(250,128,114)";
		Snow: "RGB(255,250,250)";
		LightCoral: "RGB(240,128,128)";
		RosyBrown: "RGB(188,143,143)";
		IndianRed: "RGB(205,92,92)";
		Red: "RGB(255,0,0)";
		Brown: "RGB(165,42,42)";
		FireBrick: "RGB(178,34,34)";
		DarkRed: "RGB(139,0,0)";
		Maroon: "RGB(128,0,0)";
		White: "RGB(255,255,255)";
		WhiteSmoke: "RGB(245,245,245)";
		Gainsboro: "RGB(220,220,220)";
		LightGrey: "RGB(211,211,211)";
		Silver: "RGB(192,192,192)";
		DarkGray: "RGB(169,169,169)";
		Gray: "RGB(128,128,128)";
		DimGray: "RGB(105,105,105)";
		Black: "RGB(0,0,0)";
	}

	/**
	 *
	 */
	let CommandType: {
		/**
		 *
		 */
		None?: number;

		/**
		 *
		 */
		Camera_PlayAnimation: number;

		/**
		 *
		 */
		Camera_StopAnimation: number;

		/**
		 *
		 */
		Misc_EnterReportMode: number;

		/**
		 *
		 */
		Misc_ExitReportMode: number;

		/**
		 *
		 */
		Misc_SetDateTime: number;

		/**
		 *
		 */
		Camera_GetCamera: number;

		/**
		 *
		 */
		Camera_SetState?: number;

		/**
		 *
		 */
		Camera_Set: number;

		/**
		 *
		 */
		Camera_LookAtBBox: number;

		/**
		 *
		 */
		Coord_World2Screen: number;

		/**
		 *
		 */
		Coord_Screen2World?: number;

		/**
		 *
		 */
		InfoTree_SetVisibility: number;

		/**
		 *
		 */
		InfoTree_Show: number;

		/**
		 *
		 */
		InfoTree_Hide?: number;

		/**
		 *
		 */
		InfoTree_EnableXRay: number;

		/**
		 *
		 */
		InfoTree_DisableXRay: number;

		/**
		 *
		 */
		TileLayer_Add?: number;

		/**
		 *
		 */
		HeatMap_Add?: number;

		/**
		 *
		 */
		HeatMap_Update?: number;

		/**
		 *
		 */
		HeatMap_AddPoints: number;

		/**
		 *
		 */
		HeatMap_RemovePoints: number;

		/**
		 *
		 */
		HeatMap_Delete?: number;

		/**
		 *
		 */
		HeatMap_Show: number;

		/**
		 *
		 */
		HeatMap_Hide?: number;

		/**
		 *
		 */
		HeatMap_Focus: number;

		/**
		 *
		 */
		HighlightArea_Add?: number;

		/**
		 *
		 */
		HighlightArea_Delete?: number;

		/**
		 *
		 */
		HighlightArea_Update?: number;

		/**
		 *
		 */
		Polygon3D_Add?: number;

		/**
		 *
		 */
		Polygon3D_Delete?: number;

		/**
		 *
		 */
		Misc_AddImageButton: number;

		/**
		 *
		 */
		Misc_DeleteImageButton: number;

		/**
		 *
		 */
		Misc_AddAnimatedImageButton: number;

		/**
		 *
		 */
		Settings_SetMainUIVisibility: number;

		/**
		 *
		 */
		Settings_SetMousePickMask: number;

		/**
		 *
		 */
		Tag_Add?: number;

		/**
		 *
		 */
		Tag_Delete?: number;

		/**
		 *
		 */
		Tag_Update?: number;

		/**
		 *
		 */
		Tag_Clear: number;

		/**
		 *
		 */
		Tag_Focus: number;

		/**
		 *
		 */
		Beam_Add?: number;

		/**
		 *
		 */
		Beam_Update: number;

		/**
		 *
		 */
		Beam_Delete: number;

		/**
		 *
		 */
		Beam_Clear: number;

		/**
		 *
		 */
		Beam_Focus: number;

		/**
		 *
		 */
		Beam_Show: number;

		/**
		 *
		 */
		Beam_Hide?: number;

		/**
		 *
		 */
		Beam_ShowAll: number;

		/**
		 *
		 */
		Beam_HideAll: number;

		/**
		 *
		 */
		RadiationPoint_Add: number;

		/**
		 *
		 */
		RadiationPoint_Update?: number;

		/**
		 *
		 */
		RadiationPoint_Delete?: number;

		/**
		 *
		 */
		RadiationPoint_Clear: number;

		/**
		 *
		 */
		Polygon_Add?: number;

		/**
		 *
		 */
		Polygon_Update?: number;

		/**
		 *
		 */
		Polygon_Delete?: number;

		/**
		 *
		 */
		Polygon_Clear: number;

		/**
		 *
		 */
		Polygon_Highlight: number;

		/**
		 *
		 */
		Polygon_StopHighlight: number;

		/**
		 *
		 */
		Polygon_Glow: number;

		/**
		 *
		 */
		Polygon_Focus: number;

		/**
		 *
		 */
		Tag_FocusAll: number;

		/**
		 *
		 */
		Tag_Show: number;

		/**
		 *
		 */
		Tag_Hide?: number;

		/**
		 *
		 */
		Tag_ShowAll: number;

		/**
		 *
		 */
		Tag_HideAll: number;

		/**
		 *
		 */
		RadiationPoint_Focus: number;

		/**
		 *
		 */
		RadiationPoint_FocusAll: number;

		/**
		 *
		 */
		RadiationPoint_Show: number;

		/**
		 *
		 */
		RadiationPoint_Hide?: number;

		/**
		 *
		 */
		RadiationPoint_ShowAll: number;

		/**
		 *
		 */
		RadiationPoint_HideAll: number;

		/**
		 *
		 */
		Polygon_Show: number;

		/**
		 *
		 */
		Polygon_Hide?: number;

		/**
		 *
		 */
		Polygon3D_Update?: number;

		/**
		 *
		 */
		Polygon3D_Clear: number;

		/**
		 *
		 */
		Polygon3D_Focus: number;

		/**
		 *
		 */
		Polygon3D_Show: number;

		/**
		 *
		 */
		Polygon3D_Hide?: number;

		/**
		 *
		 */
		Polygon3D_Highlight: number;

		/**
		 *
		 */
		Polygon3D_Glow: number;

		/**
		 *
		 */
		Polygon3D_StopGlow: number;

		/**
		 *
		 */
		HighlightArea_Clear: number;

		/**
		 *
		 */
		HighlightArea_Focus: number;

		/**
		 *
		 */
		HighlightArea_Show: number;

		/**
		 *
		 */
		HighlightArea_Hide?: number;

		/**
		 *
		 */
		Misc_GetVersion: number;

		/**
		 *
		 */
		TileLayer_Update?: number;

		/**
		 *
		 */
		TileLayer_Delete?: number;

		/**
		 *
		 */
		TileLayer_Focus: number;

		/**
		 *
		 */
		TileLayer_EnableXRay: number;

		/**
		 *
		 */
		TileLayer_DisableXRay: number;

		/**
		 *
		 */
		TileLayer_Show: number;

		/**
		 *
		 */
		TileLayer_Hide?: number;

		/**
		 *
		 */
		Tag_Get: number;

		/**
		 *
		 */
		RadiationPoint_Get: number;

		/**
		 *
		 */
		Polygon_Get: number;

		/**
		 *
		 */
		Polygon3D_Get: number;

		/**
		 *
		 */
		HighlightArea_Get: number;

		/**
		 *
		 */
		TileLayer_Get: number;

		/**
		 *
		 */
		Beam_Get: number;

		/**
		 *
		 */
		HeatMap_Get: number;

		/**
		 *
		 */
		Settings_GetMapMode?: number;

		/**
		 *
		 */
		Settings_SetMapMode?: number;

		/**
		 *
		 */
		Settings_SetMapURL: number;

		/**
		 *
		 */
		Settings_SetWMTSLayerVisible?: number;

		/**
		 *
		 */
		TileLayer_Actor_Show: number;

		/**
		 *
		 */
		TileLayer_Actor_Hide?: number;

		/**
		 *
		 */
		TileLayer_Actor_Focus: number;

		/**
		 *
		 */
		TileLayer_Actor_Highlight: number;

		/**
		 *
		 */
		TileLayer_Actor_StopHightlight: number;

		/**
		 *
		 */
		CustomObject_Add: number;

		/**
		 *
		 */
		CustomObject_Update: number;

		/**
		 *
		 */
		CustomObject_Delete: number;

		/**
		 *
		 */
		CustomObject_Get: number;

		/**
		 *
		 */
		CustomObject_Focus: number;

		/**
		 *
		 */
		CustomObject_Show: number;

		/**
		 *
		 */
		CustomObject_Hide: number;

		/**
		 *
		 */
		CustomObject_SetTintColor: number;

		/**
		 *
		 */
		HeatMap_Clear: number;

		/**
		 *
		 */
		CustomTag_Clear: number;

		/**
		 *
		 */
		CustomTag_Delete: number;

		/**
		 *
		 */
		CustomTag_Focus: number;

		/**
		 *
		 */
		CustomTag_FocusAll: number;

		/**
		 *
		 */
		CustomTag_Show: number;

		/**
		 *
		 */
		CustomTag_Hide: number;

		/**
		 *
		 */
		CustomTag_ShowAll: number;

		/**
		 *
		 */
		CustomTag_HideAll: number;

		/**
		 *
		 */
		CustomTag_Add?: number;

		/**
		 *
		 */
		CustomTag_Update: number;

		/**
		 *
		 */
		CustomTag_Get: number;

		/**
		 *
		 */
		Polyline_Add: number;

		/**
		 *
		 */
		Polyline_Update: number;

		/**
		 *
		 */
		Polyline_Delete: number;

		/**
		 *
		 */
		Polyline_Clear: number;

		/**
		 *
		 */
		Polyline_Focus: number;

		/**
		 *
		 */
		Polyline_Get: number;

		/**
		 *
		 */
		Polyline_Show: number;

		/**
		 *
		 */
		Polyline_Hide: number;

		/**
		 *
		 */
		Polyline_ShowAll: number;

		/**
		 *
		 */
		Polyline_HideAll: number;

		/**
		 *
		 */
		VideoProjection_Add: number;

		/**
		 *
		 */
		VideoProjection_Update: number;

		/**
		 *
		 */
		VideoProjection_Delete: number;

		/**
		 *
		 */
		VideoProjection_Show: number;

		/**
		 *
		 */
		VideoProjection_Hide: number;

		/**
		 *
		 */
		VideoProjection_Get: number;

		/**
		 *
		 */
		VideoProjection_Focus: number;

		/**
		 *
		 */
		Misc_PlayVideo: number;

		/**
		 *
		 */
		Misc_StopPlayVideo: number;

		/**
		 *
		 */
		Weather_SetParams: number;

		/**
		 *
		 */
		Weather_GetParams: number;

		/**
		 *
		 */
		Weather_SetDate: number;

		/**
		 *
		 */
		Weather_GetDate: number;

		/**
		 *
		 */
		ODLine_Add: number;

		/**
		 *
		 */
		ODLine_Update: number;

		/**
		 *
		 */
		ODLine_Delete: number;

		/**
		 *
		 */
		ODLine_Clear: number;

		/**
		 *
		 */
		ODLine_Focus: number;

		/**
		 *
		 */
		ODLine_Get: number;

		/**
		 *
		 */
		ODLine_Show: number;

		/**
		 *
		 */
		ODLine_Hide?: number;

		/**
		 *
		 */
		ODLine_ShowAll: number;

		/**
		 *
		 */
		ODLine_HideAll: number;

		/**
		 *
		 */
		Misc_SetWindowResolution: number;

		/**
		 *
		 */
		Misc_CallBPFunction: number;

		/**
		 *
		 */
		Settings_SetHighlightColor: number;

		/**
		 *
		 */
		InfoTree_ShowByGroupId: number;

		/**
		 *
		 */
		InfoTree_HideByGroupId: number;

		/**
		 *
		 */
		InfoTree_HighlightByGroupId: number;

		/**
		 *
		 */
		InfoTree_DeleteByGroupId: number;

		/**
		 *
		 */
		EditHelper_Start: number;

		/**
		 *
		 */
		EditHelper_Quit: number;

		/**
		 *
		 */
		EditHelper_Finish: number;

		/**
		 *
		 */
		EditHelper_SetParam: number;

		/**
		 *
		 */
		Settings_SetFovX: number;

		/**
		 *
		 */
		TileLayer_Actor_ShowAll: number;

		/**
		 *
		 */
		TileLayer_Actor_HideAll: number;

		/**
		 *
		 */
		CameraTour_Add: number;

		/**
		 *
		 */
		CameraTour_Update?: number;

		/**
		 *
		 */
		CameraTour_Play: number;

		/**
		 *
		 */
		CameraTour_Stop: number;

		/**
		 *
		 */
		CameraTour_Delete?: number;

		/**
		 *
		 */
		Tag_PopupWindow_Show: number;

		/**
		 *
		 */
		Tag_PopupWindow_Hide?: number;

		/**
		 *
		 */
		Tag_PopupWindow_ShowAll: number;

		/**
		 *
		 */
		Tag_PopupWindow_HideAll: number;

		/**
		 *
		 */
		Settings_SetOceanColor: number;

		/**
		 *
		 */
		Misc_ShowAllFoliages: number;

		/**
		 *
		 */
		Misc_HideAllFoliages: number;

		/**
		 *
		 */
		Tools_StartPolygonClip: number;

		/**
		 *
		 */
		Tools_StopClip: number;

		/**
		 *
		 */
		TileLayer_SetAllowClip: number;

		/**
		 *
		 */
		Panorama_Add: number;

		/**
		 *
		 */
		Panorama_Update: number;

		/**
		 *
		 */
		Panorama_Delete: number;

		/**
		 *
		 */
		Panorama_Clear: number;

		/**
		 *
		 */
		Panorama_Focus: number;

		/**
		 *
		 */
		Panorama_Get: number;

		/**
		 *
		 */
		Decal_Add: number;

		/**
		 *
		 */
		Decal_Update: number;

		/**
		 *
		 */
		Decal_Delete: number;

		/**
		 *
		 */
		Decal_Clear: number;

		/**
		 *
		 */
		Decal_Focus: number;

		/**
		 *
		 */
		Decal_FocusAll: number;

		/**
		 *
		 */
		Decal_Get: number;

		/**
		 *
		 */
		Misc_PlayMovie: number;

		/**
		 *
		 */
		Misc_StopMovie: number;

		/**
		 *
		 */
		Tools_SetMeasurement: number;

		/**
		 *
		 */
		Tools_StartMeasurement: number;

		/**
		 *
		 */
		Tools_StopMeasurement: number;

		/**
		 *
		 */
		Viewshed_Add: number;

		/**
		 *
		 */
		Viewshed_Update: number;

		/**
		 *
		 */
		Viewshed_Focus: number;

		/**
		 *
		 */
		Viewshed_Delete: number;

		/**
		 *
		 */
		Viewshed_Clear: number;

		/**
		 *
		 */
		Viewshed_Get: number;

		/**
		 *
		 */
		TileLayer_SetStyle: number;

		/**
		 *
		 */
		Tools_LineIntersect: number;

		/**
		 *
		 */
		Coord_PCS2GCS: number;

		/**
		 *
		 */
		Coord_GCS2PCS: number;

		/**
		 *
		 */
		DynamicWater_Add: number;

		/**
		 *
		 */
		DynamicWater_Update: number;

		/**
		 *
		 */
		DynamicWater_Focus: number;

		/**
		 *
		 */
		DynamicWater_Delete: number;

		/**
		 *
		 */
		DynamicWater_Clear: number;

		/**
		 *
		 */
		DynamicWater_Get: number;

		/**
		 *
		 */
		DynamicWater_Show: number;

		/**
		 *
		 */
		DynamicWater_Hide: number;

		/**
		 *
		 */
		Quit: number;

		/**
		 *
		 */
		TileLayer_Actor_Unhighlight: number;

		/**
		 *
		 */
		InfoTree_Get: number;

		/**
		 *
		 */
		Reset: number;

		/**
		 *
		 */
		CustomObject_Clear: number;

		/**
		 *
		 */
		CustomObject_Highlight: number;

		/**
		 *
		 */
		CustomObject_Unhighlight: number;

		/**
		 *
		 */
		CustomObject_StopHighlight: number;

		/**
		 *
		 */
		CustomObject_CallFunction: number;

		/**
		 *
		 */
		CustomObject_AddByTileLayer: number;

		/**
		 *
		 */
		Tools_StartPlaneClip: number;

		/**
		 *
		 */
		Tools_StopPlaneClip: number;

		/**
		 *
		 */
		Tools_StartVolumeClip: number;

		/**
		 *
		 */
		Tools_StopVolumeClip: number;

		/**
		 *
		 */
		Tools_StartSkylineAnalysis: number;

		/**
		 *
		 */
		Tools_StopSkylineAnalysis: number;

		/**
		 *
		 */
		Tools_ExportSkyline: number;

		/**
		 *
		 */
		Tools_StartViewshedAnalysis: number;

		/**
		 *
		 */
		Tools_StopViewshedAnalysis: number;

		/**
		 *
		 */
		Camera_Move?: number;

		/**
		 *
		 */
		TileLayer_SetCollision: number;

		/**
		 *
		 */
		TileLayer_Modifier_Add: number;

		/**
		 *
		 */
		TileLayer_Modifier_Update: number;

		/**
		 *
		 */
		TileLayer_Modifier_Delete: number;

		/**
		 *
		 */
		TileLayer_Modifier_Clear: number;

		/**
		 *
		 */
		Misc_StartProcess: number;

		/**
		 *
		 */
		Settings_SetCampassVisible: number;

		/**
		 *
		 */
		Tools_StartGeometryEdit: number;

		/**
		 *
		 */
		Tools_StopGeometryEdit: number;

		/**
		 *
		 */
		Settings_SetEnableInteract: number;

		/**
		 *
		 */
		Camera_PauseAnimation: number;

		/**
		 *
		 */
		Camera_ResumeAnimation: number;

		/**
		 *
		 */
		Settings_SetInteractiveMode?: number;

		/**
		 *
		 */
		CameraTour_Pause: number;

		/**
		 *
		 */
		CameraTour_Resume: number;

		/**
		 *
		 */
		Settings_SetTerrainAlpha: number;

		/**
		 *
		 */
		CustomMesh_Add: number;

		/**
		 *
		 */
		CustomMesh_Delete: number;

		/**
		 *
		 */
		CustomMesh_Clear: number;

		/**
		 *
		 */
		CustomMesh_Update: number;

		/**
		 *
		 */
		CustomMesh_Get: number;

		/**
		 *
		 */
		CustomMesh_Focus: number;

		/**
		 *
		 */
		CustomMesh_Show: number;

		/**
		 *
		 */
		CustomMesh_Hide: number;

		/**
		 *
		 */
		CustomMesh_ShowAll: number;

		/**
		 *
		 */
		CustomMesh_HideAll: number;

		/**
		 *
		 */
		Settings_EnableCameraMovingEvent: number;

		/**
		 *
		 */
		Marker_Add: number;

		/**
		 *
		 */
		Marker_Update: number;

		/**
		 *
		 */
		Marker_Get: number;

		/**
		 *
		 */
		Marker_Delete: number;

		/**
		 *
		 */
		Marker_Clear: number;

		/**
		 *
		 */
		Marker_Focus: number;

		/**
		 *
		 */
		Marker_FocusAll: number;

		/**
		 *
		 */
		Marker_Show: number;

		/**
		 *
		 */
		Marker_Hide: number;

		/**
		 *
		 */
		Marker_ShowAll: number;

		/**
		 *
		 */
		Marker_HideAll: number;

		/**
		 *
		 */
		Marker_ShowPopupWindow: number;

		/**
		 *
		 */
		Marker_HidePopupWindow: number;

		/**
		 *
		 */
		Marker_ShowAllPopupWindow: number;

		/**
		 *
		 */
		Marker_HideAllPopupWindow: number;

		/**
		 *
		 */
		TileLayer_SetViewportVisible: number;

		/**
		 *
		 */
		TileLayer_GetObjectIDs: number;

		/**
		 *
		 */
		Polygon3D_StopHighlight: number;

		/**
		 *
		 */
		Tools_StartFloodFill: number;

		/**
		 *
		 */
		Tools_StopFloodFill: number;

		/**
		 *
		 */
		FloodFill_Add: number;

		/**
		 *
		 */
		FloodFill_Delete: number;

		/**
		 *
		 */
		FloodFill_Clear: number;

		/**
		 *
		 */
		FloodFill_Update: number;

		/**
		 *
		 */
		FloodFill_Get: number;

		/**
		 *
		 */
		FloodFill_Focus: number;

		/**
		 *
		 */
		FloodFill_Show: number;

		/**
		 *
		 */
		FloodFill_Hide: number;

		/**
		 *
		 */
		FloodFill_ShowAll: number;

		/**
		 *
		 */
		FloodFill_HideAll: number;

		/**
		 *
		 */
		Cesium3DTile_Add: number;

		/**
		 *
		 */
		Cesium3DTile_Delete: number;

		/**
		 *
		 */
		Cesium3DTile_Clear: number;

		/**
		 *
		 */
		Cesium3DTile_Update: number;

		/**
		 *
		 */
		Cesium3DTile_Get: number;

		/**
		 *
		 */
		Cesium3DTile_Focus: number;

		/**
		 *
		 */
		Cesium3DTile_Show: number;

		/**
		 *
		 */
		Cesium3DTile_Hide: number;

		/**
		 *
		 */
		Cesium3DTile_ShowAll: number;

		/**
		 *
		 */
		Cesium3DTile_HideAll: number;

		/**
		 *
		 */
		TileLayer_GetActorInfoFromDB: number;

		/**
		 *
		 */
		ShapeFile_Add: number;

		/**
		 *
		 */
		ShapeFile_Delete: number;

		/**
		 *
		 */
		ShapeFile_Clear: number;

		/**
		 *
		 */
		ShapeFile_Update: number;

		/**
		 *
		 */
		ShapeFile_Get: number;

		/**
		 *
		 */
		ShapeFile_Focus: number;

		/**
		 *
		 */
		ShapeFile_Show: number;

		/**
		 *
		 */
		ShapeFile_Hide: number;

		/**
		 *
		 */
		ShapeFile_ShowAll: number;

		/**
		 *
		 */
		ShapeFile_HideAll: number;

		/**
		 *
		 */
		ShapeFile_OpenShapeFile: number;

		/**
		 *
		 */
		Weather_SimulateTime: number;

		/**
		 *
		 */
		TileLayer_Actor_GetInfo: number;

		/**
		 *
		 */
		Camera_GetAnimationList: number;

		/**
		 *
		 */
		TileLayer_CutPolygon_Add?: number;

		/**
		 *
		 */
		TileLayer_CutPolygon_Update: number;

		/**
		 *
		 */
		TileLayer_CutPolygon_Delete: number;

		/**
		 *
		 */
		TileLayer_CutPolygon_Clear: number;

		/**
		 *
		 */
		Marker3D_Add: number;

		/**
		 *
		 */
		Marker3D_Delete: number;

		/**
		 *
		 */
		Marker3D_Clear: number;

		/**
		 *
		 */
		Marker3D_Update: number;

		/**
		 *
		 */
		Marker3D_Get: number;

		/**
		 *
		 */
		Marker3D_Focus: number;

		/**
		 *
		 */
		Marker3D_Show: number;

		/**
		 *
		 */
		Marker3D_Hide: number;

		/**
		 *
		 */
		Marker3D_ShowAll: number;

		/**
		 *
		 */
		Marker3D_HideAll: number;

		/**
		 *
		 */
		Camera_GetAnimationImage: number;

		/**
		 *
		 */
		Tools_ReplaceTexture: number;

		/**
		 *
		 */
		Tools_RestoreTexture: number;

		/**
		 *
		 */
		Light_Add: number;

		/**
		 *
		 */
		Light_Delete: number;

		/**
		 *
		 */
		Light_Update: number;

		/**
		 *
		 */
		Light_Get: number;

		/**
		 *
		 */
		Light_Clear: number;

		/**
		 *
		 */
		Light_Focus: number;

		/**
		 *
		 */
		Light_Show: number;

		/**
		 *
		 */
		Light_Hide: number;

		/**
		 *
		 */
		Light_ShowAll: number;

		/**
		 *
		 */
		Light_HideAll: number;

		/**
		 *
		 */
		WaterMesh_Add: number;

		/**
		 *
		 */
		WaterMesh_Update: number;

		/**
		 *
		 */
		WaterMesh_Delete: number;

		/**
		 *
		 */
		WaterMesh_Clear: number;

		/**
		 *
		 */
		WaterMesh_Get: number;

		/**
		 *
		 */
		WaterMesh_Focus: number;

		/**
		 *
		 */
		WaterMesh_Show: number;

		/**
		 *
		 */
		WaterMesh_Hide: number;

		/**
		 *
		 */
		WaterMesh_ShowAll: number;

		/**
		 *
		 */
		WaterMesh_HideAll: number;

		/**
		 *
		 */
		CustomObject_StartMove: number;

		/**
		 *
		 */
		CustomObject_StopMove?: number;

		/**
		 *
		 */
		CustomObject_OverrideMaterial: number;

		/**
		 *
		 */
		CustomObject_RestoreMaterial: number;

		/**
		 *
		 */
		Settings_SetReport: number;

		/**
		 *
		 */
		Settings_GetReport: number;

		/**
		 *
		 */
		Settings_SetControl: number;

		/**
		 *
		 */
		Settings_GetControl: number;

		/**
		 *
		 */
		Settings_SetPostProcess: number;

		/**
		 *
		 */
		Settings_GetPostProcess: number;

		/**
		 *
		 */
		Settings_SetCamera: number;

		/**
		 *
		 */
		Settings_GetCamera: number;

		/**
		 *
		 */
		CustomObject_SetViewportVisible: number;

		/**
		 *
		 */
		WaterFlowField_Add: number;

		/**
		 *
		 */
		WaterFlowField_Update?: number;

		/**
		 *
		 */
		WaterFlowField_Delete: number;

		/**
		 *
		 */
		WaterFlowField_Clear: number;

		/**
		 *
		 */
		WaterFlowField_Get: number;

		/**
		 *
		 */
		WaterFlowField_Focus: number;

		/**
		 *
		 */
		WaterFlowField_Show: number;

		/**
		 *
		 */
		WaterFlowField_Hide: number;

		/**
		 *
		 */
		TileLayer_SetViewHeightRange: number;

		/**
		 *
		 */
		Tools_StartVisiblityAnalysis: number;

		/**
		 *
		 */
		Tools_StopVisiblityAnalysis: number;

		/**
		 *
		 */
		Tools_StartViewDomeAnalysis: number;

		/**
		 *
		 */
		Tools_StopViewDomeAnalysis: number;

		/**
		 *
		 */
		Tools_StartCutFillAnalysis: number;

		/**
		 *
		 */
		Tools_StopCutFillAnalysis: number;

		/**
		 *
		 */
		Tools_StartSunshineAnalysis: number;

		/**
		 *
		 */
		Tools_StopSunshineAnalysis: number;

		/**
		 *
		 */
		Tools_StartTerrainSlopeAnalysis: number;

		/**
		 *
		 */
		Tools_StopTerrainSlopeAnalysis: number;

		/**
		 *
		 */
		Tools_StartContourLineAnalysis: number;

		/**
		 *
		 */
		Tools_StopContourLineAnalysis: number;

		/**
		 *
		 */
		Command_End: number;
	};

	/**
	 *
	 */
	interface MapMode {
		Campass: 0;
		SmallMap: 1;
		BigMap: 2;
	}

	/**
	 *
	 */
	interface MeasurementMode {
		Coordinate: 1;
		Linear: 2;
		Horizontal: 3;
		Vertical: 4;
		MultiPoint: 5;
		TerrainArea?: 6;
	}

	/**
	 *
	 */
	interface MousePickMask {
		MouseClick: 1;
		MouseMove: 2;
		MouseHover: 4;
	}

	/**
	 *
	 */
	interface Polygon3DStyle {
		Wave: 0;
		LoopLine: 1;
		Gradual: 2;
		DynamicGradual: 3;
		WaveTransparent: 4;
		WideWave: 5;
		RotateArrow: 6;
		RotateLine: 7;
		RotateGradual: 8;
		SingleColor: 9;
		SingleColorWithLight: 10;
	}

	interface PolygonStyle {
		/**
		 * 单色
		 */
		SingleColor: 0

		//圆点
		CirclePoint: 1

		//体积
		Volumn: 2

		//渐变
		Gradual: 3

		//动态渐变
		DynamicGradual: 4

		//波纹
		WaveTransparent: 5

		//宽波纹
		WideWave: 6

		//旋转箭头
		RotateArrow: 7

		//旋转线
		RotateLine: 8

		//旋转渐变
		RotateGradual: 9


		//	贴地模式
		// 		使用注意：
		// 		1、ACP工程开启贴地：请先在ACP工程打开设置面板-->后期-->对象贴合：勾选贴合所有；
		// 		2、如果ACP工程开启大地图模式并设置了WMTS服务，则当前Polygon的坐标范围必须要在WMTS地图范围内才可以看到贴地效果。
		OnTerrain: 10

	}


	/**
	 *
	 */
	let PolygonStyle: {
		/**
		 *
		 */
		SingleColor: number;

		/**
		 *
		 */
		CirclePoint: number;

		/**
		 *
		 */
		Volumn: number;

		/**
		 *
		 */
		Gradual: number;

		/**
		 *
		 */
		DynamicGradual: number;

		/**
		 *
		 */
		WaveTransparent: number;

		/**
		 *
		 */
		WideWave: number;

		/**
		 *
		 */
		RotateArrow: number;

		/**
		 *
		 */
		RotateLine: number;

		/**
		 *
		 */
		RotateGradual: number;

		/**
		 *
		 */
		OnTerrain: number;
	};

	/**
	 *
	 */
	interface PolylineStyle {
		Arrow: 0;
		Arrow1: 1;
		Flow: 2;
		Beam: 3;
		Normal: 4;
		OnTerrain: 5;
		DottedNormal: 6;
		DottedCircle: 7;
	}

	/**
	 *
	 */
	export const VERSION: "5.1";

	/**
	 *
	 */
	interface Viewport {
		V1: 1;
		V2: 2;
		V3: 4;
		V4: 8;
		All: 255;
	}

	/**
	 *
	 */
	interface WaterFlowFieldStyle {
		HeatMap: 0;
		Water: 1;
	}
}

export = acapi;
export as namespace acapi;
