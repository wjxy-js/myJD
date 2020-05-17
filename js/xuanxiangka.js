 Object.prototype.tabplugin = function tabplugin(option = {}) {
            option = Object.assign({
                initIndex: 0,
                effect: 'click'
            }, option);
            let _this = this;
            let navList = Array.from(_this.querySelectorAll('.tab>li')),
                conList = _this.querySelectorAll('div'),
                prevIndex = option.initIndex;
            //展示初始对应项
            console.log(prevIndex)
            navList.forEach((item, index) => {
                item.classList.remove('active');
                item.classList.remove('active');
                navList[prevIndex].classList.add('active');
                conList[prevIndex].classList.add('active');
            })
            //点击谁选中谁
            navList.forEach((item, index) => {
                item.addEventListener(option.effect, function () {
                    let _this = this;
                    if (index === prevIndex) return;
                    navList[prevIndex].classList.remove('active');
                    conList[prevIndex].classList.remove('active');
                    _this.classList.add('active');
                    conList[index].classList.add('active');
                    prevIndex = index;
                });
            });
        };

        let tab1 = document.querySelector('#TAB1');
        tab1.tabplugin({
            // initIndex: 1,
            effect: 'mouseover'
        });