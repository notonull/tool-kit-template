import request from '@/utils/http/axios'

export class article {

    static async GetCountAsync() {
        return await request({
            url: "/api/SnArticle/GetCountAsync",
            method: 'get',
        })
    }

    static async AddAsync(resultData: IntArticle) {
        return await
            request({
                url: "/api/SnArticle/AddAsync",
                method: "post",
                data: resultData,
            })
    }

    static async UpdateAsync(resultData: IntArticle) {
        return await
            request({
                url: "/api/SnArticle/UpdateAsync",
                method: "put",
                data: resultData,
            })
    }

    static async DeleteAsync(id: number) {
        return await
            request({
                url: "/api/SnArticle/DeleteAsync?id=" + id,
                method: "delete",
            })
    }
}