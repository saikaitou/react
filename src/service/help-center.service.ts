import HelpInfo from '../model/HelpInfo';

// ES6新特性（async/await）: https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5/Async_await
async function getHelpCenterData(): Promise<HelpInfo[]> {
    return await import('../data/help-center.json').then(list => list.default);
}

const helpCenterService = {
    getHelpCenterData
}

export default helpCenterService;