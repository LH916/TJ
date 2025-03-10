<!--
 * @Author: your name
 * @Date: 2021-10-21 17:22:28
 * @LastEditTime: 2022-02-23 10:06:55
 * @LastEditors: zhc
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts\src\components\player\player.vue
-->
<!-- 加载视频流  监控视频流组件 -->
<template>
  <div id="player"></div>
  <!--    视频背景-->
<!--  <video class="video-background" preload="auto" loop playsinline autoplay :src="bgVideo"-->
<!--         muted="muted"></video>-->
  <!--  背景显示摄像头输入画面-->
  <!--  <video class="video-background"-->
  <!--         ref="video"-->
  <!--         autoplay-->

  <!--         style="background: #d9d9d9"-->
  <!--  ></video>-->

  <transition appear name="custom-classes-transition"
              enter-active-class="animate__animated animate__faster  animate__fadeIn "
              leave-active-class="animate__animated animate__fast animate__fadeOut ">
    <div id="appLoading" v-if="loading">
      <div id="loading-wrapper">
        <div class="loading-gif"></div>
        <div id="loading-text">{{ loadingText }}</div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import {ManageCommand, getWebSocketUrl} from './connect'
import {onMounted, onUnmounted, ref} from 'vue'
import {ElMessage, ElMessageBox} from 'element-plus'

// import bgVideo from '@/assets/videos/jiqigou.mp4'

import OnReady from '@/components/aircityutils/onReady'
import OnEvent from '@/components/aircityutils/Event'
import {useAirCityStore} from '@/stores/aircity'

const AirCitystore = useAirCityStore()
let authorization = ref()
let webSocket = ref()
let aircityApi = ref()
let aircityPlayer = ref()
const loading = ref(true)
let count = ref(5)
const loadingText = ref('系统正在加载......')
let reconnectionTimer: null | number = null
let reconnectionCount = 0
const video = ref();

const reconnectionHandler = () => {
  if (count.value === 0) {
    loadingText.value = '正在重新连接...'
    clearInterval(reconnectionTimer || 0)
    reconnectionTimer = null
    initInterface()
    reconnectionCount += 1
  } else {
    loadingText.value = `${count.value--}秒后重新连接`
  }
}
// const connect = () => {
// //   const sendData = (o: any) => {
// //     //5.0集群版cloud需要在发送之前需要附加上授权信息以进行权限验证
// //     if (authorization.value) {
// //       o.authorization = authorization.value;
// //     }
// //     webSocket && webSocket.value.send(JSON.stringify(o));
// //   };
// //   // 连接websocket
// //   webSocket.value = new WebSocket(getWebSocketUrl().url);
// //   webSocket.value.onopen = () => {
// //     console.log("%c 已连接WebSocket!", "color: green");
// //     // 5.0版本需登录才可进行实例管理
// //     // 连接成功时进行登录
// //     sendData({
// //       command: ManageCommand.Login,
// //       userName: userInfo ? userInfo.UserName : "admin",
// //       password: userInfo ? userInfo.PassWord : "admin",
// //     });
// //   };
// //   webSocket.value.onmessage = (event: { data: string }) => {
// //     let o = JSON.parse(event.data);
// //     console.log(o, "oooo");
// //     //检查登录是否过期
// //     if (o.result == 1) {
// //       ElMessage({
// //         message: "登录失败或者登录信息已过期，请重新登录！",
// //         type: "error",
// //       });
// //       return;
// //     }
// //     switch (o.command) {
// //       case -1:
// //         {
// //           if (o.result == 0) {
// //             console.log("%c 登录成功!", "color: green");
// //             authorization.value = o.authorization; //保存验证信息
// //             sendData({
// //               command: ManageCommand.GetOneFreeInstanceRunning,
// //               details: true,
// //               connections: true,
// //             });
// //           }
// //         }
// //         break;
// //       case 102:
// //         // 这里的返回是获取到空闲实例（或者正在运行的实例）
// //         // 在这里进行实例的连接
// //         /**
// //          * @5.0版本的实例连接:
// //          */
// //         initInterface();
// //         window.addEventListener("resize", onResize);
// //         window.addEventListener("beforeunload", beforeunloadHandler, false);
// //         break;
// //     }
// //   };
// };
const initInterface = () => {
  let log = () => {
  }
  //onReady
  let _onReady = () => {
    OnReady()
    loading.value = false
  }
  //onEvent
  let _onEvent = (e: any) => {
    OnEvent(e)
  }
  let _onClose = (e: { code: number; reason: string }) => {
    if (reconnectionTimer) {
      clearInterval(reconnectionTimer)
    }
    console.log(e, 'close')
    loading.value = true
    loadingText.value = e.reason
    //如果没有指定工程文件，则加上pid参数，pid=-1让服务器随便指定一个工程文件
    //如果想访问指定的工程文件，则明确指定pid, 例如pid=3
    if (e && e.code == 4009) {
      if (location.href.indexOf('?') == -1) location.href += '?pid=-1'
      else location.href += '&pid=-1'
    } else if (e?.code === 4100) {
      loadingText.value = '已被管理员踢出'
      ElMessageBox.confirm('已被管理员踢出，是否重连？ ', '提示', {
        confirmButtonText: '重连',
        cancelButtonText: '取消',
        type: 'warning'
      })
          .then(() => {
            // connect()
            loadingText.value = '正在重新连接...'
          })
          .catch(() => {
            loadingText.value = '已被管理员踢出'
          })
    } else {
      count.value = 3
      reconnectionTimer = setInterval(reconnectionHandler, 1000)
    }
    loading.value = true
    AirCitystore.SetIsOnReady(false)
  }
  // _onApiVersion
  let _onApiVersion = (e: any) => {
    console.log(e, '_onApiVersion')
  }
  // onloaded
  let _onloaded = () => {
    onResize()
  }
  //AirCityAPI初始化选项
  let apiOptions = {
    onReady: _onReady,
    onApiVersion: _onApiVersion,
    onEvent: _onEvent,
    onLog: log,
    useColorLog: false //仅用于SDK测试页面，二次开发请设置为false
  }

  //AirCityPlayer
  let options
  if (document.getElementById('player')) {
    //需要显示视频流
    options = {
      iid: (window as any).Common_config.iid,
      domId: 'player',
      apiOptions: apiOptions,
      showMarker: true,
      showStartupInfo: true,
      keyEventReceiver: 'document', //三维键盘交互事件接收者，可选的值：document / video / none
      // onclose: _onClose,
      // onloaded: _onloaded
    }
  }
  loading.value = false
  aircityPlayer.value = new AirCityPlayer(HostConfig.Player, options)
  AirCitystore.SetAirCityPlayer(aircityPlayer.value)
  aircityApi.value = aircityPlayer.value.getAPI()
  AirCitystore.SetAirCityApi(aircityApi.value)
}
// const callCamera = () => {
//   // callCamera
//   navigator.mediaDevices
//       .getUserMedia({
//         audio: true,  //开启音频
//         video: true,  //开启视频
//       })
//       .then((success) => {
//         const videoTracks = success.getVideoTracks();
//         console.log(success);
//         console.log(videoTracks);
//         // 摄像头开启成功
//         video.value.srcObject = success;
//
//         // 实时拍照效果
//         video.value.play();
//
//       })
//       .catch((error) => {
//         console.log("错误 ", error)
//         // console.error("摄像头开启失败，请检查摄像头是否可用！");
//       });
// }

const onResize = () => {
  console.log(aircityPlayer, 'onResize')
  aircityPlayer.value.ui_onResize && aircityPlayer.value.ui_onResize()
  aircityPlayer.value.resize && aircityPlayer.value.resize()
}
const beforeunloadHandler = () => {
  aircityApi.value.reset()
}
const mousedown = (e: any) => {
  // console.log(e, "mousedownmousedown");
}
const wheel = (e: any) => {
  // console.log(e, "wheelwheel");
}

const bg = ref('bgVideo')

onMounted(() => {
  initInterface()
  // callCamera()

})

onUnmounted(() => {
  aircityPlayer.value && aircityPlayer.value.destroy()
  aircityApi.value && aircityApi.value.destroy()
  window.removeEventListener('resize', onResize)
  window.removeEventListener('beforeunload', beforeunloadHandler)
})
</script>
<style lang="scss" scoped>
.video-background {
  position: absolute;
  left: 50%;
  top: 50%;
  /*保证视频内容始终居中*/
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  /*保证视频充满屏幕*/
  object-fit: fill;
}

#player {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;

  //background: url("~@/assets/images/bg3.png") no-repeat center/cover;

}

#appLoading {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2002;
  opacity: 0.5;

  #loading-wrapper {
    position: relative;
    @include Width(800);
    @include wHeight(190);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .loading-gif {
      background: url('~@/assets/images/loading/loading.gif') no-repeat;
      @include Width(800);
      @include wHeight(160);
      background-size: 100% 100%;
    }

    #loading-text {
      position: absolute;
      @include Top(160);
      z-index: 111111;
      @include Width(800);
      @include wHeight(30);
      @include LineHeight(30);
      text-align: center;
      @include FontSize(12);
      color: #50a7d0;
      font-family: Tencent, serif;
    }
  }
}
</style>
