/**
 * Created by zz on 2017/6/1.
 */
import $ from './jquery';
import {host} from "../../config/config"
$.request=function (path,options) {
    $.ajax(host+path,{
        data:options.data||{},
        success:options.success,
        type:options.type||"post",
        "async":options.async||"true",
        dataType:options.dataType||"json",
        error:function () {
            options.error&&options.error();
        }
    })
};
export default $;