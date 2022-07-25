import { PartitionType } from
// 模块化 接口多
export const getHotwordRequest = (): Promise<any[]> => {

    const p = new Promise<any[]>((resolve, reject) => {
        fetch('http://localhost:3300/search/hotword')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                resolve(data)
            })
    });
    return p;
}