/**
 * Created by zhouli on 18/9/25
 */
import jwt from 'jsonwebtoken';
import config from '../config/index';
export default function error() {
    return async function (ctx, next) {
        try {
            const token = ctx.header.authorization ; // 获取jwt
            if(token) {
                let payload;
                try {
                    let _userToken = token.split(' ')[1];//token中还有其他信息
                    payload = jwt.verify(_userToken, config.secret.sign);//解密userToken
                    ctx.user = {
                        id: payload.id
                    }
                } catch (err) {
                    console.log('不合法token: ', err)
                }
            }
            console.log(`token: ${token}`);
            await next()
        } catch (err) {
            if (err.status === 401) {
                ctx.body = {
                    code: -1,
                    message: '认证失败'
                }
            } else {
                err.status = 404;
                ctx.body = '404';
                console.log('错误有点离谱，无法识别错误：', err)
            }
        }
    }
}
