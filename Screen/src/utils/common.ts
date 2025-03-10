import PopupManager from "element-plus/lib/utils/popup-manager.js";

/**
 * 获取下一个z-index值
 */
const nextZIndex = function () {
	return PopupManager.nextZIndex();
};
export {nextZIndex, PopupManager};
