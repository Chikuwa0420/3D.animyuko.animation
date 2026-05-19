document.addEventListener("DOMContentLoaded", () => {
  // ターゲットエンティティの取得
  const target = document.querySelector('#ar-target');
  
  // HTMLに <div id="status-message"></div> などを追加した場合のUI制御用
  // const statusMessage = document.querySelector('#status-message');

  // マーカーを認識した（カメラに映った）時のイベント
  target.addEventListener("targetFound", event => {
    console.log("マーカー（logo）を認識しました。");
    /*
    if (statusMessage) {
      statusMessage.textContent = "マーカーを認識しました！";
      statusMessage.style.display = 'block';
    }
    */
  });

  // マーカーを見失った（カメラから外れた）時のイベント
  target.addEventListener("targetLost", event => {
    console.log("マーカーを見失いました。");
    /*
    if (statusMessage) {
      statusMessage.style.display = 'none';
    }
    */
  });
});