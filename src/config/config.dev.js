/**
 * Created by zhouli on 18/9/24
 * 配置信息
 */
import appSetting from '../../settings/appSettings';
let config = {
    port: appSetting.development.port,
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'mac123',
        database: 'tech_share_dev',
        port: '3306'
    },
    secret:{
        sign:"secret"
    }
};
export default config;