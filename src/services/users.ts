import { request } from "@/utils"

export function getListUsers(params: AppType.listRequest) {
    return request("/api/users", {
        method: "GET",
        params
    })
}