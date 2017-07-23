import React from 'react';
import ReactDom from 'react-dom';
// import router from 'react-router-dom';
import { Button } from 'antd';
import asset from './DSC_3440.jpg';


ReactDom.render(<div><Button>123</Button><a>hello world,chrome</a><img src={asset} alt="" /></div>, document.querySelector('#app'));
