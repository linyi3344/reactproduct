import {fillzero} from "./fillzero";

const date = (time) => {
  var d=new Date();
  d.setTime(time);
  return fillzero(d.getDate())+'/'+fillzero(d.getSeconds());
};
export default date;