/**
 * Created by zhouli on 2018/9/25.
 */
import configDev from './config.dev.js';
import configProd from './config.prod.js';
const env = process.env.NODE_ENV || 'development';
let conf = configDev;
if(env === "prod"){
    conf = configProd;
}
export default conf;