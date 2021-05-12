import React, { useState, useEffect } from 'react';
import routers from './router/router.config';
import { Switch, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Layout, Menu, Tag } from 'antd';
import './App.less';
import { en, zh } from '@/locale'
import menuList from '@/config/menuConfig.js';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { createHashHistory } from 'history';
import { TwitterPicker } from 'react-color';
import '@/theme/index.css';
const { Header, Sider, Content } = Layout;
const message = { en, zh };
const history = createHashHistory();



function App() {
  const [locale, setLocale] = useState(localStorage['locale'] ? localStorage['locale'] : 'zh');
  const [color, setColor] = useState(localStorage['theme'] ? localStorage['theme'] : "#abb8c3");
  const [isBlock, setBlock] = useState(false);
  const pathname = history.location.pathname;
  const [selectedKeys, setKeys] = useState([pathname === '/' ? '/main' : pathname]);
  const jump = item => {
    setKeys([item.path]);
    history.push(item.path);
  }
  const changeLangle = () => {
    let value = locale === 'zh' ? 'en' : 'zh';
    localStorage.setItem('locale', value);
    setLocale(value);
  }
  const handleDrak = () => {
    setBlock(!isBlock);
  }
  const changeDrak = (e) => {
    localStorage.setItem('theme', e);
    setColor(e);
    setBlock(false);
  }
  useEffect(() => {
    document.body.style.setProperty('--drak', color);
  }, [color]);
  return (
    <IntlProvider locale={locale} messages={message[locale]}>
      <Layout>
        <Sider trigger={null} collapsible>
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
            {
              menuList.map((v, i) => {
                return <Menu.Item key={v.path} onClick={() => jump(v)}>
                  <FormattedMessage id={v.name} />
                </Menu.Item>
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className='header'>
              <span>
                <Tag onClick={handleDrak} className='change_drak'>
                  <FormattedMessage id='changeTheme' />
                </Tag>
                {
                  isBlock && <TwitterPicker
                    color={color}
                    onChange={(e) => changeDrak(e.hex)}
                    className='drak_controll' />
                }
                <Tag onClick={changeLangle}>
                  <FormattedMessage id='langleName' />
                </Tag>
              </span>
            </div>
          </Header>
          <Content className="site-layout-background">
            <Switch>
              {renderRoutes(routers)}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </IntlProvider>
  );
}

export default App;
