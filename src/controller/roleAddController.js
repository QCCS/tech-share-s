/**
 * Created by zhouli on 18/8/23
 */
import createService from '../service/role/createService';
async function roleAddController(ctx) {
    let params = ctx.params;
    let data = ctx.request.body;
    let query = ctx.query;
    console.log("------");
    console.log(params);
    console.log(data);
    console.log(query);
    let res = await createService(parseInt(query.id),query.name);
    ctx.body = "创建成功";
    console.log(res);
}
export default roleAddController;
