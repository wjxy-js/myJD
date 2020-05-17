// new Swiper([selector],[options])
let swp = new Swiper('#BANNER1', {
    // 控制切换方向 horizontal水平  vertical垂直
    direction: 'horizontal',
    // 初始化展示SLIDE的索引
    initialSlide: 0,
    // 控制每一张切换的时间(MS)
    speed: 300,
    // 循环切换（实现无缝衔接，原理：第一张克隆一份放到末尾位置，最后一张克隆一份放到最开始的位置，最后的SLIDE数量比真实多两个 => (4) 1 2 3 4 (1)）
    loop: true,
    // 控制自动切换
    // autoplay: true,  
    autoplay: {
        // 间隔多久切换一次
        delay: 3000,
        // 用户手动切换为SWIPER还可以继续自动切换
        disableOnInteraction: false
    },
    // 配置分页器的信息
    pagination: {
        // 配置分页器的容器
        el: '.swiper-pagination',
        // 配置它的类型
        type: 'bullets',
        // 控制点击分页器是否可以实现切换
        clickable: true
    },
    // 配置切换按钮的信息
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // 配置切换效果 slide/fade/cube/coverflow/flip
    effect: 'fade',
    // 支持强大的生命周期函数（钩子函数）：可以在操作的过程中自己编写一些想要的程序，从而实现更为复杂的效果
    
});

let swp1 = new Swiper('#BANNER2', {
    
    // 控制切换方向 horizontal水平  vertical垂直
    direction: 'horizontal',
    // 初始化展示SLIDE的索引
    initialSlide: 0,
    // 控制每一张切换的时间(MS)
    speed: 300,
    // 循环切换（实现无缝衔接，原理：第一张克隆一份放到末尾位置，最后一张克隆一份放到最开始的位置，最后的SLIDE数量比真实多两个 => (4) 1 2 3 4 (1)）
    loop: true,
    // 控制自动切换
    // autoplay: true,  
    autoplay: {
        // 间隔多久切换一次
        delay: 1000,
        // 用户手动切换为SWIPER还可以继续自动切换
        disableOnInteraction: false
    },
    // 配置分页器的信息
    pagination: {
        // 配置分页器的容器
        el: '.swiper-pagination',
        // 配置它的类型
        type: 'bullets',
        // 控制点击分页器是否可以实现切换
        clickable: true
    },
    // 配置切换按钮的信息
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // 配置切换效果 slide/fade/cube/coverflow/flip
    effect: 'fade',
    // 支持强大的生命周期函数（钩子函数）：可以在操作的过程中自己编写一些想要的程序，从而实现更为复杂的效果
    
});
let swp2 = new Swiper('#BANNER3', {
    
    // 控制切换方向 horizontal水平  vertical垂直
    direction: 'horizontal',
    // 初始化展示SLIDE的索引
    initialSlide: 0,
    // 控制每一张切换的时间(MS)
    speed: 300,
    // 循环切换（实现无缝衔接，原理：第一张克隆一份放到末尾位置，最后一张克隆一份放到最开始的位置，最后的SLIDE数量比真实多两个 => (4) 1 2 3 4 (1)）
    loop: true,
    // 控制自动切换
    // autoplay: true,  
    autoplay: {
        // 间隔多久切换一次
        delay: 2000,
        // 用户手动切换为SWIPER还可以继续自动切换
        disableOnInteraction: false
    },
    // 配置分页器的信息
    pagination: {
        // 配置分页器的容器
        el: '.swiper-pagination',
        // 配置它的类型
        type: 'bullets',
        // 控制点击分页器是否可以实现切换
        clickable: true
    },
    // 配置切换按钮的信息
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // 配置切换效果 slide/fade/cube/coverflow/flip
    effect: 'slide',
    // 支持强大的生命周期函数（钩子函数）：可以在操作的过程中自己编写一些想要的程序，从而实现更为复杂的效果
    
});
let swp3 = new Swiper('#BANNER4', {
    
    // 控制切换方向 horizontal水平  vertical垂直
    direction: 'horizontal',
    // 初始化展示SLIDE的索引
    initialSlide: 0,
    // 控制每一张切换的时间(MS)
    speed: 300,
    // 循环切换（实现无缝衔接，原理：第一张克隆一份放到末尾位置，最后一张克隆一份放到最开始的位置，最后的SLIDE数量比真实多两个 => (4) 1 2 3 4 (1)）
    loop: true,
    // 控制自动切换
    // autoplay: true,  
    autoplay: {
        // 间隔多久切换一次
        delay: 2000,
        // 用户手动切换为SWIPER还可以继续自动切换
        disableOnInteraction: false
    },
    // 配置分页器的信息
    pagination: {
        // 配置分页器的容器
        el: '.swiper-pagination',
        // 配置它的类型
        type: 'bullets',
        // 控制点击分页器是否可以实现切换
        clickable: true
    },
    // 配置切换按钮的信息
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // 配置切换效果 slide/fade/cube/coverflow/flip
    effect: 'slide',
    // 支持强大的生命周期函数（钩子函数）：可以在操作的过程中自己编写一些想要的程序，从而实现更为复杂的效果
    
});