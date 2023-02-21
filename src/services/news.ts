import { request } from "@/utils"

export function getListNews(params: AppType.listRequest){
    return request("/api/news", {method: "GET", params})
}