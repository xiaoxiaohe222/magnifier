let abbreviate = document.querySelector(".abbreviate");
let detail = document.querySelector(".detail");
let mask = document.querySelector(".mask");
let bigImg = document.querySelector(".big");
// 左边的图是200*200 右边的是300*300 mask是80*80
// 通过比例关系计算大图的宽和高都为750和750
bigImg.style.width = '750px'
bigImg.style.height = '750px'

// 定义鼠标移动过程中计算盒子的位置的函数
function computedMove(e) {
    // 获取鼠标相对于适口的位置
    let mX = e.clientX;
    let mY = e.clientY;
    // 获取盒子的位置
    let boxLeft = abbreviate.getBoundingClientRect().left;
    let boxTop = abbreviate.getBoundingClientRect().top;
    // mask的宽度一半
    let halfWidth = mask.clientWidth / 2;
    let halfHeight = mask.clientHeight / 2;

    // mask遮罩层的left和top
    let disX = mX - boxLeft - halfWidth;
    let disY = mY - boxTop - halfHeight;
    if (disX < 0) {
        disX = 0
    }
    if (disY < 0) {
        disY = 0
    }
    if (disX > abbreviate.clientWidth - mask.clientWidth) {
        disX = abbreviate.clientWidth - mask.clientWidth
    }
    if (disY > abbreviate.clientHeight - mask.clientHeight) {
        disY = abbreviate.clientHeight - mask.clientHeight
    }

    mask.style.left = disX + 'px'
    mask.style.top = disY + 'px'

    // 大图移动的方向和小图相反 且移动的距离和小图有一定的比例关系
    bigImg.style.left = -disX * (750 / 200) + 'px'
    bigImg.style.top = -disY * (750 / 200) + 'px'


}

abbreviate.addEventListener('mouseenter', (e) => {
    mask.style.display = 'block'
    detail.style.display = 'block'
    computedMove(e)
})
abbreviate.addEventListener('mouseleave', () => {
    mask.style.display = 'none'
    detail.style.display = 'none'
})
abbreviate.addEventListener('mousemove', (e) => {
    computedMove(e)
})

