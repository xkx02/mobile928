import http from '@/utils/request';
export let home_http=function(){
    return http.get('/api/v2/activity/news',{params:{'uid':121014,'api-version':2}});
}

// export function home_http(){
//     let {data}=http.get('/api/v2/activity/news',{params:{'uid':121014,'api-version':2}});
//     return data;
// }
