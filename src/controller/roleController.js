/**
 * Created by zhouli on 18/8/23
 */
import role from '../models/role';
async function roleController(ctx) {
    let params = ctx.params;
    let data = ctx.request.body;
    let query = ctx.query;
    console.log("------");
    console.log(params);
    console.log(data);
    console.log(query);
    let res = await role.findOne();
    console.log(res)
    let id = res.get('name');
    ctx.body = id;
}
export default roleController;
