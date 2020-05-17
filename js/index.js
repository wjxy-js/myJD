//===================
//leftSide
//获取需要操作的DOM元素
//获取大盒子
let container = document.querySelector('.container'),
    //包括四个图片的盒子
    wrapper = container.querySelector('.wrapper'),
    //每个图片的盒子
    slierList = wrapper.querySelectorAll('.slider'),
    //获取ul
    pagination = container.querySelector('.pagination'),
    //li
    paginationList = pagination.querySelectorAll('li'),
    //获取左按钮
    changeLeft = container.querySelector('.changeLeft'),
    changeRight = container.querySelector('.changeRight');
//定义公共数据
// step 步长 控制当前展示的是一个slider(索引)
// interval  间隔时间因子  控制多久切换一次
//autoTimer 存储自动轮播的定时器
//len 存储的是slider的个数(包含克隆的那个)
let step = 0;
let interval = 3000;
let autoTimer = null;
let len = slierList.length;
console.log();


/* // 克隆在JS中动态实现
let slider1 = wrapper.querySelector(".slider"),
	sliderClone = slider1.cloneNode(true); //=>TRUE当前元素和其中的内容都全部克隆一份
wrapper.appendChild(sliderClone); */

//自动轮播的方法
function autoMove() {
    if (step === (len - 1)) {
        // 当到达指定间隔时间再一次执行auto-move的时候,我们需要验证当前是否已经为最后一张(也就是克隆的第一张),如果是,我们则需要让期立即运动到真实的第一张
        step = 0;
        wrapper.style.transitionDuration = '0s';//没有动画效果
        wrapper.style.left = '0px';
        //基于获取元素的样式来后中断渲染队列的存储 ,让立即回到第一张的操作渲染
        wrapper.offsetWidth;
    }
    step++;
    wrapper.style.transitionDuration = '0.3s';
    wrapper.style.left = -step * 600 + 'px';
    focus();
}
//焦点对齐
function focus() {
    let tempStep = step;
    tempStep == (len - 1) ? tempStep = 0 : null;
    [].forEach.call(paginationList, (item, index) => {
        if (index === tempStep) {
            item.className = 'active';
            return;
        }
        item.className = '';
    })
    //循环焦点的每一项,根据焦点的索引和当前步长做对比,控制哪一个焦点选中
    // [].forEach.call(paginationList, (item, index) => {
    //     if (step === (len - 1) & index === 0) {
    //         item.className = 'active';
    //     }
    //     if (index === step) {
    //         item.className = 'active';
    //         return;
    //     }
    //     item.className = '';
    // })
}
//开始自动轮播
autoTimer = setInterval(autoMove, interval);

//鼠标进入到container停止自动轮播,离开后自动轮播继续
container.onmouseenter = function () {
    clearInterval(autoTimer)
}
container.onmouseleave = function () {
    autoTimer = setInterval(autoMove, interval);
};

//点击焦点实现切换

[].forEach.call(paginationList, (item, index) => {
    item.onclick = function () {
        //如果点击的索引正好是现在展示的这一张,则无需在处理了(特殊项;点击的是第一个焦点,并且当前正好展示的也是克隆的这个slider项)
        if (index === step || (index === 0 && step === (len - 1))) return;
        //点击项的索引是谁,就让wrapper切换到哪一张
        step = index;
        wrapper.style.transitionDuration = '0.3s';
        wrapper.style.left = -step * 600 + 'px';
        //焦点对齐
        focus();
    };
});

//点击左右按钮实现切换
//右边按钮和自动轮播一致
changeRight.onclick = autoMove;
changeLeft.onclick = function () {
    //如果当前已经是真实的第一张,在减减左侧就没东西了,此时我们让让其快速移动到克隆的第一张(末尾);然后紧接着运动到倒数第二张
    if (step === 0) {
        step = len - 1;
        wrapper.style.transitionDuration = '0s';
        wrapper.style.left = -step * 600 + 'px';
        wrapper.offsetWidth;
    }
    step--;
    wrapper.style.transitionDuration = '0.3s';
    wrapper.style.left = -step * 600 + 'px';
    focus();
};


