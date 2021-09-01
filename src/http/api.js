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
        url:request_url.teachers,
        data:arg,
        method:'get'
    })
}