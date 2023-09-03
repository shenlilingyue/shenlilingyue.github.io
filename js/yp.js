function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
    audio.onended = function() {
      audio.pause();
    };
  }
  // 定义 playAudio1() 函数
function playAudio1() {
    // 获取第一个音频标签
    var audio1 = document.getElementById("myAudio1");
    // 如果音频正在播放，则暂停
    if (audio1.paused == false) {
      audio1.pause();
    } else {
      // 否则，播放音频，并且暂停其他音频
      audio1.play();
      document.getElementById("myAudio2").pause();
      document.getElementById("myAudio3").pause();
    }
  }
  
  // 定义 playAudio2() 函数
  function playAudio2() {
    // 获取第二个音频标签
    var audio2 = document.getElementById("myAudio2");
    // 如果音频正在播放，则暂停
    if (audio2.paused == false) {
      audio2.pause();
    } else {
      // 否则，播放音频，并且暂停其他音频
      audio2.play();
      document.getElementById("myAudio1").pause();
      document.getElementById("myAudio3").pause();
    }
  }
  
  // 定义 playAudio3() 函数
  function playAudio3() {
    // 获取第三个音频标签
    var audio3 = document.getElementById("myAudio3");
    // 如果音频正在播放，则暂停
    if (audio3.paused == false) {
      audio3.pause();
    } else {
      // 否则，播放音频，并且暂停其他音频
      audio3.play();
      document.getElementById("myAudio1").pause();
      document.getElementById("myAudio2").pause();
    }
  }