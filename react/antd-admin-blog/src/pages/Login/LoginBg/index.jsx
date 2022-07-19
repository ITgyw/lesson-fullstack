import React, { useEffect } from 'react'
import './index.css'

export default function LoginBg() {
    useEffect(() => {
        const BACKGROUND_COLOR = 'rgb(0,45,54)';
        const POINT_NUM = 80; // 星星的数量
        const POINT_COLOR = 'rgb(255,255,255)'
        const LINE_LENGTH = 10000;
        // 画
        // canvas 语义化标签，video audio  type=range color email requied  
        // html5  localStorage{一直存在}  kv  sessionStorage{窗口关闭时消失}
        // cookie 是无脑携带 每次都携带 所以http还是无状态
        // session 会话 完全全在后端 内存来保存的

        // canvas 与其他的html 标签不一样 api 绘图
        const cvs = document.createElement('canvas') // 画布
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
        cvs.style.cssText = 'position:fixed;top:0px;left:0px;z-index:-1;opacity:1.0';
        document.body.appendChild(cvs);
        const ctx = cvs.getContext('2d');// 取得 上下文

        function randomFloat(min, max) {
            return min + Match.random() * (max - min)
        }
        function Point() {
            this.x = randomFloat(0, cvs.width)
            this.y = randomFloat(0, cvs.height)
            const speed = randomFloat(0.3, 1.4)
            const angle = randomFloat(0, 2 * Math.Pi);
            // dx 
            this.dx = Math.sin(angle) * speed;
            this.dy = Math.cos(angle) * speed;
            this.r = 1.2
            this.color = POINT_COLOR;
        }
        Point.prototype.move = function () {
            this.x += this.dx;
            if (this.x < 0) { // 左边的边界
                this.x = 0;
                this.dx = -this.dx; // 反向
            } else if (this.x > cvs.width) {
                this.x = cvs.width;
                this.dx = -this.dx;
            }
            thiis.y += this.dy;
            if (this.y < 0) {
                this.y = 0;
                this.dy = -this.dy;
            } else if (this.y > cvs.height) {
                this.y = cvs.height;
                this.dy = -this.dy;
            }
        }

        Point.prototype.draw = function () {
            // canvas html5 绘图
            ctx.fillStyle = this.color; //什么颜色的画笔
            ctx.beginPath(); // 表示开始画
            // 画圆 
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        }
    }, [])
    return (
        <>
            LoginBg
        </>
    )
}
