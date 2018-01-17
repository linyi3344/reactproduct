import defaultState from "./state";
import React from "react";
const reducer = (state=defaultState, action)=>{

  let {type,payload}=action;

  switch(type){
    case 'GetData':
      return Object.assign({},state,{
        homelist:payload
      });
      break
    case 'GetProductData':
      return Object.assign({},state,{
        productlist:payload
      });
      break
    case 'START_LOADING':
      return Object.assign({},state,{
        bload:true
      });
    case 'STOP_LOADING':
      return Object.assign({},state,{
        bload:false
      });
      break;
    case 'CommunityAddData':
      return Object.assign({},state,{
        list:state.list.concat(payload)
      });
      break
      //修改地址
    case 'MessAge':
      return Object.assign(      
        state.addressmsg.map((item) =>
      {payload.id === item.id ?
        {username: item.username, Phonenum:item.Phonenum,Province:item.Province,Address:item.Address} :
        payload
      }
    ));
 
      break
      //增加地址信息
    case 'AddressMsg':
      return Object.assign({},state,{
        addressmsg:state.addressmsg.concat(payload)
      });
      break
      //增加地址信息
    case 'SendSiteMsg':
      return Object.assign({},state,{AddAmendMsg:payload}
      
      );
      //商品信息
    case 'SendProMsg':
        return Object.assign({},state,{ProList:payload}
        
        );
    break
    default:
      return state;
  }
};
export default reducer;