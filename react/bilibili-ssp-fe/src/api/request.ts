import { axiosInstance } from "./config";
// import { 
//     PartitionType,
//     createPartitionTypes
// } from "@/models";
import {
    URL_PARTITION,
    URL_RANKING_PARTITIONS,
    URL_RANKING
} from './url'

export const getPartitionsRequest =
    () => axiosInstance.get(URL_PARTITION)

export const getRankingPartitionsRequest =
    () => axiosInstance.get(URL_RANKING_PARTITIONS)

export const getRankingRequest = (rId: string) => {
    let url = `${URL_RANKING}/${rId}`
    return axiosInstance.get(url)
}
