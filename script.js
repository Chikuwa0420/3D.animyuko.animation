/*document.addEventListener("DOMContentLoaded", () => {
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
});*/
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector('#ar-target');
  const avatar = document.querySelector('#avatar');
  
  // ★3Dモデルが読み込まれたら、中身のアニメーション名をコンソールにすべて表示する
  avatar.addEventListener('model-loaded', () => {
    // A-Frameの3Dオブジェクトからアニメーションデータを取得
    const mesh = avatar.getObject3D('mesh');
    if (mesh && mesh.animations) {
      const names = mesh.animations.map(clip => clip.name);
      console.log("【重要】GLB内にある正確なアニメーション名一覧はこちらです↓");
      console.log(names);
    }
  });

  // いったん仮の名前を入れておきます（確認後に書き換えます）
  const animations = ['save.action', 'head.action'];
  let currentAnimationIndex = 0;

  window.addEventListener('click', () => {
    currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
    const nextClip = animations[currentAnimationIndex];
    avatar.setAttribute('animation-mixer', `clip: ${nextClip}; loop: repeat;`);
    console.log(`アニメーションを ${nextClip} に切り替えました。`);
  });

  target.addEventListener("targetFound", event => {
    console.log("マーカー（logo）を認識しました。");
  });

  target.addEventListener("targetLost", event => {
    console.log("マーカーを見失いました。");
  });
});