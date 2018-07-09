var app = new Vue({
    el: '#app',
    data: {
        data: [
            {
                name: '巧呼呼蘇打水',
                price: 30,
                expiryDate: 90
            },
            {
                name: '心驚膽跳羊肉飯',
                price: 65,
                expiryDate: 2
            },
            {
                name: '郭師傅武功麵包',
                price: 32,
                expiryDate: 1
            },
            {
                name: '不太會過期的新鮮牛奶',
                price: 75,
                expiryDate: 600
            },
            {
                name: '金殺 巧粒粒',
                price: 120,
                expiryDate: 200
            }
        ],
        // 點擊後是否反轉icon用
        reverse: false,
        // 確認點擊時的字串候顯示icon
        sortTitle: ''
    },
    // 請在此撰寫 JavaScript

    computed: {
        sortData: function () {

            var vm = this;
            // 先顯示全部資料
            // if (this.sortTitle == ''){
            //   return this.data;
            // }
            // 以上code 不寫 ，一開始也能顯示未排序陣列內容

            if (this.reverse == true) {
                // 排序: 小 > 大
                return this.data.sort(function (a, b) {
                    return a[vm.sortTitle] - b[vm.sortTitle];
                });
            } else if (this.reverse == false) {
                // 排序: 大 > 小 
                return this.data.sort(function (a, b) {
                    return b[vm.sortTitle] - a[vm.sortTitle];
                });
            }
        }
    }
});
