/**
 * Created by zhouli on 18/8/23
 */
import login from '../service/user/LoginService';
import jwt from 'jsonwebtoken';
import config from '../config/config.dev';

async function loginController(ctx) {
    let params = ctx.params;
    let data = ctx.request.body;
    let query = ctx.query;
    console.log("------");
    console.log(params);
    console.log(data);
    console.log(query);
    // ctx.body = "登录接口";
    let res = await login(query.mobile, query.password);
    // ctx.body = res.data;
    // console.log(res);

    // 登录成功，签发token
    if(res.data && res.message === "SUCCESS"){
        let userToken = res.data;
        let access_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '1h'}) ;
        let refresh_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '168h'}) ;
        res.data.access_token = access_token;
        res.data.refresh_token = refresh_token;
        //把这个token，加到登陆接口的响应体里面去
        ctx.body = res;
    }

}
export default loginController;
