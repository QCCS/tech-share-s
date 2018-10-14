/**
 * Created by zhouli on 2018/9/25.
 */
import configDev from './config.dev.js';
import configProd from './config.prod.js';
let env = process.env.NODE_ENV || 'development';
console.log(env)
// env = "prod";
let conf = configDev;
if(env === "prod"){
    conf = configProd;
}
export default conf;