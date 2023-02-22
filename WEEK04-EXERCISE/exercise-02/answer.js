// ข้อ 2.1

function display(msg) {
    let div = document.getElementById('ex01-div')
    div.innerHTML = msg
}

function showConfirm(callback) {
    // You code here
    if (window.confirm("confirm")) {
        display("ยืนยันจ้า")
    }else{
        display("ไม่ดีกว่า")
    }
}

// ข้อ 2.2
function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
    setTimeout(() => {
        document.getElementById("start").innerHTML = "Program started"
    }, 0)
    setTimeout(() => {
        document.getElementById("process").innerHTML = "Hello World"
    }, 2000)
    setTimeout(() => {
        document.getElementById("end").innerHTML = "Program ended"
    }, 5000)
}

// ข้อ 2.3
function stopTime() {
    document.getElementById("setMinute").innerHTML = "00"
    document.getElementById("setSecond").innerHTML = "00"
    let time = parseInt(document.getElementById("Time").value);
    setInterval(() => {
        if(time>0){
            time -= 1
            let minute = Math.floor(time / 60)
            let sec = time - minute * 60
            document.getElementById("setMinute").innerHTML = String(minute).padStart(2, '0')
            document.getElementById("setSecond").innerHTML = String(sec).padStart(2, '0')
        }
    }, 1000)
}

