/*
 * 倒计时抢购要注意的细节知识点：
 *    1.计算剩余多久需要的时间不能是客户端本机的时间，需要获取服务器的时间（基于AJAX请求向服务器获取，但是也不能每隔1秒都去请求一次【我们是第一次加载页面的时候，从服务器获取服务器时间，存储起来，后期我们把这个时间自动的每隔1秒进行累加，页面刷新还需要从服务器获取】）
 *    2.为了保证绝对安全，在购买的时候，服务器需要二次校验时间的合法性 
 *    3.降低服务器返回时间和真实时间的误差（减少服务器的响应时间）
 *      1）请求方式基于HEAD，只获取响应头信息即可
 *      2）在AJAX状态为2的时候处理，无需等到状态为4
 */
// let box1 = document.querySelector('#countDown'),
// 	content = document.querySelector('#content'),
// 	timerNow = document.querySelector('#timer'),
// 	timer1 = null;

// // 获取服务器时间
// function getServerTime() {
// 	return new Promise(resolve => {
// 		let xhr = new XMLHttpRequest;
// 		xhr.open('head', './data.json?_=' + Math.random());
// 		xhr.onreadystatechange = () => {
// 			if (xhr.readyState === 2 && /^(2|3)\d{2}$/.test(xhr.status)) {
// 				let time = xhr.getResponseHeader('date');
// 				// 获取的TIME是格林尼治时间 GMT（北京时间 GMT+0800）
// 				time = new Date(time);
// 				resolve(time);
// 			}
// 		};
// 		xhr.send(null);
// 	});
// }

// // 根据服务器时间计算倒计时
// function computed(time) {
// 	// time从服务器获取的当时间
// 	// target是抢购的目标时间
// 	// spanTime两个时间的毫秒差
// 	let timeR = content.innerHTML;
// 	console.log(timeR);
	
// 	let target = new Date('2020/05/18 15:57:35'),
// 		spanTime = target - time;
// 	if (spanTime <= 0) {
// 		// 已经到达抢购的时间节点了
// 		box.innerHTML = "开始抢购吧！";
// 		clearInterval(timer);
// 		return;
// 	}
// 	// 计算出毫秒差中包含多少小时、多少分钟、多少秒
// 	let hours = Math.floor(spanTime / (60 * 60 * 1000));
// 	spanTime = spanTime - hours * 60 * 60 * 1000;
// 	let minutes = Math.floor(spanTime / (60 * 1000));
// 	spanTime = spanTime - minutes * 60 * 1000;
// 	let seconds = Math.floor(spanTime / 1000);
// 	hours < 10 ? hours = '0' + hours : null;
// 	minutes < 10 ? minutes = '0' + minutes : null;
// 	seconds < 10 ? seconds = '0' + seconds : null;
// 	content.innerHTML = `${hours}:${minutes}:${seconds}`;
// }

// getServerTime().then(time => {
// 	// 获取到服务器时间后，计算倒计时
// 	computed(time);

// 	// 每间隔1秒中，让获取的时间累加1秒，在重新计算倒计时结果
// 	timer = setInterval(() => {
// 		time = new Date(time.getTime() + 1000);
// 		computed(time);
// 	}, 1000);
// });
// 京东秒杀倒计时

    let timer = setInterval(fn,1000)
    function fn(){
        // 先获取当前时间，拿到几点场倒计时的终点
        let now = new Date(Date.now() + 1000 * 60 * 60);//获取下个小时
        
        let year = now.getFullYear();
        let month = String(now.getMonth()+1).padStart(2,'0');//不足两位补后面的字符串
        let day = String(now.getDate()).padStart(2,'0');
        let hour_c = String(now.getHours()).padStart(2,'0');


        let endTime = new Date(`${year}-${month}-${day} ${hour_c}:00:00`);
        // console.log(`${year}-${month}-${day} ${hour_c}:00:00`);

        let addZero = val => val<10?'0'+val:val;
        let time = new Date();
        let diffTime = endTime - time;
        if(diffTime<=0){
            clearInterval(timer);
            return
        }
        let hour = Math.floor(diffTime/1000/60/60);
        let min = Math.floor((diffTime-hour*60*60*1000)/1000/60);
        let sec = Math.floor((diffTime-hour*60*60*1000-min*60*1000)/1000);
        $(".countDown strong").html(hour_c  + ' : 00');
        $(".timer_hour").html(addZero(hour));
        $(".timer_minute").html(addZero(min));
        $(".timer_second").html(addZero(sec));
    }
    fn()


