import service from './service'
import request_url from './request'
// import request from './request'

export function smsCode(arg){
    return service({
        url:request_url.smsCode,
        data:arg,
        method:'post'
    })
}

export function login(arg){
    return service({
        url:request_url.login,
        data:arg,
        method:'post'
    })
}

export function tabbar(arg){
    return service({
        url:request_url.tabbar,
        data:arg,
        method:'get'
    })
}

export function banner(arg){
    return service({
        url:request_url.banner,
        data:arg,
        method:'get'
    })
}

export function recommend(arg){
    return service({
        url:request_url.recommend,
        data:arg,
        method:'get'
    })
}
export function password(arg) {
    return service({
        url:request_url.password,
        data:arg,
        method:'post'
    })
}
export function teachers(arg) {
    return service({
        url:request_url.teachers,
        data:arg,
        method:'get'
    })
}
export function teacher_des(arg) {
    return service({
        url:request_url.teacher_des,
        data:arg,
        method:'get'
    })
}
export function data(arg) {
    return service({
        url:request_url.date,
        data:arg,
        method:'get'
    })
}
export function classes(arg) {
    return service({
        url:request_url.classes,
        data:arg,
        method:'post'
    })
}
export function Service(arg) {
    return service({
        url:request_url.title,
        data:arg,
        method:'get'
    })
}
export function content(arg) {
    return service({
        url:request_url.content,
        data:arg,
        method:'post'
    })
}
export function zx_detail(arg) {
    return service({
        url:request_url.zx_detail,
        data:arg,
        method:'post'
    })
}