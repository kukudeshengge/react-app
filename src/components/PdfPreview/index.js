import React, { PureComponent } from 'react';
import { Icon, Spin, Tooltip, Input } from 'antd';
import styles from './File.module.css';
import pdfFile from './1.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import { LeftOutlined, RightOutlined, ZoomInOutlined, ZoomOutOutlined, FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class File extends PureComponent {

    state = {
        pageNumber: 1,
        pageNumberInput: 1,
        pageNumberFocus: false,
        numPages: 1,
        pageWidth: 700,
        fullscreen: false
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages: numPages })
    }

    lastPage = () => {
        if (this.state.pageNumber == 1) {
            return
        }
        const page = this.state.pageNumber - 1
        this.setState({ pageNumber: page, pageNumberInput: page })
    }
    nextPage = () => {
        if (this.state.pageNumber == this.state.numPages) {
            return
        }
        const page = this.state.pageNumber + 1
        this.setState({ pageNumber: page, pageNumberInput: page })
    }
    onPageNumberFocus = e => {
        this.setState({ pageNumberFocus: true })
    };
    onPageNumberBlur = e => {
        this.setState({ pageNumberFocus: false, pageNumberInput: this.state.pageNumber })
    };
    onPageNumberChange = e => {
        let value = e.target.value
        value = value <= 0 ? 1 : value;
        value = value >= this.state.numPages ? this.state.numPages : value;
        this.setState({ pageNumberInput: value })
    };
    toPage = e => {
        this.setState({ pageNumber: Number(e.target.value) })
    };

    pageZoomOut = () => {
        const pageWidth = this.state.pageWidth * 0.8
        if(pageWidth>300)
        this.setState({ pageWidth: pageWidth })
    }
    pageZoomIn = () => {
        const pageWidth = this.state.pageWidth * 1.1
        if(pageWidth<1205)
        this.setState({ pageWidth: pageWidth })
    }

    pageFullscreen = () => {
        if (this.state.fullscreen) {
            this.setState({ fullscreen: false, pageWidth: 700 })
        } else {
            this.setState({ fullscreen: true, pageWidth: 1150 })
        }
    }
    componentDidMount(){
        // console.log(this.wRef.clientWidth,this.wRef.offsetWidth)
        // this.setState({pageWidth:this.wRef.clientWidth});
    }
    render() {
        const { pageNumber, pageNumberFocus, pageNumberInput, numPages, pageWidth, fullscreen } = this.state;
        return (
            <div ref={e => this.wRef = e} className={styles.view}>
                <div  className={styles.pageContainer}>
                    <Document
                        file={pdfFile}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                        loading={<Spin size="large" />}
                    >
                        <Page pageNumber={pageNumber} width={pageWidth} loading={<Spin size="large" />} />
                    </Document>
                </div>
                <div className={styles.pageTool}>
                    <Tooltip title={pageNumber == 1 ? "已是第一页" : "上一页"}>
                        <LeftOutlined className={styles.svg} onClick={this.lastPage} />
                    </Tooltip>
                    <Input value={pageNumberFocus ? pageNumberInput : pageNumber}
                        onFocus={this.onPageNumberFocus}
                        onBlur={this.onPageNumberBlur}
                        onChange={this.onPageNumberChange}
                        onPressEnter={this.toPage} type="number" /> / {numPages}
                    <Tooltip title={pageNumber == numPages ? "已是最后一页" : "下一页"}>
                        <RightOutlined className={styles.svg} onClick={this.nextPage} />
                    </Tooltip>
                    <Tooltip title="放大">
                        <ZoomInOutlined className={styles.svg} onClick={this.pageZoomIn} />
                    </Tooltip>
                    <Tooltip title="缩小">
                        <ZoomOutOutlined className={styles.svg} onClick={this.pageZoomOut} />
                    </Tooltip>
                    <Tooltip title={fullscreen ? "恢复默认" : '适合窗口'}>
                        {
                            fullscreen ? <FullscreenExitOutlined
                                className={styles.svg}
                                onClick={this.pageFullscreen} /> :
                                <FullscreenOutlined
                                    className={styles.svg}
                                    onClick={this.pageFullscreen} />
                        }
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default props => (
    <File {...props} />
);