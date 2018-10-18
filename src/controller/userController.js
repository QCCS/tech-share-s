/**
 * Created by zhouli on 18/8/23
 */
import user from '../models/user';
async function userController(ctx) {
    let params = ctx.params;
    let data = ctx.request.body;
    let query = ctx.query;
    console.log("------");
    console.log(params);
    console.log(data);
    console.log(query);
    let res = await user.findOne();
    console.log(res)
    let id = res.get('name');
    ctx.body = id;
}
export default userController;
