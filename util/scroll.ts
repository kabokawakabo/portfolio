//// 参考: https://qumeru.com/magazine/277#:~:text=%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%82%92%E7%A6%81%E6%AD%A2%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95,%E3%81%B0%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E5%87%BA%E6%9D%A5%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82
/////// 上だと mousewheel にしていたが、Event型の多さ & mozillaで非推奨だったので wheelに変更



// スクロールを禁止にする関数
type ScrollEvent = TouchEvent | WheelEvent // mousewheelの型が多すぎる...
function disableScroll(event: ScrollEvent) {
    event.preventDefault();
}
  
// スクロール禁止
export const disallowScroll = ()=>{
    // イベントと関数を紐付け
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('wheel', disableScroll, { passive: false });
}

export const allowScroll = ()=>{
    // イベントと関数を紐付け  
    document.removeEventListener('touchmove', disableScroll);
    document.removeEventListener('wheel', disableScroll);
}