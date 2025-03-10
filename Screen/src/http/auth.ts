/*
 * @Author: your name
 * @Date: 2021-08-02 00:30:53
 * @LastEditTime: 2021-12-01 15:54:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \aircityinit\src\utils\auth.js
 */
import Cookies from "js-cookie";

const TokenKey = "token";

const getToken = () => {
	return Cookies.get(TokenKey);
};

const setToken = (token: any) => {
	return Cookies.set(TokenKey, token);
};

const removeToken = () => {
	return Cookies.remove(TokenKey);
};
export {getToken, setToken, removeToken};
