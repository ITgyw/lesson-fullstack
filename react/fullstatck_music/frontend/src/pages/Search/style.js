import styled from 'styled-components'
import style from '@/assets/global-style'

export const Container = styled.div`
    position:fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: ${props => props.play > 0 ? '3rem' : 0};
    width:100%;
    z-index:100;
    overflow:hidden;
    background: #f2f3f4;
    transform-origin: right bottom;
    /* CSSTransition 会把过渡的样式类名给children */
    &.fly-enter,&.fly-appear {
        opacity:0;
        /* 启用GPU加速 */
        transform:translate3d(100%,0,0);

    }
    &.fly-enter-active,&.fly-apply-active {
        opacity: 1;
        transition: all 0.3s;
        transform:translate3d(0,0,0);   
    }
    &.fly-exit {
        opacity:1;
        transform:translate3d(0,0,0);
    }
    &.fly-exit-active {
        opacity:0;
        transition: all 0.3s;
        transform:translate3d(100%,0,0);
    }
`