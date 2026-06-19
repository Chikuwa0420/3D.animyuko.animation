
document.addEventListener("DOMContentLoaded", () => {
  // ターゲットエンティティとアバターエンティティの取得
  const target = document.querySelector('#ar-target');
  const avatar = document.querySelector('#avatar');
  
  // 今後追加していくアニメーションのアクション名を配列に格納
  const animations = ['save.shape', 'head.shape'];
  
  // 現在再生しているアニメーションの配列インデックス
  let currentAnimationIndex = 0;

  // 画面がクリック（またはタップ）された時のイベント
  window.addEventListener('click', () => {
    // インデックスを1進める
    currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
    
    // 次に再生するアニメーション名を取得
    const nextClip = animations[currentAnimationIndex];
    
    // アバターの animation-mixer 属性を上書きしてアニメーションを切り替える
    avatar.setAttribute('animation-mixer', `clip: ${nextClip}; loop: repeat;useRegExp: true;`);
    
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

/*
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector('#ar-target');
  const avatar = document.querySelector('#avatar');
  
  // スマホ画面上に文字を表示するためのデバッグ用エリアを動的に作成
  const debugInfo = document.createElement('div');
  debugInfo.style.position = 'fixed';
  debugInfo.style.top = '0';
  debugInfo.style.left = '0';
  debugInfo.style.width = '100%';
  debugInfo.style.background = 'rgba(0, 0, 0, 0.8)';
  debugInfo.style.color = '#fff';
  debugInfo.style.padding = '12px';
  debugInfo.style.fontSize = '14px';
  debugInfo.style.zIndex = '9999';
  debugInfo.style.boxSizing = 'border-box';
  debugInfo.style.wordBreak = 'break-all';
  debugInfo.innerHTML = 'モデル読み込み中...';
  document.body.appendChild(debugInfo);

  // 3Dモデルが読み込まれたら、GLB内のアニメーション名を画面に表示する
  avatar.addEventListener('model-loaded', () => {
    const mesh = avatar.getObject3D('mesh');
    if (mesh && mesh.animations) {
      const names = mesh.animations.map(clip => clip.name);
      
      // 画面上の黒い帯に名前を書き出す
      debugInfo.innerHTML = `
        <strong>【GLB内の正しいアニメーション名】</strong><br>
        ${names.join('<br>')}<br><br>
        <span style="color: #ffeb3b;">※画面タップで切り替わります</span>
      `;
    } else {
      debugInfo.innerHTML = 'モデルは読み込まれましたが、アニメーションが見つかりません。';
    }
  });

  // 一旦仮の名前を入れておきます（確認後にここを書き換えます）
  const animations = ['save.action', 'head.action'];
  let currentAnimationIndex = 0;

  // スマホでのタップとPCでのクリック両方に対応
  const changeAnimation = () => {
    currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
    const nextClip = animations[currentAnimationIndex];
    avatar.setAttribute('animation-mixer', `clip: ${nextClip}; loop: repeat;`);
  };

  window.addEventListener('click', changeAnimation);
  window.addEventListener('touchstart', changeAnimation); // スマホ用

  target.addEventListener("targetFound", event => {
    console.log("マーカー（logo）を認識しました。");
  });

  target.addEventListener("targetLost", event => {
    console.log("マーカーを見失いました。");
  });
});*/