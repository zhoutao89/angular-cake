
import {RequestMethod, RequestOptions,Headers} from '@angular/http';

let baseUrl = 'http://10.3.132.63:88/';


function getUrl(_url){
    if(_url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get: (http, api, params = {}) => {
        return new Promise((resolve, reject) => {
            params['_'] = Math.random();
            http.request(getUrl(api), new RequestOptions({
                method: RequestMethod.Get,
                search: params

            })).toPromise().then((res) => {
                resolve(res.json());
            })
        })
    },
    post : (http, api, params = {} )=>{
        return new Promise((resolve,reject)=>{
            function str( data )
            {
                let ret = ''
                for ( let it in data ) {
                    ret += encodeURIComponent( it ) + '=' + encodeURIComponent( data[it] ) + '&'
                }
                return ret;
            }          
            http.request( getUrl( api ), new RequestOptions({
                method: RequestMethod.Post,
                body: str(params),
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                })
            })).toPromise().then( ( res ) =>
            {
                resolve( res )
            } )
        })
    }
    
    
//  post(api,params={}){
//
//      return new Promise((resolve,reject)=>{
//          function str( data )
//          {
//              let ret = ''
//              for ( let it in data ) {
//                  ret += encodeURIComponent( it ) + '=' + encodeURIComponent( data[it] ) + '&'
//              }
//              return ret;
//          }            
//          this.http.request( this.getUrl( api ), new RequestOptions( {
//              method: RequestMethod.Post,
//              body: str(params),
//              headers: new Headers({
//                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//              })
//          } ) ).toPromise().then( ( res ) =>
//          {
//              resolve( res )
//          } )
//      })
//  }
   
}