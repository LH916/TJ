// Type definitions for ./ac.min.js

import {da} from "./test2";

/**
 *
 */
declare let ca: {
	/**
	 *
	 */
	MouseClick: number;

	/**
	 *
	 */
	MouseMove?: number;

	/**
	 *
	 */
	MouseHover: number;
};

/**
 *
 */
declare let T: {
	/**
	 *
	 */
	V1: number;

	/**
	 *
	 */
	V2: number;

	/**
	 *
	 */
	V3: number;

	/**
	 *
	 */
	V4: number;

	/**
	 *
	 */
	All: number;
};

/**
 *
 * @param a
 * @param b


/**
 *
 */
declare interface N {
	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	new(a?: da, b?: string, c?: string);

	/**
	 *
	 * @param a
	 */
	_checkCommand(a?: string): void;

	/**
	 *
	 * @param a
	 * @return
	 */
	_convertFilePath(a?: string): string;

	/**
	 *
	 * @param a
	 */
	_processProps(a?: /* N.prototype._processProps0 */ any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	_add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	_update(
			a?: /* N.prototype._processProps.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	_update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	_delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	_clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	_get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	_focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	_focusAll(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_focusAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	_show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_show();

	/**
	 *
	 * @param a
	 * @return
	 */
	_showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	_hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	_hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 */

	/**
	 *
	 */
	updateBegin(): void;

	/**
	 *
	 * @param a
	 * @return
	 */
	updateEnd(a?: any): any;

	/**
	 *
	 */
	test(): void;
}

/**
 *
 */
declare interface Qa extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setDuration(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setThickness(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setInterval(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setVelocity(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinates(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface Ra extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	play(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	play();

	/**
	 *
	 * @param a
	 * @return
	 */
	pause(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	pause();

	/**
	 *
	 * @param a
	 * @return
	 */
	resume(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	resume();

	/**
	 *
	 * @param a
	 * @return
	 */
	stop(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stop();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setUserData(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setDuration(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setKeyFrames(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setName(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;

	/**
	 *
	 */
	_tempUpdateData?: /* [bool */ any | /* ?] */ any;
}

/**
 *
 */
declare interface Sa extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTileURL(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface Ta extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinates(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setIndices(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface Ua extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	addByTileLayer(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	addByTileLayer();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	highlight(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	highlight();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	unhighlight(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	unhighlight();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @return
	 */
	callFunction(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	callFunction();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLocation(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setRotation(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setScale(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setSmoothMotion(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	setTintColor(
			a?: Ua.prototype.SetTintColor0,
			b?: any,
			c?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setTintColor();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	overrideMaterial(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	overrideMaterial();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	restoreMaterial(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	restoreMaterial();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	setViewportVisible(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setViewportVisible();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	startMove(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	startMove();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	stopMove(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopMove();

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface Va extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setAutoHidePopupWindow(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface Wa extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	focusAll(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focusAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface Xa extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinates(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setMaterialPath(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setStyle(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface Ya extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(
			a?: /* N.prototype._processProps.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 */
	setRange(a?: any, b?: any, c?: any, e?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setMin(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setMax(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setSeed(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setElevation(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setPrecision(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface Za extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @return
	 */
	_checkBBox(a?: any): boolean;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @return
	 */
	add(a?: any, b?: any, c?: any, e?: any, d?: any): boolean;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @return
	 */
	update(a?: Za.prototype.Update0, b?: any, c?: any, e?: any, d?: any): boolean;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	addPoints(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	addPoints();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	removePoints(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	removePoints();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	setRange(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setRange();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	setBBox(a?: any, b?: any, c?: any): boolean;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface $a extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinates(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setHeightRange(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setIntensity(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setDepthTest(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface ab extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface bb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 */
	_fixMarkerProperty(a?: /* bb.prototype._fixMarkerProperty.!0 */ any): void;

	/**
	 *
	 * @param a
	 */
	_fixMarkerData(a?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	focusAll(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focusAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	showPopupWindow(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showPopupWindow();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hidePopupWindow(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hidePopupWindow();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAllPopupWindow(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAllPopupWindow();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAllPopupWindow(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAllPopupWindow();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setGroupId(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setUserData(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setScreenOffset(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinate(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setImagePath(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setImageSize(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setHoverImagePath(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setURL(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setText(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTextOffset(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFontSize(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFontOutlineSize(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setRange(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTextRange(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFontColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFontOutlineColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTextBackgroundColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setAutoHidePopupWindow(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setPopupURL(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setPopupSize(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setPopupOffset(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLineSize(a?: any, b?: any, c?: any): void;

	setAttachCustomObject(a?: any): Promise<any>

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLineColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLineOffset(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setPriority(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setOcclusionCull(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface cb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;


	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;


}

/**
 *
 */
declare interface db extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 */
	_fixODlineProperty(a?: /* db.prototype._fixODlineProperty.!0 */ any): void;

	/**
	 *
	 * @param a
	 */
	_fixODlineData(a?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinates(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFlowRate(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setBrightness(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTiling(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setBendDegree(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLineThickness(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setflowPointSizeScale(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLabelSizeScale(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLineShape(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLineStyle(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFlowShape(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setStartPointShape(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setEndPointShape(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setStartLabelShape(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setEndLabelShape(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface eb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface fb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 */
	_fixPolygonProperty(a?: /* fb.prototype._fixPolygonProperty.!0 */ any): void;

	/**
	 *
	 * @param a
	 */
	_fixPolygonData(a?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	glow(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	glow();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	highlight(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	highlight();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	stopHighlight(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopHighlight();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinates(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setDepthTest(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface gb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	highlight(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	highlight();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	stopHighlight(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopHighlight();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	glow(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	glow();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	stopGlow(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopGlow();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setStyle(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinates(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setHeight(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setIntensity(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTillingX(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTillingY(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface hb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 */
	_fixPolylineProperty(
			a?: /* hb.prototype._fixPolylineProperty.!0 */ any
	): void;

	/**
	 *
	 * @param a
	 */
	_fixPolylineData(a?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinates(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setStyle(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setThickness(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFlowRate(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setBrightness(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setShape(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setDepth(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface ib extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 */
	_fixRadiationPointProperty(
			a?: /* ib.prototype._fixRadiationPointProperty.!0 */ any
	): void;

	/**
	 *
	 * @param a
	 */
	_fixRadiationPointData(a?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	focusAll(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focusAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinate(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setRadius(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setRippleNumber(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setBrightness(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setAutoHeight(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface jb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	open(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	open();

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface kb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	focusAll(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focusAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinate(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setImagePath(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setImageSize(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setText(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setRange(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTextColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTextBackgroundColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTextBorderColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setShowLine(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setAutoHidePopupWindow(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setURL(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	showPopupWindow(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showPopupWindow();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hidePopupWindow(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hidePopupWindow();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAllPopupWindow(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAllPopupWindow();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAllPopupWindow(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAllPopupWindow();

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface lb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	getActorInfoFromDB(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getActorInfoFromDB();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	enableXRay(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	enableXRay();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	disableXRay(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	disableXRay();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	enableClip(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	enableClip();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	disableClip(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	disableClip();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFileName(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLocation(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setTranslation(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setRotation(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setScale(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	showActor(a?: W, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showActor();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	showActors(
			a?: /* lb.prototype.showActors.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	showActors();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	hideActor(a?: W, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideActor();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hideActors(
			a?: /* lb.prototype.hideActors.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	hideActors();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	focusActor(a?: W, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focusActor();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	focusActors(a?: W, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focusActors();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	highlightActor(a?: W, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	highlightActor();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	highlightActors(a?: W, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	highlightActors();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	stopHighlightActor(a?: W, b?: any, c?: W): (executor: () => void) => void;

	/**
	 *
	 */
	stopHighlightActor();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	stopHighlightActors(a?: W, b?: W): (executor: () => void) => void;

	/**
	 *
	 */
	stopHighlightActors();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	showAllActors(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAllActors();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hideAllActors(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAllActors();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @param h
	 * @param g
	 * @param q
	 * @return
	 */
	setStyle(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any,
			h?: any,
			g?: any,
			q?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setStyle();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @param h
	 * @return
	 */
	setCollision(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any,
			h?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setCollision();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	addModifiers(
			a?: Array</* lb.prototype.addModifiers.!0.<i> */ any>,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	addModifiers();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	addModifierByShapeFile(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	addModifierByShapeFile();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 */
	addModifier(a?: any, b?: any, c?: any, e?: any, d?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @return
	 */
	updateModifier(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	updateModifier();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	deleteModifier(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	deleteModifier();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	clearModifier(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clearModifier();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	setViewportVisible(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setViewportVisible();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	getObjectIDs(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getObjectIDs();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	getActorInfo(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getActorInfo();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	addHoleByShapeFile(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	addHoleByShapeFile();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	addHole(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	addHole();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @return
	 */
	updateHole(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	updateHole();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	deleteHole(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	deleteHole();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	clearHole(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clearHole();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	setViewHeightRange(
			a?: any,
			b?: any,
			c?: any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setViewHeightRange();

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface mb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setVideoURL(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setLocation(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setRotation(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFovy(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setAspectRatio(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setDistance(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setDepthCulling(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setFrustumColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface nb extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface ob extends N {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	add(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	add();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	update(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	update();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	delete(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	delete();

	/**
	 *
	 * @param a
	 * @return
	 */
	clear(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	clear();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	focus(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	focus();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAll();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAll(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAll();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	get(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setCoordinates(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setIndices(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setNormals(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setWaterColor(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setWaterSpeed(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setWaterUVRepeat(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setWaterDirection(a?: any, b?: any, c?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 */
	setWaterWaveScale(a?: any, b?: any, c?: any): void;

	/**
	 *
	 */
	type?: string;

	/**
	 *
	 */
	colorProps: string;

	/**
	 *
	 */
	_useBatchUpdate?: boolean;
}

/**
 *
 */
declare interface pb {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 */
	useOldDataFormat(a?: any): void;

	/**
	 *
	 * @param a
	 * @return
	 */
	get(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	_setByArray(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_setByArray();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	_setByObject(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_setByObject();

	set(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any,
			h?: any,
			g?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	set();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @param h
	 * @param g
	 * @param q
	 * @return
	 */
	lookAt(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any,
			h?: any,
			g?: any,
			q?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	lookAt();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @return
	 */
	lookAtBBox(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	lookAtBBox();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	playAnimation(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	playAnimation();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopAnimation(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopAnimation();

	/**
	 *
	 * @param a
	 * @return
	 */
	pauseAnimation(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	pauseAnimation();

	/**
	 *
	 * @param a
	 * @return
	 */
	resumeAnimation(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	resumeAnimation();

	/**
	 *
	 * @param a
	 * @return
	 */
	getAnimationList(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getAnimationList();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	getAnimationImage(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getAnimationImage();

	/**
	 *
	 * @param a
	 * @return
	 */
	moveForward(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	moveForward();

	/**
	 *
	 * @param a
	 * @return
	 */
	moveBackward(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	moveBackward();

	/**
	 *
	 * @param a
	 * @return
	 */
	moveLeft(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	moveLeft();

	/**
	 *
	 * @param a
	 * @return
	 */
	moveRight(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	moveRight();

	/**
	 *
	 * @param a
	 * @return
	 */
	moveUp(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	moveUp();

	/**
	 *
	 * @param a
	 * @return
	 */
	moveDown(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	moveDown();

	/**
	 *
	 * @param a
	 * @return
	 */
	turnLeft(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	turnLeft();

	/**
	 *
	 * @param a
	 * @return
	 */
	turnRight(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	turnRight();

	/**
	 *
	 * @param a
	 * @return
	 */
	turnUp(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	turnUp();

	/**
	 *
	 * @param a
	 * @return
	 */
	turnDown(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	turnDown();

	/**
	 *
	 * @param a
	 * @return
	 */
	stop(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stop();

	/**
	 *
	 */
	_useOldDataFormat: boolean;
}

/**
 *
 */
declare interface qb {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	screen2World(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	screen2World();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	world2Screen(
			a?: any,
			b?: any,
			c?: any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	world2Screen();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	gcs2pcs(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	gcs2pcs();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	pcs2gcs(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	pcs2gcs();
}

/**
 *
 */
declare interface rb {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @return
	 */
	start(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	start();

	/**
	 *
	 * @param a
	 * @return
	 */
	cancel(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	cancel();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	finish(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	finish();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	setParam(a?: any, b?: any, c?: any, e?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setParam();
}

/**
 *
 */
declare interface sb {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setVisibility(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setVisibility();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	show(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	show();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hide(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hide();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	enableXRay(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	enableXRay();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	disableXRay(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	disableXRay();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	showByGroupId(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showByGroupId();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	hideByGroupId(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideByGroupId();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	highlightByGroupId(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	highlightByGroupId();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	deleteByGroupId(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	deleteByGroupId();

	/**
	 *
	 * @param a
	 * @return
	 */
	get(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	get();
}

/**
 *
 */
declare interface tb {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @return
	 */
	isApiVersionMatched(): boolean;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	addImageButtons(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	addImageButtons();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	deleteImageButtons(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	deleteImageButtons();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	addAnimatedImageButtons(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	addAnimatedImageButtons();

	/**
	 *
	 * @param a
	 */
	setApiVersionReceived(a?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @param h
	 * @param g
	 * @return
	 */
	playVideo(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any,
			h?: any,
			g?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	playVideo();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	stopPlayVideo(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopPlayVideo();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	playMovie(a?: any, b?: boolean, c?: boolean): (executor: () => void) => void;

	/**
	 *
	 */
	playMovie();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopMovie(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopMovie();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	setWindowResolution(
			a?: any,
			b?: any,
			c?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setWindowResolution();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	callBPFunction(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	callBPFunction();

	/**
	 *
	 * @param a
	 * @return
	 */
	enterReportMode(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	enterReportMode();

	/**
	 *
	 * @param a
	 * @return
	 */
	exitReportMode(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	exitReportMode();

	/**
	 *
	 * @param a
	 * @return
	 */
	showAllFoliages(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	showAllFoliages();

	/**
	 *
	 * @param a
	 * @return
	 */
	hideAllFoliages(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	hideAllFoliages();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	startProcess(
			a?: any,
			b?: any,
			c?: boolean,
			e?: boolean
	): (executor: () => void) => void;

	/**
	 *
	 */
	startProcess();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	startPolygonClip(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	startPolygonClip();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopClip(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopClip();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	playAnimation(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	playAnimation();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopAnimation(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopAnimation();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @param h
	 * @param g
	 * @return
	 */
	setDateTime(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any,
			h?: any,
			g?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setDateTime();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setQueryToolState(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setQueryToolState();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setCampassVisible(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setCampassVisible();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setMainUIVisibility(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setMainUIVisibility();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setMousePickMask(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setMousePickMask();

	/**
	 *
	 */
	apiVersion: string;

	/**
	 *
	 */
	apiVersionServer: string;
}

/**
 *
 */
declare interface ub {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	setMapMode(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setMapMode();

	/**
	 *
	 * @param a
	 * @return
	 */
	getMapMode(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getMapMode();

	/**
	 *
	 * @param a
	 * @param b
	 */
	setWMTSLayerVisible(a?: any, b?: any): void;

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setwmtsLayerVisible(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setwmtsLayerVisible();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setMapURL(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setMapURL();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	highlightColor(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	highlightColor();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setHighlightColor(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setHighlightColor();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setFovX(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setFovX();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setOceanColor(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setOceanColor();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setEnableInteract(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setEnableInteract();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setInteractiveMode(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setInteractiveMode();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setCampassVisible(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setCampassVisible();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setMainUIVisibility(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setMainUIVisibility();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setMousePickMask(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setMousePickMask();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setTerrainAlpha(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setTerrainAlpha();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setEnableCameraMovingEvent(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setEnableCameraMovingEvent();
}

/**
 *
 */
declare interface vb {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	setReportMode(
			a?: any,
			b?: any,
			c?: any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setReportMode();

	/**
	 *
	 * @param a
	 * @return
	 */
	getReportMode(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getReportMode();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @return
	 */
	setControlMode(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setControlMode();

	/**
	 *
	 * @param a
	 * @return
	 */
	getControlMode(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getControlMode();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setPostProcessMode(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setPostProcessMode();

	/**
	 *
	 * @param a
	 * @return
	 */
	getPostProcessMode(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getPostProcessMode();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	setCameraMode(
			a?: any,
			b?: any,
			c?: any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setCameraMode();

	/**
	 *
	 * @param a
	 * @return
	 */
	getCameraMode(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getCameraMode();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	setMapMode(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setMapMode();

	/**
	 *
	 * @param a
	 * @return
	 */
	getMapMode(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getMapMode();
}

/**
 *
 */
declare interface wb {
	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	startPolygonClip(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	startPolygonClip();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @return
	 */
	startPlaneClip(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startPlaneClip();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @return
	 */
	startVolumeClip(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startVolumeClip();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopClip(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopClip();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopPolygonClip(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopPolygonClip();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopPlaneClip(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopPlaneClip();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopVolumeClip(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopVolumeClip();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	setMeasurement(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setMeasurement();

	/**
	 *
	 * @param a
	 * @return
	 */
	startMeasurement(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	startMeasurement();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopMeasurement(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopMeasurement();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	lineIntersect(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	lineIntersect();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	linesIntersect(
			a?: any,
			b?: any,
			c?: any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	linesIntersect();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	startGeometryEdit(a?: any, b?: any, c?: any): (executor: () => void) => void;

	/**
	 *
	 */
	startGeometryEdit();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopGeometryEdit(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopGeometryEdit();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	startSkylineAnalysis(
			a?: /* wb.prototype.startSkylineAnalysis.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startSkylineAnalysis();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopSkylineAnalysis(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopSkylineAnalysis();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	exportSkyline(
			a?: any,
			b?: any,
			c?: /* wb.prototype.exportSkyline.!2 */ any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	exportSkyline();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	startViewshedAnalysis(
			a?: /* wb.prototype.startViewshedAnalysis.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startViewshedAnalysis();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopViewshedAnalysis(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopViewshedAnalysis();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	startVisiblityAnalysis(
			a?: /* wb.prototype.startVisiblityAnalysis.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startVisiblityAnalysis();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopVisiblityAnalysis(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopVisiblityAnalysis();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	startViewDomeAnalysis(
			a?: /* wb.prototype.startViewDomeAnalysis.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startViewDomeAnalysis();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopViewDomeAnalysis(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopViewDomeAnalysis();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	startCutFillAnalysis(
			a?: /* wb.prototype.startCutFillAnalysis.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startCutFillAnalysis();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopCutFillAnalysis(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopCutFillAnalysis();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	startSunshineAnalysis(
			a?: /* wb.prototype.startSunshineAnalysis.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startSunshineAnalysis();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopSunshineAnalysis(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopSunshineAnalysis();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	startTerrainSlopeAnalysis(
			a?: /* wb.prototype.startTerrainSlopeAnalysis.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startTerrainSlopeAnalysis();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopTerrainSlopeAnalysis(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopTerrainSlopeAnalysis();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	startContourLineAnalysis(
			a?: /* wb.prototype.startContourLineAnalysis.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startContourLineAnalysis();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopContourLineAnalysis(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopContourLineAnalysis();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	startFloodFill(
			a?: /* wb.prototype.startFloodFill.!0 */ any,
			b?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	startFloodFill();

	/**
	 *
	 * @param a
	 * @return
	 */
	stopFloodFill(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	stopFloodFill();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	replaceTextureByVideo(
			a?: any,
			b?: any,
			c?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	replaceTextureByVideo();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	replaceTextureByImage(
			a?: any,
			b?: any,
			c?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	replaceTextureByImage();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @return
	 */
	replaceTextureByUrl(
			a?: any,
			b?: any,
			c?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	replaceTextureByUrl();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	restoreTexture(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	restoreTexture();
}

/**
 *
 */
declare interface xb {
	[x: string]: any;

	/**
	 *
	 * @param a
	 */
	new(a?: da);

	/**
	 *
	 * @param a
	 * @return
	 */
	getParams(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getParams();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	_setParam(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	_setParam();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @param d
	 * @param h
	 * @param g
	 * @return
	 */
	setDateTime(
			a?: any,
			b?: any,
			c?: any,
			e?: any,
			d?: any,
			h?: any,
			g?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setDateTime();

	/**
	 *
	 * @param a
	 * @return
	 */
	getDateTime(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	getDateTime();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	simulateTime(
			a?: any,
			b?: any,
			c?: any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	simulateTime();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setCloudThickness(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setCloudThickness();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setCloudDensity(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setCloudDensity();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	setRainParam(
			a?: any,
			b?: any,
			c?: any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setRainParam();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	setSnowParam(
			a?: any,
			b?: any,
			c?: any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setSnowParam();

	/**
	 *
	 * @param a
	 * @return
	 */
	disableRainSnow(a?: any): (executor: () => void) => void;

	/**
	 *
	 */
	disableRainSnow();

	/**
	 *
	 * @param a
	 * @param b
	 * @param c
	 * @param e
	 * @return
	 */
	setFogParam(
			a?: any,
			b?: any,
			c?: any,
			e?: any
	): (executor: () => void) => void;

	/**
	 *
	 */
	setFogParam();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setSunIntensity(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setSunIntensity();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setMoonIntensity(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setMoonIntensity();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setAmbientLightIntensity(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setAmbientLightIntensity();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setTemperature(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setTemperature();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setShadowQuality(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setShadowQuality();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setShadowDistance(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setShadowDistance();

	/**
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	setDarkMode(a?: any, b?: any): (executor: () => void) => void;

	/**
	 *
	 */
	setDarkMode();
}
