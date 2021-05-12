import React, { Component } from 'react';
import PdfView from '@/components/PdfPreview';
import './index.less';

class index extends Component {
    render() {
        return (
            <div>
                <PdfView/>
            </div>
        );
    }
}

export default index;
