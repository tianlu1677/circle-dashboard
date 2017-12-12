import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './index.scss';
import { Layout } from 'antd';

const { Footer } = Layout;

class index extends Component {
  static propTypes() {
    return {
      links: PropTypes.Object,
    };
  }

  render() {
    const { links } = this.props
    return (
      <Footer>
        
      
      <div className={s.content}>

        {
           links && (
             <div className={s.links}>
               {links.map(link => (
                  <a href={link.href} target='_blank'>
                    {link.title}
                  </a>
                ))}
             </div>
            )
        }
      </div>
      </Footer>
    );
  }
}

export default index;
