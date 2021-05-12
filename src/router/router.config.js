import {Redirect} from 'react-router-dom';


let moduleFile = require.context("../pages", true, /\index.(jsx|js)$/);
let result = moduleFile.keys().reduce((prev, item) => {
  let str = item.split("/")[item.split("/").length - 2];
  let name = str[0].toLocaleUpperCase() + str.slice(1);
  prev = Object.assign({}, prev, {
    [name]:moduleFile(item).default
  });
  return prev;
}, {});


export default [
    {
        name:'main',
        path:'/main',
        component:result['Main']
    },
    {
        name:'react-pdf',
        path:'/react-pdf',
        component:result['React-pdf']
    },
    {
      path:'/',
      component:()=><Redirect to="/main" />      
    }
]