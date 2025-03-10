/*
 * @Author: your name
 * @Date: 2021-08-31 14:22:31
 * @LastEditTime: 2022-05-15 11:22:56
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: In User Settings Edit
 * @FilePath: \aircityinit\src\components\player\connect.js
 */
//5.0管理命令
const ManageCommand = {
  Login: -1, //登录，只有登录成功以后，下面的命令才能调用

  GetStreamerPort: 0, //获取Streamer端口号
  GetStatus: 1, //实时获取运行状态
  GetInstanceList: 100, //获取实例列表
  GetInstanceInformation: 101, //获取指定实例的详细信息
  GetOneFreeInstance: 102, //获取一个空闲的实例信息（正在运行或者尚未启动）
  GetOneFreeInstanceRunning: 102, //获取一个空闲的实例信息（正在运行的实例）
  SetInstanceStartupInfo: 104, //设置实例运行参数并启动
  StopInstance: 105, //停止实例运行
  UnlockInstance: 106, //取消锁定
  SetInstanceDefaultParams: 107, //设置实例默认参数
  KickPlayer: 200, //踢出
  GetProjectList: 201, //获取工程列表`
};

//5.0管理命令的执行结果
const ManageResult = {
  OK: 0,
  PermissionDenied: 1, //没有权限
  NoFreeInstance: 2, //没有可用的实例
  InstanceNotFound: 3, //没有找到指定的实例
  InstanceNotRunning: 4, //指定的实例没有在运行
  InvalidParameters: 5, //参数无效
  ManagerNotFound: 6, //没有找到实例所属的管理工具
  StartInstance_ExeNotExist: 800, //可执行文件不存在
  StartInstance_ProjectPathNotExist: 801, //工程文件不存在
  StartInstance_NoChange: 802, //没有改变
  StartInstance_ProcessStartFailed: 803, //进程启动失败
  StartInstance_Locked: 804, //无法修改已锁定的实例
};

// 获取ws地址
const getWebSocketUrl = () => {
  const Url = HostConfig.PlayerMapping
    ? HostConfig.PlayerMapping
    : HostConfig.Manager;

  return { url: `ws://${Url}` };
};
export { ManageCommand, ManageResult, getWebSocketUrl };
