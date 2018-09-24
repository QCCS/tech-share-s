/**
 * Created by zhouli on 18/8/23
 */
import login from '../service/user/LoginService';
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
    ctx.body = res.data;
    console.log(res);
}
export default loginController;
