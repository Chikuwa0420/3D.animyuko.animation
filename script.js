document.addEventListener("DOMContentLoaded", () => {
  // ターゲットエンティティとアバターエンティティの取得
  const target = document.querySelector('#ar-target');
  const avatar = document.querySelector('#avatar');
  
  // 今後追加していくアニメーションのアクション名を配列に格納
  const animations = ['save.action', 'head.action'];
  
  // 現在再生しているアニメーションの配列インデックス
  let currentAnimationIndex = 0;

  // 画面がクリック（またはタップ）された時のイベント
  window.addEventListener('click', () => {
    // インデックスを1進める
    currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
    
    // 次に再生するアニメーション名を取得
    const nextClip = animations[currentAnimationIndex];
    
    // アバターの animation-mixer 属性を上書きしてアニメーションを切り替える
    avatar.setAttribute('animation-mixer', `clip: ${nextClip}; loop: repeat;`);
    
    console.log(`アニメーションを ${nextClip} に切り替えました。`);
  });

  // マーカーを認識した（カメラに映った）時のイベント
  target.addEventListener("targetFound", event => {
    console.log("マーカー（logo）を認識しました。");
  });

  // マーカーを見失った（カメラから外れた）時のイベント
  target.addEventListener("targetLost", event => {
    console.log("マーカーを見失いました。");
  });
});