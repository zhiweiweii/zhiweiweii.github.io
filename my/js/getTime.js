function getTime() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var w = date.getDay();
    if (w == 1) {
        week = "星期一";
    }
    if (w == 2) {
        week = "星期二";
    }
    if (w == 3) {
        week = "星期三";
    }
    if (w == 4) {
        week = "星期四";
    }
    if (w == 5) {
        week = "星期五";
    }
    if (w == 6) {
        week = "星期六";
    }
    if (w == 7) {
        week = "星期日";
    }
    var time=year+"/"+month+"/"+day+""+" "+week;
    return time;
}